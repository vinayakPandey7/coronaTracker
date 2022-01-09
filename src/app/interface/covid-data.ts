export interface CovidData {
  districtData?: DistrictData;
  statecode?: string;
}

export interface DistrictData {
  DistrictLevelData?: DistrictLevelData;
}

export interface DistrictLevelData {
  notes?: string;
  active?: number;
  confirmed?: number;
  migratedother?: number;
  deceased?: number;
  recovered?: number;
  delta?: Delta;
}

export interface Delta {
  confirmed?: number;
  deceased?: number;
  recovered?: number;
}
