var express = require("express");
var router = express.Router();

const Distributors = require("../models/distributors");
const Fruits = require("../models/fruits");
const Cars = require("../models/cars");

// Thêm nhà phân phối
router.post("/add-distributers", async (req, res) => {
  try {
    const data = req.body;
    const newDistributor = new Distributors({
      name: data.name,
    });
    const result = await newDistributor.save();
    if (result) {
      res.json({
        status: 200,
        messenger: "Thêm Thành Công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Thêm Không Thành Công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});

router.get("/get-distributer", async (req, res) => {
  try {
    const data = await Distributors.find();
    res.json({
      status: 200,
      messenger: "Nha Phan",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});

// Thêm trái cây
router.post("/add-fruit", async (req, res) => {
  try {
    const data = req.body;
    const newFruit = new Fruits({
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      status: data.status,
      image: data.image,
      description: data.description,
      id_distributor: data.id_distributor,
    });
    const result = await newFruit.save();
    if (result) {
      res.json({
        status: 200,
        messenger: "Thêm Thành Công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Thêm Không Thành Công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});

// Lấy danh sách trái cây
router.get("/get-list-fruit", async (req, res) => {
  try {
    const data = await Fruits.find().populate("id_distributor");
    res.json({
      status: 200,
      messenger: "Danh Sách Fruit",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});

// Cập nhật trái cây theo id
router.put("/update-fruit-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updateFruit = await Fruits.findById(id);
    let result = null;
    if (updateFruit) {
      updateFruit.name = data.name ?? updateFruit.name;
      updateFruit.quantity = data.quantity ?? updateFruit.quantity;
      updateFruit.price = data.price ?? updateFruit.price;
      updateFruit.status = data.status ?? updateFruit.status;
      updateFruit.image = data.image ?? updateFruit.image;
      updateFruit.description = data.description ?? updateFruit.description;
      updateFruit.id_distributor =
        data.id_distributor ?? updateFruit.id_distributor;
      result = await updateFruit.save();
    }
    if (result) {
      res.json({
        status: 200,
        messenger: "Cập Nhật Thành Công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Cập Nhật Không Thành Công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});

router.post("/addCar", async (req, res) => {
  try {
    data = req.body;
    const newCar = new Cars({
      maXe: data.maXe,
      name: data.name,
      price: data.price,
      year: data.year,
      brand: data.brand,
    });

    const result = await newCar.save();
    if (result) {
      res.json({
        status: 200,
        messenger: "Thêm Thành Công",
        data: result,
      });
    } else {
      res.json({
        status: 400,
        messenger: "Thêm Không Thành Công",
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/getcars", async (req, res) => {
  try {
    const data = await Cars.find({});
    res.json({
      status: 200,
      messenger: "Car",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      messenger: "Lỗi xảy ra",
      error: error.message,
    });
  }
});


module.exports = router;
