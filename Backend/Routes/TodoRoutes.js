const express =require("express");
const router = express.Router();
const {DietDataController,DietProgressController} = require("../Controllers/TodoControllers")

//http://localhost:8000/api/Todo

router.get("/DietData",DietDataController);
router.put("/DietProgress",DietProgressController)

module.exports = router;