import { TProduct } from "../products.type";


interface Battery {
  batteryType: string;
  standbytime: string;
}

interface Camera {
  features: string[];
  primary: string;
}

interface Connectivity {
  bluetooth: string;
  cell: string;
  gps: boolean;
  infrared: boolean;
  wifi: string;
}

interface Display {
  screenResolution: string;
  screenSize: string;
}

interface Hardware {
  accelerometer: boolean;
  audioJack: string;
  cpu: string;
  graphics: string;
  fmRadio: boolean;
  physicalKeyboard: boolean;
  usb: string;
}

interface SizeAndWeight {
  dimensions: string[];
  weight: string;
}

interface Storage {
  hdd: string;
  ram: string;
}

export interface TMobile extends TProduct {
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

