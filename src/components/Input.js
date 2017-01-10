import React, { Component } from 'react';

class Input extends Component {
  render() {
    let hint = this.props.hint ? this.props.hint : '';
    let qustionIcon = this.props.hint ? <span className="glyphicon glyphicon-question-sign"></span> : '';

    return (
      <div className="form-group">
        <label title={hint}>
          {this.props.label}:
          {qustionIcon}
        </label>
        <div className="input-group">
          <input type="text" className="form-control js-input-sum" value={this.props.value} />
          <span className="input-group-addon">{this.props.units}</span>
        </div>
        <div className="text-danger js-input-error"></div>
      </div>
    );
  }
}

export default Input;
