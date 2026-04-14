const express = require("express");
const router = express.Router();
const muestraController = require("../controllers/muestraController");
const authjwt = require("../middlewares/jwt")

router.get("/", authjwt,  muestraController.getAllMuestras);
router.get("/:id", authjwt, muestraController.getMuestraById);
router.post("/", authjwt, muestraController.createMuestra);
router.put("/:id",authjwt,  muestraController.updateMuestra);
router.delete("/:id", authjwt, muestraController.deleteMuestra);

module.exports = router;