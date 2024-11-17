const mongoose = require("mongoose");

const BrandSchema = mongoose.Schema(
  {
    brand_name: {
      type: String,
      required: true,
    },
    brand_owner: {
      type: String,
      required: true,
    },
    brand_status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", BrandSchema);

module.exports = Brand;
