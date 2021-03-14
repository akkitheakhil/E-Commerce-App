import { model, Schema, Document } from 'mongoose';
import { TMobile } from '../../types/electronics/mobile.type';

const mobileSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  deviceName: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  battery: {
    batteryType: {
      type: String,
    },
    standBy: {
      type: String,
    },
    musicPlay: {
      type: String,
    },
    talkTime: {
      type: String,
    },
    charging: {
      type: String,
    },
  },
  camera: {
    features: {
      type: String
    },
    primary: {
      type: String,
    },
    secondary: {
      type: String,
    },
    video: {
      type: String,
    },
  },
  display: {
    multitouch: {
      type: String
    },
    protection: {
      type: String
    },
    resolution: {
      type: String
    },
    size: {
      type: String
    },
    displayType: {
      type: String
    },
  },
  connectivity: {
    bluetooth: {
      type: String,
    },
    gps: {
      type: String,
    },
    nfc: {
      type: String,
    },
    radio: {
      type: String,
    },
    usb: {
      type: String,
    },
    wlan: {
      type: String,
    },
  },

  features: {
    main: {
      type: String
    },
    browser: {
      type: String
    },
    messaging: {
      type: String
    },
    sensors: {
      type: String
    },
  },
  launch: {
    announced: {
      type: String
    },
    status: {
      type: String
    },
  },
  memory: {
    cardSlot: {
      type: String
    },
    internal: {
      type: String
    },
  },
  misc: {
    colors: {
      type: String
    },
  },

  network: {
    bands: {
      type: String
    },
    band2G: {
      type: String
    },
    band3G: {
      type: String
    },
    band4G: {
      type: String
    },
    bands5G: {
      type: String
    },
    edge: {
      type: String
    },
    gprs: {
      type: String
    },
    speed: {
      type: String
    },
    technology: {
      type: String
    },
  },
  platform: {
    cpu: {
      type: String
    },
    chipset: {
      type: String
    },
    gpu: {
      type: String
    },
    os: {
      type: String
    },
  },
  sound: {
    jack: {
      type: String
    },
    alertTypes: {
      type: String
    },
    loudspeaker: {
      type: String
    },
  },
  body: {
    main: {
      type: String
    },
    dimensions: {
      type: String
    },
    sim: {
      type: String
    },
    weight: {
      type: String
    },
  },

});

const MobileDbModal = model<TMobile & Document>('Mobile', mobileSchema);

export default MobileDbModal;
