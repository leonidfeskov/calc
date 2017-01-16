import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../components/Input';
import * as inputActions from '../actions/InputActions';

class Panel extends Component {
  render() {
    console.log('panel:', this.props);

    let { sum, rent } = this.props;
    let { setValue } = this.props.inputActions;

    return (
      <div className="panel panel-default mortgage-input-data">
        <div className="panel-heading"><b>Введите данные</b></div>
        <div className="panel-body">
          <Input label={sum.label} value={sum.value} units={sum.units} hint={sum.hint} setValue={setValue} />
          <Input label={rent.label} value={rent.value} units={rent.units} hint={rent.hint} setValue={setValue} />

          <button className="btn btn-primary">Рассчитать</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sum: state.panel.sum,
    rent: state.panel.rent
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inputActions: bindActionCreators(inputActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);