const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into agent(nomagent, prenomagent, emailagent, 
            codeagent, statusagent, telephoneagent, quartieragent, villeagent)
                values(?,?,?,?,?,?,?,?)`, 
                [
                data.nom,
                data.prenom,
                data.email,
                data.code,
                data.status,
                data.telephone,
                data.quartier,
                data.ville
             
            ],

            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAgentByidAgent: (id, callBack) => {
        pool.query(
            `select * from agent where idagent = ?`, [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getListAgent: callBack => {
        pool.query(
            `select * from agent`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAllCountAgent: callBack => {
        pool.query(
            `SELECT COUNT(*) as total FROM agent`, [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getAgentByidAccident: (idAccident, callBack) => {
        pool.query(
            `select * from agent, accident where  agent.idagent=?`, [idAccident],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateAgent: (id, data, callBack) => {
        pool.query(
            `update agent set nomagent = ?, prenomagent = ?, emailagent = ?, 
            codeagent = ?, statusagent = ?, telephoneagent = ?, quartieragent = ?, villeagent = ? where idagent = ?`, 
            [
                data.nomagent,
                data.prenomagent,
                data.emailagent,
                data.codeagent,
                data.statusagent,
                data.telephoneagent,
                data.quartieragent,
                data.villeagent,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteAgent: (id, callBack) => {
        pool.query(
            `delete from agent where idagent = ?`, 
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    }

};
