import React from 'react';

export type Theme = 'light' | 'dark';

/*
export type NotificationFilter = 'unread' | 'read' | 'flagged';

export type ATSMessageType =
  | 'History'
  | 'DEP'
  | 'DLA'
  | 'CHG'
  | 'CNL'
  | 'ARR'
  | 'FPL'
  | 'CPL'
  | 'SPL'
  | 'SMM'
  | 'REA'
  | 'RFI'
  | 'SWM'
  | 'SPA'
  | 'SRJ'
  | 'RJT'
  | 'FCM'
  | 'NONE';

export interface NotificationStatus {
  read?: boolean;
  flagged?: boolean;
}

export interface Notification extends NotificationStatus {
  key: React.Key;
  id: string;
  type: string;
  event: string;
  time: string;
}

export interface FlightListFilterOptionTemplate
  extends FlightListTableFilterOption {
  name: string;
}

export interface FlightListTableFilterOption {
  filter: FlightListFilter;
  columns: { [key: string]: { visible: boolean } };
}

export interface FlightListFilter {
  isValuesChanged: boolean;
  aircraftIdentification: string[];
  timeIntervalModeIsEOBT?: boolean;
  departureAerodrome: string[];
  EOBT: {
    from: {
      hour: number | null;
      minute: number | null;
    };
    to: number | null; //hrs
  };
  destinationAerodrome: string[];
  dateOfFlight: {
    from: string | null | undefined;
    to: string | null | undefined;
  };
}

export type FlightRule = 'V' | 'I' | 'Y' | 'Z';

export type FlightType = 'G' | 'M' | 'N' | 'S' | 'X' | 'P';

type unitTypes =
  | 'cm'
  | 'mm'
  | 'Q'
  | 'in'
  | 'pc'
  | 'pt'
  | 'px'
  | 'em'
  | 'ex'
  | 'ch'
  | 'rem'
  | 'lh'
  | 'rlh'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | 'vb'
  | 'vi'
  | 'svw'
  | 'svh'
  | 'lvw'
  | 'lvh'
  | 'dvw'
  | 'dvh'
  | '%';

export type unit = `${number}${unitTypes}` | 'unset' | 'initial' | 'inherit';

export interface FormInstanceSchema {
  [key: string]: string | boolean | number | undefined | Moment;
}

type EquipmentModalCheckboxGroupPosition = 'left' | 'right';

interface EquipmentModalCheckbox {
  // The key also serves as translation key
  key: string;
}

export interface EquipmentModalCheckboxGroup {
  // The key also serves as translation key
  key: string;
  position: EquipmentModalCheckboxGroupPosition;
  columns: 1 | 2 | 3;
  checkboxes: EquipmentModalCheckbox[];
}

export type MessageTemplate = {
  name?: string;
  originator?: string;
  filingTime?: string;
  priority?: string;
  addresses?: string[];
  text?: string;
  systemTime?: string;
  message?: string;
};
*/