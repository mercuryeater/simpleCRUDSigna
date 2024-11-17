const Brand = require("../models/brand.model.js");

const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json(brands);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getOneBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.status(200).json(brand);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createBrand = async (req, res) => {
  try {
    const brand = await Brand.create({
      brand_name: req.body.brand_name,
      brand_owner: req.body.brand_owner,
      brand_status: true,
    });

    res.status(201).json(brand);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const editBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndUpdate(id, req.body);

    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const updatedBrand = await Brand.findById(id);

    res.status(200).json(updatedBrand);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteOneBrand = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Brand.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Brand not found" });
    }

    res.status(204).send({ message: "Brand deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBrands,
  getOneBrand,
  createBrand,
  editBrand,
  deleteOneBrand,
};
