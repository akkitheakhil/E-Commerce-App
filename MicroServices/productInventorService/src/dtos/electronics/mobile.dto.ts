import { ProductDto } from "../products.dto";
import { IsString, IsArray, IsObject, IsBoolean, IsNumber} from 'class-validator';

class Battery {
  @IsString()
  batteryType: string;

  @IsString()
  musicPlay: string;

  @IsString()
  standBy: string;

  @IsString()
  talkTime: string;
}

class Body {
  @IsString()
  main: string;

  @IsString()
  dimensions: string;

  @IsString()
  sim: string;

  @IsString()
  weight: string;
}

class Camera {
  @IsString()
  features: string;

  @IsString()
  primary: string;

  @IsString()
  secondary: string;

  @IsString()
  video: string;
}

class Connectivity {
  @IsString()
  bluetooth: string;

  @IsString()
  gps: string;

  @IsString()
  nfc: string;

  @IsString()
  radio: string;

  @IsString()
  usb: string;

  @IsString()
  wlan: string;
}

class Display {
  @IsString()
  multitouch: string;

  @IsString()
  protection: string;

  @IsString()
  resolution: string;

  @IsString()
  size: string;

  @IsString()
  type: string;
}

class Features {
  @IsString()
  main: string;

  @IsString()
  browser: string;

  @IsString()
  messaging: string;

  @IsString()
  sensors: string;
}

class Launch {
  @IsString()
  announced: string;

  @IsString()
  status: string;
}

class Memory {
  @IsString()
  cardSlot: string;

  @IsString()
  internal: string;
}

class Misc {
  @IsString()
  colors: string;
}

class Network {
  @IsString()
  bands: string;

  @IsString()
  band2G: string;

  @IsString()
  band3G: string;

  @IsString()
  band4G: string;

  @IsString()
  bands5G: string;

  @IsString()
  edge: string;

  @IsString()
  gprs: string;

  @IsString()
  speed: string;

  @IsString()
  technology: string;
}

class Platform {
  @IsString()
  cpu: string;

  @IsString()
  chipset: string;

  @IsString()
  gpu: string;

  @IsString()
  os: string;
}

class Sound {
  @IsString()
  jack: string;

  @IsString()
  alertTypes: string;

  @IsString()
  loudspeaker: string;
}

export class MobileDto extends ProductDto {
  @IsObject()
  battery: Battery;

  @IsObject()
  body: Body;

  @IsObject()
  camera: Camera;

  @IsObject()
  connectivity: Connectivity;

  @IsObject()
  display: Display;

  @IsObject()
  features: Features;

  @IsObject()
  launch: Launch;

  @IsObject()
  memory: Memory;

  @IsObject()
  misc: Misc;

  @IsObject()
  network: Network;

  @IsObject()
  platform: Platform;

  @IsObject()
  sound: Sound;

  @IsString()
  deviceName: string;

  @IsString()
  url: string;
}
