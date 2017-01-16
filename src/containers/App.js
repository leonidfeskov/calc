import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Panel from '../components/Panel';
import Table from '../components/Table';
import * as panelActions from '../actions/PanelActions';


class App extends Component {
  render() {
    console.log('App:', this.props);

    const { panel } = this.props;
    const { setSum, setRent, calc } = this.props.panelActions;

    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <Panel sum={panel.sum} rent={panel.rent} setSum={setSum} setRent={setRent} calc={calc} />
          </div>
          <div className="col-md-9">
            <Table tableData={panel.tableData} />
          </div>
        </div>
        <div className="mb-20" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    panel: state.panel
  }
}

function mapDispatchToProps(dispatch) {
  return {
    panelActions: bindActionCreators(panelActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
