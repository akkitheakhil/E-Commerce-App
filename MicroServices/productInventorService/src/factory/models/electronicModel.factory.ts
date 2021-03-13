import HttpException from "../../exceptions/HttpException";
import LaptopDbModal from "../../models/electronics/laptop.model";
import MobileDbModal from "../../models/electronics/mobile.model";
import { Subcategories } from "../../utils/categories.enum";

class ElectronicModelFactory {

  dtoName: Subcategories
  constructor(dtoName: Subcategories) {
    this.dtoName = dtoName;
  }

  createNewModel() {
    switch (this.dtoName.toLocaleLowerCase()) {
      case Subcategories.LAPTOP_ELECTRONICS.toLocaleLowerCase():
        return LaptopDbModal;
        case Subcategories.MOBILE_ELECTRONICS.toLocaleLowerCase():
        return MobileDbModal;
      default:
        throw new HttpException(400, "No subcategory found");
    }
  }
}

export default ElectronicModelFactory;
