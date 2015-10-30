import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, ColumnGroup} from 'fixed-data-table';
import {BarChart} from 'react-d3-components';
import {Delta, delta} from './delta';

const names = ['Mitch', 'flooose', 'lootch'];

let floooseData = ['flooose', 8, 20.00, 20.03, 160.25, 0.03, 2.13, 10, 80, 7.87, 0.72, 0.00, 0, -0.72, 17.14, 10.03, -7.11, 13.07, 3.91, 31.25, -9.17, 4.07, 6.13, -2.05, '76.25%', '38.94%', '-37.31%', -3.74, 191.00, 191.75, 1534, 2.53, 27.27, 19, 152, -8.27, 6.89, 0, 0, -6.89, 156.84, 172.75, 15.91, 119.59, 133.69, 1069.5, 14.09, 37.25, 39.06, -1.81, '76.25%', '77.39%', '1.14%', 23.18, 33.89, 7.50, 60.00, 14.89, 7.39];
let mitchData = ['mitch', 8, 20.00, 19.69, 157.5, -0.31, 2.13, 1, 8, -1.13, 1.36, 5.00, 40, 3.64, 16.51, 13.69, -2.82, 13.21, 5.78, 46.25, -7.43, 3.30, 7.91, -4.60, '80.00%', '42.24%', '-37.76%', -5.17, 191.00, 192.50, 1540, 0.72, 21.38, 17, 136, -4.38, 12.95, 19, 152, 6.05, 156.67, 156.50, -0.17, 125.34, 114.31, 914.5, -11.02, 31.33, 42.19, -10.85, '80.00%', '73.04%', '-6.96%', -30.69, 28.00, 8.00, 64.00, 11.00, 3.00];
let lootchData = ['lootch', 8, 20.00, 18.88, 151.03, -1.12, 2.13, 5, 40, 2.87, 0.72, 0.00, 0, -0.72, 17.14, 13.88, -3.27, 13.07, 9.81, 78.5, -3.26, 4.07, 4.07, 0.01, '76.25%', '70.70%', '-5.55%', -0.77, 191.00, 190.72, 1525.78, -1.04, 22.27, 18.59375, 148.75, -3.67, 6.89, 5, 40, -1.89, 161.85, 167.13, 5.28, 127.55, 133.66, 1069.25, 6.11, 34.30, 33.47, 0.83, '78.81%', '79.97%', '1.16%', 4.66, 28.88, 8.00, 64.00, 10.29, 2.29]

let columns = ["Arbeits- stunden pro Tag", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Verbleibend", "Plan",  "Ist", "Delta", "Übrige nicht fakturierte Tage bereinigt", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Delta (über Soll)", "Plan",  "Ist", "Ist (Std)", "Delta (über Soll)", "Plan",  "Ist", "Verbleibend", "Plan",  "Ist", "Delta", "Übrige nicht fakturierte Tage bereinigt", "Anspruch Urlaubstage",  "geplante Urlaubstage",  "geplante Urlaubstage (Std.)", "Übrig", "Ungeplant"];
let entries = [
  {name: 'flooose', 'tracked': {actual: 1, estimated: 1.5, actualHours: 8, delta: 0.5}},
  {name: 'mitch', 'tracked': {actual: 1, estimated: 1.5, actualHours: 8, delta: 0.5}}
];

let data = [
  mitchData,
  floooseData,
  lootchData
];

function rowGetter(index) {
  return entries[index];
}

ReactDOM.render(
  <Table
    rowHeight={50}
    rowGetter={rowGetter}
    rowsCount={entries.length}
    width={1500}
    height={500}
    groupHeaderHeight={30}
    headerHeight={30}>
    <ColumnGroup label='Name'>
      <Column width={100} label='' dataKey='name' />
    </ColumnGroup>
    {delta('Tage aus Harvest', 200, 'tracked')}
  </Table>,
  document.getElementById('root')
);

// let bdata = [
//     {
//     label: 'somethingA',
//     values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
//     },
//     {
//     label: 'somethingB',
//     values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
//     },
//     {
//     label: 'somethingC',
//     values: [{x: 'SomethingA', y: 6}, {x: 'SomethingB', y: 8}, {x: 'SomethingC', y: 5}]
//     }
// ];

// ReactDOM.render(<BarChart
//                 groupedBars
//                 data={bdata}
//                 width={400}
//                 height={400}
//                 margin={{top: 10, bottom: 50, left: 50, right: 10}}/>,
//             document.getElementById('location'));
