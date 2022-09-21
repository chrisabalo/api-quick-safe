const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into centrePompier(idAgent,nomPompier, regionPompier, villePompier, quartierPompier, 
                telephonePompier, emailPompier, latitudePompier, longitudePompier) 
                values(?,?,?,?,?,?,?,?,?)`, 
            [
                data.idAgent,
                data.nomPompier,
                data.regionPompier,
                data.villePompier,
                data.quartierPompier,
                data.telephonePompier,
                data.emailPompier,
                data.latitudePompier,
                data.longitudePompier
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getListCentrePompier: callBack => {
        pool.query(
            `select * from centrePompier`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateCentrePompier: (data, callBack) => {
        pool.query(
            `update centrePompier set nomPompier=?, regionPompier=?, villePompier=?, quartierPompier=?, telephonePompier=?, 
            emailPompier=?, latitudePompier=?, longitudePompier=? where idPompier = ?`, 
            [
                data.nomPompier,
                data.regionPompier,
                data.villePompier,
                data.quartierPompier,
                data.telephonePompier,
                data.emailPompier,
                data.latitudePompier,
                data.longitudePompier,
                data.idPompier
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteCentrePompier: (data, callBack) => {
        pool.query(
            `delete from centrePompier where idPompier = ?`, 
            [data.idPompier],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

};