import { Delta } from "./delta";

export interface DistrictLevelData {
    notes?: string
    active?: number
    confirmed?: number
    migratedother?: number
    deceased?: number
    recovered?: number
    delta?: Delta
}
