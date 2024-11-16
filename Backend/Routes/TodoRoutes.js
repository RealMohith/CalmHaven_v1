const express =require("express");
const router = express.Router();
const {DietDataController} = require("../Controllers/TodoControllers")

//http://localhost:8000/api/Todo

router.get("/DietData",DietDataController);
router.put("/DietProcess",DietProgressController)

module.exports = router;