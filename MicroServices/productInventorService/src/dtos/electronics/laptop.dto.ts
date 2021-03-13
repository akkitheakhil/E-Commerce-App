import { ProductDto } from "../products.dto";
import { IsString, IsArray, IsObject, IsBoolean, IsNumber} from 'class-validator';

export class BatteryDto {
  @IsString()
  batteryType: string;

  @IsString()
  standbytime: string;
}

export class CameraDto {

  @IsArray()
  features: string[];

  @IsString()
  primary: string;
}

export class ConnectivityDto {
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

export class DisplayDto {
  @IsString()
  screenResolution: string;

  @IsString()
  screenSize: string;
}

export class HardwareDto {
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

export class SizeAndWeightDto {
  @IsArray()
  dimensions: string[];

  @IsString()
  weight: string;
}

export class StorageDto {
  @IsString()
  hdd: string;

  @IsString()
  ram: string;
}

export class LaptopDto extends ProductDto{
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
