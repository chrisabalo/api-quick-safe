const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into accident(iduser,graviteaccident, nombredengins, ville, region, rue, name, lataccident, longaccident) 
                values(?,?,?,?,?,?,?,?,?)`, [
                data.iduser,
                data.graviteaccident,
                data.nombredengins,
                data.ville,
                data.region,
                data.rue,
                data.name,
                data.lataccident,
                data.longaccident
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAccident: callBack => {
        pool.query(
            `select * from accident`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getNumbersAccidents: callBack => {
        pool.query(
            `SELECT COUNT(*) as total_accident FROM accident`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }, 
    getAccidentByUser: (idUser,callBack) => {
        pool.query(
            `select * from accident where iduser=? order by idaccident desc`, [iduser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        ); 
    },
    getAccidentByIdaccident: (id,callBack) => {
        pool.query(
            `select * from accident where idaccident=?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                } 
                return callBack(null, results[0]);
            }
        ); 
    }, 
    getAllNoticationByUser: callBack => {
        pool.query(
            `SELECT accident.idaccident, accident.graviteaccident,accident.nombredengins,
            accident.ville, accident.region, accident.rue, accident.name, accident.lataccident,
            accident.longaccident,accident.dateaccident, utilisateur.nomuser,utilisateur.prenomuser 
            FROM accident,utilisateur WHERE utilisateur.iduser=accident.iduser order by accident.idaccident desc`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        ); 
    },
    getAllNoticationByUserLimit: callBack => {
        pool.query(
            `SELECT accident.idaccident, accident.graviteaccident,accident.nombredengins,
            accident.ville, accident.region, accident.rue, accident.name, accident.lataccident,
            accident.longaccident,accident.dateaccident, utilisateur.nomuser,utilisateur.prenomuser 
            FROM accident,utilisateur WHERE utilisateur.iduser=accident.iduser order by accident.idaccident desc limit 3`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAllNoticationByUserIdAccident: (id, callBack) => {
        pool.query(
            `SELECT accident.idaccident, accident.graviteaccident,accident.nombredengins,
            accident.ville, accident.region, accident.rue, accident.name, accident.lataccident,
            accident.longaccident,accident.dateaccident, utilisateur.nomuser,utilisateur.prenomuser, utilisateur.emailuser 
            FROM accident,utilisateur WHERE utilisateur.iduser=accident.iduser AND accident.idaccident = ? GROUP BY accident.iduser`, 
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    countAccidentByIduser: (iduser, callBack) => {
        pool.query(
            `SELECT accident.iduser,COUNT(*) AS total FROM utilisateur,accident 
            WHERE accident.iduser = utilisateur.iduser AND utilisateur.iduser = ? GROUP BY accident.iduser`, 
            [iduser],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }  
        );
    },
    updateAccident: (data, callBack) => {
        pool.query(
            `update accident set graviteaccident=?, nombredengins=?, etataccident=? where idaccident = ?`, [
                data.graviteaccident,
                data.nombredengins,
                data.etataccident,
                data.idaccident
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteAccident: (data, callBack) => {
        pool.query(
            `delete from accident where idaccident = ?`, 
            [data.idaccident],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

};