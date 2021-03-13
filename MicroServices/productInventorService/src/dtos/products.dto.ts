import { Categories, Subcategories } from "../utils/categories.enum";
import { IsNumber, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  public _id: string;
  @IsString()
  public title: string;
  @IsNumber()
  public price: number;
  @IsString()
  public description?: string;
  @IsString()
  public category: Categories;
  @IsString()
  public subcategory: Subcategories;
  @IsString()
  public image?: string;
}
