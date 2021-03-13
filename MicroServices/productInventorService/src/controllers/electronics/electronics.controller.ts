import { IElectronic } from "../../types/electronics/electronics.type";
import { NextFunction, Request, Response } from 'express';
import { Subcategories } from "../../utils/categories.enum";
import ElectronicService from "../../services/electronics/electronics.service";

class ElectronicController {

  public getAllSubcatogeryItems = async (req: Request, res: Response, next: NextFunction) => {
    const subcategoryname: Subcategories = req.params.subcategoryname as Subcategories;
    try {
      const electronicService = new ElectronicService(subcategoryname);
      const getAllItems: IElectronic[] = await electronicService.getAllItems();
      res.status(200).json({ data: getAllItems, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public findSubcategoryItemById = async (req: Request, res: Response, next: NextFunction) => {
    const subcategoryname: Subcategories = req.params.subcategoryname as Subcategories;
    const _id: string = req.params.id;
    try {
      const electronicService = new ElectronicService(subcategoryname);
      const result: IElectronic = await electronicService.findById(_id);
      res.status(200).json({ data: result, message: 'findLaptopById' });
    } catch (error) {
      next(error);
    }
  }

  public addSubcategoryItem = async (req: Request, res: Response, next: NextFunction) => {
    const subcategoryname: Subcategories = req.params.subcategoryname as Subcategories;
    const dto = req.body;
    try {
      const electronicService = new ElectronicService(subcategoryname);
      const result: IElectronic = await electronicService.addNew(dto);
      // const result = { subcategoryname };
      res.status(201).json({ data: result, message: 'addNewLaptop' });
    } catch (error) {
      next(error);
    }
  }

  public deleteSubcategoryItemById = async (req: Request, res: Response, next: NextFunction) => {
    const subcategoryname: Subcategories = req.params.subcategoryname as Subcategories;
    const _id: string = req.params.id;
    try {
      const electronicService = new ElectronicService(subcategoryname);
      const result: IElectronic = await electronicService.deleteById(_id);
      res.status(200).json({ data: result, message: 'deleteLaptopById' });
    } catch (error) {
      next(error);
    }
  }

}

export default ElectronicController;
