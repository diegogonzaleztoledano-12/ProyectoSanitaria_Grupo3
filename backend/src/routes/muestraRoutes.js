const express = require("express");
const router = express.Router();
const muestraController = require("../controllers/muestraController");

router.get("/", muestraController.getAllMuestras);
router.get("/:id", muestraController.getMuestraById);
router.post("/", muestraController.createMuestra);
router.put("/:id", muestraController.updateMuestra);
router.delete("/:id", muestraController.deleteMuestra);

module.exports = router;