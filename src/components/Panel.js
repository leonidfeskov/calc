import React, { Component } from 'react';
import Input from './Input';

class Panel extends Component {
  render() {
    let inputs = this.props.inputsData.map(function(input) {
        return <Input label={input.label} value={input.value} units={input.units} hint={input.hint} />
    });

    return (
      <div className="panel panel-default mortgage-input-data">
        <div className="panel-heading"><b>Введите данные</b></div>
        <div className="panel-body">
          {inputs}
          <button className="btn btn-primary js-btn-calc">Рассчитать</button>
        </div>
      </div>
    );
  }
}

export default Panel;
