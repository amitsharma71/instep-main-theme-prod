const mongoose = require("mongoose");

const specificationSchema = new mongoose.Schema({
    ProductID: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  Material: {
    type: String,
  },
  SizeChart: {
    type: String,
  },
  DesignStyle: {
    type: String,
  },
  KeyFeatures: {
    type: String,
  },
  TechnicalSpacifecation: {
    type: String,
  },
  DimensionsWeight: {
    type: String,
  },
  Display: {
    type: String,
  },
  BatteryPower: {
    type: String,
  },
  Connectivity: {
    type: String,
  },
  Camera: {
    type: String,
  },
  WarrantySupport: {
    type: String,
  },
  IncludedAccessories: {
    type: String,
  },
  Storage: {
    type: String,
  },
  UsageInstructions: {
    type: String,
  },
  AdditionalInformation: {
    type: String,
  },
  PowerRequirements: {
    type: String,
  },
  InstallationRequirements: {
    type: String,
  },
  EnvironmentalImpact: {
    type: String,
  },
  AdditionalInformation: {
    type: String,
  },
  DimensionsSize: {
    type: String,
  },
  AssemblyInstructions: {
    type: String,
  },
});

specificationSchema.set("specificationofproducts", true);

const specification = mongoose.model("specification", specificationSchema);
module.exports = specification;
