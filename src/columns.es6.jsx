import React from 'react';
import {Column, ColumnGroup} from 'fixed-data-table';
import {delta} from './delta';

export const mappedColumnGroups = {
  name: 'Name',
  workingDegree: 'Arbeits- stunden pro Tag',
  workingDegreeFull: 'Arbeits- stunden pro Tag (100%)',
  trackedDays: 'Tage aus Harvest',
  vacationDays: 'Urlaub',
  sicknessDays: 'Krankheit',
  officeDays: 'Bürotage',
  billableDays: 'Fakturierte Tage',
  nonbillableDays: 'Overhead & Slacktime',
  billingDegree: 'Fakturierungsgrad',
  cumulatedTrackedDays: 'Arbeitstage',
  cumulatedVacationDays: 'Urlaub',
  cumulatedSicknessDays: 'Krankheit',
  cumulatedOfficeDays: 'Bürotage',
  cumulatedBillableDays: 'Fakturierte Tage',
  cumulatedNonbillableDays: 'Overhead & Slacktime',
  cumulatedBillingDegree: 'Fakturierungsgrad',
  vacation: 'Urlaub',
  selfImprovement: 'Weiter- bildungs- budget'
};

export function columnGroupJSX() {
  let columns = [];
  let propKeys = Object.keys(mappedColumnGroups);

  for (let key of propKeys) {
    let value = mappedColumnGroups[key];
    switch (key) {
      case 'name':
        columns.push(
          <ColumnGroup label='Name'>
            <Column width={100} label='' dataKey='name' />
          </ColumnGroup>);
        break;
      case 'workingDegree':
        columns.push(
          <ColumnGroup label={value}>
            <Column width={100} label='' dataKey={key} />
          </ColumnGroup>);
        break;
      case 'workingDegreeFull':
        columns.push(
          <ColumnGroup label={value}>
            <Column width={100} label='' dataKey={key} />
          </ColumnGroup>);
        break;
      default:
        columns.push(delta(value, 200, key));
        break;
      }
    }
  return columns;
}


export const columnGroups = [
  'Name',
  'Arbeits- stunden pro Tag',
  'Arbeits- stunden pro Tag (100%)',
  'Tage aus Harvest',
  'Urlaub',
  'Krankheit',
  'Bürotage',
  'Fakturierte Tage',
  'Overhead & Slacktime',
  'Fakturierungsgrad',
  'Arbeitstage',
  'Urlaub',
  'Krankheit',
  'Bürotage',
  'Fakturierte Tage',
  'Overhead & Slacktime',
  'Fakturierungsgrad',
  'Urlaub',
  'Weiter- bildungs- budget'
];

export const columns = [
  "Arbeits- stunden pro Tag",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Verbleibend",
  "Plan",
  "Ist",
  "Delta",
  "Übrige nicht fakturierte Tage bereinigt",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Ist (Std)",
  "Delta (über Soll)",
  "Plan",
  "Ist",
  "Verbleibend",
  "Plan",
  "Ist",
  "Delta",
  "Übrige nicht fakturierte Tage bereinigt",
  "Anspruch Urlaubstage",
  "geplante Urlaubstage",
  "geplante Urlaubstage (Std.)",
  "Übrig",
  "Ungeplant",
  'Ist',
  'Weiterbildungsbudget aus fakturierten Tagen über Soll',
  'Weiterbildungsbudget aus fakturierten Tagen über Soll nach Verrechnung',
  'fakturierte Tage verrechnet mit Weiterbildungsbudget'
];
