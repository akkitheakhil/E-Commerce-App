import { IElectronic } from "../../types/electronics/electronics.type";

export interface EletronicServiceInterface {
   getAllItems(): Promise<IElectronic[]>
   addNew(dto: any): Promise<IElectronic>
   findById(id: string): Promise<IElectronic>
   deleteById(id: string): Promise<IElectronic>
}