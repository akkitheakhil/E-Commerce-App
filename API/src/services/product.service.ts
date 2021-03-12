import { isEmpty } from "class-validator";
import { ProductDto } from "../dtos/products.dto";
import HttpException from "../exceptions/HttpException";
import { IProduct } from "../interfaces/products.interface";
import productDbModal from "../models/products.model";
import { Categories, Subcategories } from "../utils/categories.enum";

class ProductService {

  // Mongoose Database helper.
  public productDbModal = productDbModal;


  public async getAllProducts(): Promise<IProduct[]> {
    const products: IProduct[] = await productDbModal.find();
    return products;
  }

  public async addNewProduct(productData: ProductDto):  Promise<IProduct> {
    if (isEmpty(productData)) throw new HttpException(400, "No product data found");
    const product: IProduct = await productDbModal.create(productData);
    return product;
  }

  public async findProductByCategory(categoryName: Categories): Promise<IProduct[]> {
    if(!categoryName) throw new HttpException(400, "Empty Category Name");
    const products: IProduct[] = await productDbModal.find({category: categoryName});
    return products;
  }

  public async findProductBySubcategory(subcategoryName: Subcategories): Promise<IProduct[]> {
    if(!subcategoryName) throw new HttpException(400, "Empty Subcategory Name");
    const products: IProduct[] = await productDbModal.find({subcategory: subcategoryName});
    return products;
  }

  public async updateProductById(productData: ProductDto): Promise<IProduct> {
    if(!productData?._id) throw new HttpException(400, "Empty product id");
    const product: IProduct = await productDbModal.findByIdAndUpdate(productData);
    return product;
  }

  public async deleteProductById(productId: string) {
    if(!productId) throw new HttpException(400, "Empty product id");
    const product: IProduct = await productDbModal.findByIdAndDelete(productId);
    return product;
  }


}

export default ProductService;
