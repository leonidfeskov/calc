import React, { Component } from 'react';
import calculate from '../utils/calculate';

export default class Panel extends Component {
  getUserData() {
    return {
      sum: Number(this.props.sum.value),
      rent: Number(this.props.rent.value),
      deposit: 7,
      credit: 12,
      total: 1000000,
      exist: 0
    }
  }

  onSumInputChange(e) {
    this.props.setSum(e.target.value);
  }

  onRentInputChange(e) {
    this.props.setRent(e.target.value);
  }

  onCalcBtnClick() {
    var dataTable = calculate(this.getUserData());
    console.table(dataTable);
    this.props.calc(dataTable);
  }

  render() {

    let { sum, rent } = this.props;

    return (
      <div className="panel panel-default mortgage-input-data">
        <div className="panel-heading"><b>Введите данные</b></div>
        <div className="panel-body">
          <div className="form-group">
            <label title={sum.hint}>
              {sum.label}:
            </label>
            <div className="input-group">
              <input type="text" className="form-control" value={sum.value} onChange={this.onSumInputChange.bind(this)} />
              <span className="input-group-addon">{sum.units}</span>
            </div>
            <div className="text-danger"></div>
          </div>

          <div className="form-group">
            <label title={rent.hint}>
              {rent.label}:
            </label>
            <div className="input-group">
              <input type="text" className="form-control" value={rent.value} onChange={this.onRentInputChange.bind(this)} />
              <span className="input-group-addon">{rent.units}</span>
            </div>
            <div className="text-danger"></div>
          </div>

          <button className="btn btn-primary" onClick={this.onCalcBtnClick.bind(this)}>Рассчитать</button>
        </div>
      </div>
    );
  }
}