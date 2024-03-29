import { ProductDto } from "../../dtos/products.dto";
import HttpException from "../../exceptions/HttpException";
import ElectronicModelFactory from "../../factory/models/electronicsModel.factory";
import { TElectronic } from "../../types/electronics/electronics.type";
import { Subcategories } from "../../utils/categories.enum";
import { isEmpty } from "../../utils/util";
import ProductService from "../product.service";
import { IEletronicService } from "./electronics.service.interface";

class ElectronicService implements IEletronicService{

  subcatogery: Subcategories;
 // Product service
 public productService = new ProductService();
  constructor(subcatogery: Subcategories) {
    this.subcatogery = subcatogery;
  }

  public async getAllItems(): Promise<TElectronic[]> {
    const dbModel = new ElectronicModelFactory(this.subcatogery).createNewModel();
    const resultList: TElectronic[] = await dbModel.find({});
    return resultList;
  }

 public async addNew(dto: any): Promise<TElectronic> {
    if (isEmpty(dto)) throw new HttpException(400, "No product data found");
    const dbModel = new ElectronicModelFactory(this.subcatogery).createNewModel();
    // Using created product id to create new laptop. This will add relation between two tables 'Product' & 'Laptop
    const product: ProductDto = { ...dto }
    const createdProduct = await this.productService.addNewProduct(product);
    if (isEmpty(createdProduct)) throw new HttpException(400, `Couldn't create new laptop at the moment`);
    // Using created product id to create new laptop. This will add relation between two tables 'Product' & 'Laptop
    dto._id = createdProduct?._id;
    const result: TElectronic = await dbModel.create(dto);
    return result;
  }

  public async findById(id: string): Promise<TElectronic> {
    if (isEmpty(id)) throw new HttpException(400, "Empty laptop id");
    const dbModel = new ElectronicModelFactory(this.subcatogery).createNewModel();
    const result: TElectronic = await dbModel.findById(id);
    return result;
  }

  public async deleteById(id: string): Promise<TElectronic> {
    if (isEmpty(id)) throw new HttpException(400, "Empty product id");
    const dbModel = new ElectronicModelFactory(this.subcatogery).createNewModel();
    const deletedProduct = await this.productService.deleteProductById(id);
    if (isEmpty(deletedProduct)) throw new HttpException(400, `Couldn't delete the product at the moment`);
    const result: TElectronic = await dbModel.findByIdAndDelete(id);
    return result;
  }

}

export default ElectronicService;

