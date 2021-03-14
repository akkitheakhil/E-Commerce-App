import { TProduct } from "../products.type";

export interface Battery {
  batteryType: string;
  musicPlay: string;
  standBy: string;
  talkTime: string;
  charging: string;
}

export interface Body {
  main: string;
  dimensions: string;
  sim: string;
  weight: string;
}

export interface Camera {
  features: string;
  primary: string;
  secondary: string;
  video: string;
}

interface Connectivity {
  bluetooth: string;
  gps: string;
  nfc: string;
  radio: string;
  usb: string;
  wlan: string;
}

interface Display {
  multitouch: string;
  protection: string;
  resolution: string;
  size: string;
  type: string;
}

interface Features {
  main: string;
  browser: string;
  messaging: string;
  sensors: string;
}

interface Launch {
  announced: string;
  status: string;
}

interface Memory {
  cardSlot: string;
  internal: string;
}

interface Misc {
  colors: string;
}

interface Network {
  bands: string;
  band2G: string;
  band3G: string;
  band4G: string;
  bands5G: string;
  edge: string;
  gprs: string;
  speed: string;
  technology: string;
}

interface Platform {
  cpu: string;
  chipset: string;
  gpu: string;
  os: string;
}

interface Sound {
  jack: string;
  alertTypes: string;
  loudspeaker: string;
}

export interface TMobile extends TProduct {
  battery: Battery;
  body: Body;
  camera: Camera;
  connectivity: Connectivity;
  display: Display;
  features: Features;
  launch: Launch;
  memory: Memory;
  misc: Misc;
  network: Network;
  platform: Platform;
  sound: Sound;
  deviceName: string;
  url: string;
}
