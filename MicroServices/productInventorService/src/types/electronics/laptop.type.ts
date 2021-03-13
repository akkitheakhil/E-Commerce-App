import { IProduct } from "../products.type";

export interface Battery {
  batteryType: string;
  standbytime: string;
}

export interface Camera {
  features: string[];
  primary: string;
}

export interface Connectivity {
  bluetooth: string;
  cell: string;
  gps: boolean;
  infrared: boolean;
  wifi: string;
}

export interface Display {
  screenResolution: string;
  screenSize: string;
}

export interface Hardware {
  accelerometer: boolean;
  audioJack: string;
  cpu: string;
  graphics: string;
  fmRadio: boolean;
  physicalKeyboard: boolean;
  usb: string;
}

export interface SizeAndWeight {
  dimensions: string[];
  weight: string;
}

export interface Storage {
  hdd: string;
  ram: string;
}

export interface ILaptops extends IProduct{
  additionalFeatures: string[];
  os: string;
  battery: Battery;
  camera: Camera;
  connectivity: Connectivity;
  display: Display;
  hardware: Hardware;
  _id: string;
  images: string[];
  name: string;
  sizeAndWeight: SizeAndWeight;
  storage: Storage;
}
