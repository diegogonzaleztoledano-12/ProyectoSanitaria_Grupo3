let muestras = [
  { id: 1, tipo: "Tejido", descripcion: "Muestra A1", casseteId: 1 },
  { id: 2, tipo: "Sangre", descripcion: "Muestra B2", casseteId: 1 },
  { id: 3, tipo: "Tejido", descripcion: "Muestra C1", casseteId: 2 },
];

const getAllMuestras = async () => {
  return muestras;
};

const getMuestraById = async (id) => {
  return muestras.find(m => m.id == id);
};

const createMuestra = async (data) => {
  const newMuestra = {
    id: muestras.length > 0 ? Math.max(...muestras.map(m => m.id)) + 1 : 1,
    ...data, 
  };
  muestras.push(newMuestra);
  return newMuestra;
};

const updateMuestra = async (id, data) => {
  const index = muestras.findIndex(m => m.id == id);
  if (index === -1) return null;
  muestras[index] = { ...muestras[index], ...data };
  return muestras[index];
};

const deleteMuestra = async (id) => {
  const index = muestras.findIndex(m => m.id == id);
  if (index === -1) return false;
  muestras.splice(index, 1);
  return true;
};

module.exports = {
  getAllMuestras,
  getMuestraById,
  createMuestra,
  updateMuestra,
  deleteMuestra,
};