import { model, Schema, Document } from 'mongoose';
import { IMobile } from '../../types/electronics/mobile.type';

const mobileSchema: Schema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
  },
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
  name: {
    type: String,
    required: true,
  },
  os: {
    type: String,
    required: true,
  },
  battery: {
    batteryType: {
      type: String,
    },
    standbytime: {
      type: String,
    }
  },
  camera: {
    features: [{
      type: String
    }],
    primary: {
      type: String,
    }
  },
  display: {
    screenResolution: {
      type: String
    },
    screenSize: {
      type: String
    }
  },
  hardware: {
    accelerometer: {
      type: Boolean
    },
    audioJack: {
      type: String
    },
    cpu: {
      type: String
    },
    graphics: {
      type: String
    },
    fmRadio: {
      type: Boolean
    },
    physicalKeyboard: {
      type: Boolean
    },
    usb: {
      type: String
    }
  },
  images: [{
    type: String
  }],
  sizeAndWeight: {
    dimensions: [{
      type: String
    }],
    weight: {
      type: String
    }
  },
  storage: {
    hdd: {
      type: String
    },
    ram: {
      type: String
    },
  }
});

const MobileDbModal = model<IMobile & Document>('Mobile', mobileSchema);

export default MobileDbModal;
