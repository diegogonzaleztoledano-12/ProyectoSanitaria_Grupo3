const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db/db");

class Imagen extends Model { }

Imagen.init(
    {
        idImagen: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        imagen: {
            type : DataTypes.BLOB('long'),
            allowNull: true,
            get() {
                const data = this.getDataValue('imagen');
                // Convertimos el Buffer a Base64 directamente aquí en el backend antes de enviarlo.
                // Hacerlo en el frontend implicaría enviar un array gigante de números JSON
                // ({"type":"Buffer", "data":[255, 216...]}) lo cual es lentísimo y pesa el triple.
                return data ? data.toString('base64') : null;
            }
        },
        muestraId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        tableName: "imagenes",
        timestamps: false,
    }
);

module.exports = Imagen;