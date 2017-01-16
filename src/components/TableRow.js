import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    let formatedPrice = (n) => n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');

    return (
      <tr>
        <td>{this.props.row.number}</td>
        <td>{this.props.row.date}</td>
        <td>{formatedPrice(this.props.row.deposit)}</td>
        <td>{formatedPrice(this.props.row.income)}</td>
        <td>{formatedPrice(this.props.row.credit)}</td>
        <td>{formatedPrice(this.props.row.percentage)}</td>
        <td>{formatedPrice(this.props.row.overRent)}</td>
        <td>{formatedPrice(this.props.row.overCredit)}</td>
      </tr>
    );
  }
}

export default TableRow;
