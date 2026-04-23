const { Muestra, Imagen } = require('../database/db/associations');

const getAllMuestras = async () => {
  return await Muestra.findAll({ include: [Imagen] });
};

const getMuestraById = async (id) => {
  return await Muestra.findByPk(id, { include: [Imagen] });
};

const createMuestra = async (data) => {
  return await Muestra.create(data);
};

const updateMuestra = async (id, data) => {
  const muestra = await Muestra.findByPk(id);
  if (!muestra) return null;
  await muestra.update(data);
  return muestra;
};

const deleteMuestra = async (id) => {
  const muestra = await Muestra.findByPk(id);
  if (!muestra) return false;
  await muestra.destroy();
  return true;
};

const createImagenForMuestra = async (muestraId, imagenData) => {
    const imagen = await Imagen.create({
        muestraId: muestraId,
        imagen: Buffer.from(imagenData, 'base64')
    });
    return imagen;
};

module.exports = {
  getAllMuestras,
  getMuestraById,
  createMuestra,
  updateMuestra,
  deleteMuestra,
  createImagenForMuestra
};