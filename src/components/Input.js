import React, { PropTypes, Component } from 'react';

export default class Input extends Component {
  onInputChange(e) {
    this.props.setValue(e.target.value);
  }

  render() {
    let { label, value, units, hint } = this.props;
    let qustionIcon = hint ? <span className="glyphicon glyphicon-question-sign"></span> : '';

    return (
      <div className="form-group">
        <label title={hint}>
          {label}:
          {qustionIcon}
        </label>
        <div className="input-group">
          <input type="text" className="form-control js-input-sum" value={value} onChange={this.onInputChange.bind(this)} />
          <span className="input-group-addon">{units}</span>
        </div>
        <div className="text-danger js-input-error"></div>
      </div>
    );
  }
}
