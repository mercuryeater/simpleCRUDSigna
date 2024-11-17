const express = require("express");
const router = express.Router();
const {
  getBrands,
  getOneBrand,
  createBrand,
  editBrand,
  deleteOneBrand,
} = require("../controller/brands.controller");

router.get("/", getBrands);

router.get("/:id", getOneBrand);

router.post("/", createBrand);

router.put("/:id", editBrand);

router.delete("/:id", deleteOneBrand);

module.exports = router;
