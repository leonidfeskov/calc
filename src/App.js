import React, { Component } from 'react';
import Panel from './components/Panel'
import Statistics from './components/Statistics'
import Table from './components/Table'

class App extends Component {
  render() {
    let inputsData = [
      {
        label: 'Сумма в месяц',
        value: 80000,
        units: 'руб.',
        hint: 'Ежемесячная сумма, которую вы можете выделять на квартиру. Например, если вы решили откладывать по 30 000 руб./мес., и при этом снимаете квартиру за 15 000 руб., то сумма будет 45 000 руб.'
      },
      {
        label: 'Аренда квартиры',
        value: 16000,
        units: 'руб.',
        hint: 'Стоимость аренды квартиры в месяц. Если вы живете в своей квартире, можете поставить 0 или стоимость коммунальных платежей.'
      },
      {
        label: '% по вкладу',
        value: 7,
        units: '%',
        hint: 'Если вы решили откладывать деньги на счет в банке, укажите процентную ставку по вкладу. Если храните деньги под матрасом, укажите 0.'
      },
      {
        label: '% по ипотеке',
        value: 12,
        units: '%'
      },
      {
        label: 'Стоимость квартиры',
        value: 4500000,
        units: 'руб.'
      },
      {
        label: 'Уже есть',
        value: 1000000,
        units: 'руб.'
      }
    ];

    return (
      <div className="row">
        <div className="col-md-3">
          <Panel inputsData={inputsData} />
        </div>
        <div className="col-md-9">
          <Statistics />
          <Table inputsData={inputsData} />
          <div className="mb-20" />
        </div>
      </div>
    );
  }
}

export default App;
