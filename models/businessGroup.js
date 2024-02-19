const { default: mongoose } = require("mongoose");

const BusinessGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    isPhysicalPerson: {
      type: Boolean,
      default: false,
    },
    document: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    address: {
      cep: {
        type: String,
        require: true,
      },
      state: {
        type: String,
        require: true,
      },
      streetAddress: {
        type: String,
        require: true,
      },
      houseNumber: {
        type: String,
        require: true,
      },
      complement: {
        type: String,
        require: true,
      },
      neighborhood: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
    },
  },
  { timestamps: true }
);

const BusinessGroup = mongoose.model("BusinessGroup", BusinessGroupSchema);

module.exports = {
  BusinessGroupSchema,
  BusinessGroup,
};
