import { ProductDto } from "../products.dto";
import { IsString, IsArray, IsObject, IsBoolean, IsNumber} from 'class-validator';

 class BatteryDto {
  @IsString()
  batteryType: string;

  @IsString()
  standbytime: string;
}

 class CameraDto {

  @IsArray()
  features: string[];

  @IsString()
  primary: string;
}

 class ConnectivityDto {
  @IsString()
  bluetooth: string;

  @IsString()
  cell: string;

  @IsBoolean()
  gps: boolean;

  @IsBoolean()
  infrared: boolean;

  @IsString()
  wifi: string;
}

 class DisplayDto {
  @IsString()
  screenResolution: string;

  @IsString()
  screenSize: string;
}

 class HardwareDto {
  @IsBoolean()
  accelerometer: boolean;

  @IsString()
  audioJack: string;

  @IsString()
  graphics: string;

  @IsString()
  cpu: string;

  @IsBoolean()
  fmRadio: boolean;

  @IsBoolean()
  physicalKeyboard: boolean;

  @IsString()
  usb: string;
}

 class SizeAndWeightDto {
  @IsArray()
  dimensions: string[];

  @IsString()
  weight: string;
}

class StorageDto {
  @IsString()
  hdd: string;

  @IsString()
  ram: string;
}

export class MobileDto extends ProductDto{
  @IsArray()
  additionalFeatures: string[];

  @IsString()
  os: string;

  @IsObject()
  battery: BatteryDto;

  @IsObject()
  camera: CameraDto;

  @IsObject()
  connectivity: ConnectivityDto;

  @IsObject()
  display: DisplayDto;

  @IsObject()
  hardware: HardwareDto;

  @IsString()
  _id: string;

  @IsArray()
  images: string[];

  @IsString()
  name: string;

  @IsObject()
  sizeAndWeight: SizeAndWeightDto;

  @IsObject()
  storage: Storage;
}
