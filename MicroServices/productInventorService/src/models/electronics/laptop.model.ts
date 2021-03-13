import { model, Schema, Document } from 'mongoose';
import { TLaptops } from '../../types/electronics/laptop.type';

const laptopSchema: Schema = new Schema({
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

const LaptopDbModal = model<TLaptops & Document>('Laptops', laptopSchema);

export default LaptopDbModal;
