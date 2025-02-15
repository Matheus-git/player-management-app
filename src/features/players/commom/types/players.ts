export type physicalData = {
  height: number;
  weight: number;
  preferredFoot: string;
};

export type position = {
  primary: string;
};

export type jerseyNumber = {
  number: number;
};

export type status = {
  currentStatus:
    | "Active"
    | "Injured"
    | "Suspended";
};

export type player = {
  id: number;
  name: string;
  birthdate: string;
  photo: string;
  nationality: string;
  physicalData: physicalData;
  position: position;
  jerseyNumber: jerseyNumber;
  status: status;
};
