const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into centreSante(idAccident,nomCentre, regionCentre, villeCentre, quartierCentre, telephoneCentre, emailCentre, latitudeCentre, longitudeCentre) 
                values(?,?,?,?,?,?,?,?,?)`, 
            [
                data.idAccident,
                data.nomCentre,
                data.regionCentre,
                data.villeCentre,
                data.quartierCentre,
                data.telephoneCentre,
                data.emailCentre,
                data.latitudeCentre,
                data.longitudeCentre
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getListCentreSante: callBack => {
        pool.query(
            `select * from centreSante`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCentreSante: (data, callBack) => {
        pool.query(
            `update centreSante set nomCentre=?, regionCentre=?, villeCentre=?, quartierCentre=?, telephoneCentre=?, 
            emailCentre=?, latitudeCentre=?, longitudeCentre=? where idCentre = ?`, 
            [
                data.nomCentre,
                data.regionCentre,
                data.villeCentre,
                data.quartierCentre,
                data.telephoneCentre,
                data.emailCentre,
                data.latitudeCentre,
                data.longitudeCentre,
                data.idCentre
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCentreSante: (data, callBack) => {
        pool.query(
            `delete from centreSante where idCentre = ?`, 
            [data.idCentre],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

};