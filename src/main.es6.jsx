import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Table, Column, ColumnGroup} from 'fixed-data-table';
import {BarChart} from 'react-d3-components';
import {Delta, delta} from './delta';
import {columnGroups, columns, columnGroupJSX} from './columns';
import testData from 'json!../test_data.json';

function rowGetter(index) {
  return testData[index];
}

ReactDOM.render(
  <Table
    rowHeight={50}
    rowGetter={rowGetter}
    rowsCount={testData.length}
    width={1500}
    height={1000}
    groupHeaderHeight={30}
    headerHeight={30}>
    {columnGroupJSX()}
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
