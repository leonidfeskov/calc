import React, { Component } from 'react';
import TableRow from './TableRow';

class Table extends Component {
  render() {
      let tableData = this.props.tableData;

      let tableRows = tableData.map(function(row, i) {
          return <TableRow row={row} key={i} />
      });

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
