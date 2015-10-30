import React, {Component} from 'react';
import {ColumnGroup, Column} from 'fixed-data-table';

export class Delta extends Component {

  cellDataGetter(dataKey, rowData) {
    return rowData[this.props.dataKey][dataKey];
  }

  render() {
    return (
      <ColumnGroup
        label={this.props.label}>
        <Column
          dataKey={'estimated'}
          cellDataGetter={this.cellDataGetter.bind(this)}
          label={'Plan'}
          width={this.props.width}
        />
        <Column
          dataKey={'actual'}
          cellDataGetter={this.cellDataGetter.bind(this)}
          label={'Ist'}
          width={this.props.width}
        />
        <Column
          dataKey={'actualHours'}
          cellDataGetter={this.cellDataGetter.bind(this)}
          label={'Ist (Stunden)'}
          width={this.props.width}
        />
        <Column
          dataKey={'delta'}
          cellDataGetter={this.cellDataGetter.bind(this)}
          label={'Delta (über Soll)'}
          width={this.props.width}
        />
      </ColumnGroup>
    );
  }

}

export function delta(label, width, cellGroupDataKey) {

  function cellDataGetter(cellDataKey, rowData) {
    return rowData[cellGroupDataKey][cellDataKey];
  }

    return (
      <ColumnGroup
        label={label}>
        <Column
          dataKey={'estimated'}
          cellDataGetter={cellDataGetter}
          label={'Plan'}
          width={width}
        />
        <Column
          dataKey={'actual'}
          cellDataGetter={cellDataGetter}
          label={'Ist'}
          width={width}
        />
        <Column
          dataKey={'actualHours'}
          cellDataGetter={cellDataGetter}
          label={'Ist (Stunden)'}
          width={width}
        />
        <Column
          dataKey={'delta'}
          cellDataGetter={cellDataGetter}
          label={'Delta (über Soll)'}
          width={width}
        />
      </ColumnGroup>
    );

}