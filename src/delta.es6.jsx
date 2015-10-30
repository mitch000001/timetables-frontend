import React from 'react';
import {ColumnGroup, Column} from 'fixed-data-table';

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
