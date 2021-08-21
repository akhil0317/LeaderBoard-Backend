const express = require("express");
const router = express.Router();
const {getAllUsers,editUserData} = require('../controllers/userControllers')

router.get("/getRank",getAllUsers)
router.post("/editData",editUserData)




module.exports = router;