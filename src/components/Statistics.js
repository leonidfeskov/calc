import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div className="mb-20">
        <h4>Результаты:</h4>
        <p>
          <b>Если Вы будете копить:</b><br/>
          Вы накопите необходимую сумму за <b className="text-success js-statistics-deposit-months">0</b>.
          При этом переплата за аренду квартиры составит <b className=" text-success js-statistics-deposit-overpayment">0</b>
        </p>
        <p>
          <b>Если Вы возьмете ипотеку:</b><br/>
          Вы выплатите ипотеку за <b className="text-info js-statistics-credit-months">0</b>.
          При этом переплата по процентам составит <b className="text-info js-statistics-credit-overpayment">0</b>
        </p>
      </div>
    );
  }
}

export default Statistics;
