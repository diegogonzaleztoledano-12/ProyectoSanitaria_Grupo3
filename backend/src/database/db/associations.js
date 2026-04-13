const Usuario = require("../models/Usuario");
const Muestra = require("../models/Muestra");
const Cassete = require("../models/Cassete");
const Imagen = require("../models/Imagen");

// Un usuario tiene muchas muestras
Usuario.hasMany(Muestra, { foreignKey: "usuarioId" });
Muestra.belongsTo(Usuario, { foreignKey: "usuarioId" });

// Una muestra pertenece a un cassete, y un cassete puede tener muchas muestras
Cassete.hasMany(Muestra, { foreignKey: "casseteId" });
Muestra.belongsTo(Cassete, { foreignKey: "casseteId" });

// Una imagen puede pertenecer a un cassete, y un cassete puede tener muchas imagenes
Cassete.hasMany(Imagen, { foreignKey: "casseteId" });
Imagen.belongsTo(Cassete, { foreignKey: "casseteId" });
