import { TElectronic } from "../../types/electronics/electronics.type";

export interface IEletronicService {
   getAllItems(): Promise<TElectronic[]>
   addNew(dto: any): Promise<TElectronic>
   findById(id: string): Promise<TElectronic>
   deleteById(id: string): Promise<TElectronic>
}
