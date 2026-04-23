const muestraService = require('../services/muestraServices');

const getAllMuestras = async (req, res) => {
  try {
    const muestras = await muestraService.getAllMuestras();
    res.status(200).json(muestras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const getMuestraById = async (req, res) => {
  try {
    const muestra = await muestraService.getMuestraById(req.params.id);
    if (muestra) {
      res.status(200).json(muestra);
    } else {
      res.status(404).json({ message: "Muestra no encontrada" });
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const createMuestra = async (req, res) => {
  try {
    const createdMuestra = await muestraService.createMuestra(req.body);
    res.status(201).json(createdMuestra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const updateMuestra = async (req, res) => {
  try {
    const updatedMuestra = await muestraService.updateMuestra(req.params.id, req.body);
    if (updatedMuestra) {
      res.status(200).json(updatedMuestra);
    } else {
      res.status(404).json({ message: "Muestra no encontrada" });
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const deleteMuestra = async (req, res) => {
  try {
    const deleted = await muestraService.deleteMuestra(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Muestra no encontrada" });
    };
  } catch (error) {
    res.status(500).json({ error: error.message });
  };
};

const createImagenForMuestra = async (req, res) => {
    try {
        const { id } = req.params;
        const imagen = req.file.buffer.toString('base64');
        const createdImagen = await muestraService.createImagenForMuestra(id, imagen);
        res.status(201).json(createdImagen);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  getAllMuestras,
  getMuestraById,
  createMuestra,
  updateMuestra,
  deleteMuestra,
  createImagenForMuestra
};