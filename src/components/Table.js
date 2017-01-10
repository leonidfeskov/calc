import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  render() {
    let round = n => Math.round(n * 100) / 100;
  
    let formatedMonth = (month) => {
      if (month > 9) {
          return month;
      }
      return '0' + month;
    };

    let calcPercentage = (sum, percent, date) => {
      let daysPerMonth =  33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
      let daysPerYear = date.getFullYear() % 4 === 0 ? 366 : 365;
      return round(sum * percent / 100 / daysPerYear * daysPerMonth);
    };

    let sum =     this.props.inputsData[0].value;
    let rent =    this.props.inputsData[1].value;
    let deposit = this.props.inputsData[2].value;
    let credit =  this.props.inputsData[3].value;
    let total =   this.props.inputsData[4].value;
    let exist =   this.props.inputsData[5].value;

    let now = new Date();

    let rows = [];
    let tableRows = [];

    rows[0] = {};
    rows[0].number = 1;
    rows[0].date = now.getDate() + '.' + formatedMonth(now.getMonth() + 1) + '.' + now.getFullYear();
    rows[0].deposit = exist;
    rows[0].income = calcPercentage(rows[0].deposit, deposit, now);
    rows[0].credit = total - exist;
    rows[0].percentage = calcPercentage(rows[0].credit, credit, now);
    rows[0].overRent = rent;
    rows[0].overCredit = rows[0].percentage;

    tableRows.push(<TableRow row={rows[0]} />);

    let rowIndex = 1;
    while (rows[rowIndex-1].deposit < total || rows[rowIndex-1].credit > 0) {
        rows[rowIndex] = {};

        rows[rowIndex].number = rowIndex + 1;

        let nextMonth = new Date(now.getFullYear(), now.getMonth() + rowIndex, now.getDate());
        rows[rowIndex].date = nextMonth.getDate() + '.' + formatedMonth(nextMonth.getMonth() + 1) + '.' + nextMonth.getFullYear();

        rows[rowIndex].deposit = round(rows[rowIndex - 1].deposit + rows[rowIndex - 1].income + (sum - rent));

        rows[rowIndex].income = calcPercentage(rows[rowIndex].deposit, deposit, nextMonth);

        rows[rowIndex].credit = round(rows[rowIndex - 1].credit - sum + rows[rowIndex - 1].percentage);

        rows[rowIndex].percentage = calcPercentage(rows[rowIndex].credit, credit, nextMonth);

        rows[rowIndex].overRent = round(rows[rowIndex - 1].overRent + rent);

        rows[rowIndex].overCredit = round(rows[rowIndex - 1].overCredit + rows[rowIndex].percentage);

        tableRows.push(<TableRow row={rows[rowIndex]} />);
        rowIndex++;
    }

    return (
      <div className="mb20">
      <h4>Все рассчеты:</h4>
        <p>
            <b>№</b> - номер месяца по порядку.<br/>
            <b>Дата</b> - дата платежа.<br/>
            <b>Вклад</b> - сумма денег не счете в банке.<br/>
            <b>Доход по&nbsp;вкладу</b> - доход от вклада за текущий месяц.<br/>
            <b>Ипотека</b> - остаток долга по ипотеке.<br/>
            <b>% по&nbsp;ипотеке</b> - сумма по процентам ипотеки за текущий месяц.<br/>
            <b>Переплата за&nbsp;аренду</b> - сумма, которую Вы заплатите арендатору квартиры за N месяцев.<br/>
            <b>Переплата по&nbsp;ипотеке</b> - сумма, которую Вы заплатите банку по процентам ипотеки за N месяцев.
        </p>
        <div className="mortgage-table-head">
            <table className="table table-bordered mortgage-table">
                <colgroup>
                    <col className="mortgage-table__col-number"/>
                    <col className="mortgage-table__col-date"/>
                    <col className="mortgage-table__col-deposit"/>
                    <col className="mortgage-table__col-income"/>
                    <col className="mortgage-table__col-credit"/>
                    <col className="mortgage-table__col-percentage"/>
                    <col className="mortgage-table__col-total-rent"/>
                    <col className="mortgage-table__col-total-percentage"/>
                </colgroup>
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Дата</th>
                        <th>Вклад,<br/><span className="mortgage-table__label">руб.</span></th>
                        <th>Доход по&nbsp;вкладу,<br/><span className="mortgage-table__label">руб.</span></th>
                        <th>Ипотека,<br/><span className="mortgage-table__label">руб.</span></th>
                        <th>% по&nbsp;ипотеке,<br/><span className="mortgage-table__label">руб.</span></th>
                        <th>Переплата за&nbsp;аренду,<br/><span className="mortgage-table__label">руб.</span></th>
                        <th>Переплата по&nbsp;ипотеке,<br/><span className="mortgage-table__label">руб.</span></th>
                    </tr>
                </thead>
            </table>
        </div>
        <table className="table table-bordered mortgage-table">
            <colgroup>
                <col className="mortgage-table__col-number"/>
                <col className="mortgage-table__col-date"/>
                <col className="mortgage-table__col-deposit"/>
                <col className="mortgage-table__col-income"/>
                <col className="mortgage-table__col-credit"/>
                <col className="mortgage-table__col-percentage"/>
                <col className="mortgage-table__col-total-rent"/>
                <col className="mortgage-table__col-total-percentage"/>
            </colgroup>
            <tbody className="js-mortgage-data">
              {tableRows}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
