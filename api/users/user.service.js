const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO utilisateur (nomuser, prenomuser, telephoneuser,
            adresseuser, emailuser, personeacontacter, groupesanguin, 
            passworduser) values (?,?,?,?,?,?,?,?)`, 
            [
                data.firstName,
                data.lastName,
                data.telephone,
                data.adresse,
                data.email,
                data.personneContacter,
                data.selectedValue,
                data.password
            ],
                (error, results) => {
                if (error) {
                    console.log(error);
                    return;
                }

                return callBack(null, results);

            }
        ); 
    },
    
    getUserByUserEmail: (data, callBack) => {
        pool.query(
            `select * from utilisateur where emailuser = ?;`, [
            data.email,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        pool.query(
            `select * from utilisateur where iduser = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results?results[0]: results);
            }
        );
    },
     getTotalUser: callBack => {
        pool.query(
            `SELECT COUNT(*) as total_user  from utilisateur`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results);
            }
        );
    },
    getUsers: callBack => {
        pool.query(
            `select * from utilisateur`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update utilisateur set latuser=?, longuser=? where iduser = ?`,  
            [
                data.latuser,
                data.longuser,
                data.iduser
            ],
                (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results);
            }
        );
    },
    deleteUser: (data, callBack) => {

        pool.query(
            `delete from utilisateur where iduser = ?`, 
            [data.iduser],

            (error, results, fields) => {
                if (error) {
                    callBack(error);
                    return;
                }
                return callBack(null, results);
            }
        );
    }

};