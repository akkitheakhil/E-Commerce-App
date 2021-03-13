import { ProductDto } from "../dtos/products.dto";
import HttpException from "../exceptions/HttpException";
import { TProduct } from "../types/products.type";
import ProductDbModal from "../models/products.model";
import { Categories, Subcategories } from "../utils/categories.enum";
import { isEmpty } from "../utils/util";
import CategoryDbModal from "../models/categories.model";

class ProductService {

  // Mongoose Database helper.
  public productDbModal = ProductDbModal;
  public categoryDbModal = CategoryDbModal;


  public async getAllProducts(): Promise<TProduct[]> {
    const products: TProduct[] = await ProductDbModal.find();
    return products;
  }

  public async addNewProduct(productData: ProductDto):  Promise<TProduct> {
    if (isEmpty(productData)) throw new HttpException(400, "No product data found");
    const product: TProduct = await ProductDbModal.create(productData);
    return product;
  }

  public async findProductByCategory(categoryName: Categories): Promise<TProduct[]> {
    if(isEmpty(categoryName)) throw new HttpException(400, "Empty Category Name");
    const products: TProduct[] = await ProductDbModal.find({category: categoryName});
    return products;
  }

  public async findProductBySubcategory(subcategoryName: Subcategories): Promise<TProduct[]> {
    if(isEmpty(subcategoryName)) throw new HttpException(400, "Empty Subcategory Name");
    const products: TProduct[] = await ProductDbModal.find({subcategory: subcategoryName});
    return products;
  }

  public async updateProductById(productData: ProductDto): Promise<TProduct> {
    if(isEmpty(productData?._id)) throw new HttpException(400, "Empty product id");
    const product: TProduct = await ProductDbModal.findByIdAndUpdate(productData);
    return product;
  }

  public async deleteProductById(productId: string) {
    if(isEmpty(productId)) throw new HttpException(400, "Empty product id");
    const product: TProduct = await ProductDbModal.findByIdAndDelete(productId);
    return product;
  }


}

export default ProductService;
