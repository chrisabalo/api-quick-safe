const {
    create,
    getAccident,
    getNumbersAccidents,
    getAccidentByUser,
    getAllNoticationByUser,
    getAllNoticationByUserLimit,
    getAllNoticationByUserIdAccident,
    countAccidentByIduser,
    getAccidentByIdaccident,
    updateAccident,
    deleteAccident
} = require("./accident.service");
 
module.exports = {
    createAccident: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    code: 300,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                code: 200,
                data: results
            });
        });
    },
    getAccident: (req, res) => {
        getAccident((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list Accident',
                data: results
            });
        });
    },
    getNumbersAccidents: (req, res) => {
        getNumbersAccidents((err, results) => {
            if (err) {
                console.log(err); 
                return;
            }
            return res.json({
                code: 200,
                message: 'Le nombre d\'Accident',
                data: results
            });
        });
    },
    getAllNoticationByUser: (req, res) => {
        getAllNoticationByUser((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list notif user',
                data: results
            });
        });
    },
     getAllNoticationByUserLimit: (req, res) => {
        getAllNoticationByUserLimit((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list notif user limit 5',
                data: results
            });
        });
    },
    
    getAllNoticationByUserIdAccident: (req, res) => {
        id = req.params.id;
        getAllNoticationByUserIdAccident(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list notif by user ID Accident',
                data: results
            });
        });
    },
    getAccidentByUserCtrl: (req, res) => {
        iduser= req.params.id;
        getAccidentByUser(iduser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list Accident by user id',
                data: results
            });
        });
    },
    getAccidentByIdaccident: (req, res) => { 
        id= req.params.id;
        getAccidentByIdaccident(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list Accident by user idaccident',
                data: results
            });
        });
    },
     countAccidentByIduser: (req, res) => {
        iduser= req.params.id;
        countAccidentByIduser(iduser, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'Count Accident by user id',
                data: results
            });
        });
    },
    updateAccident: (req, res) => {
        const body = req.body;
        updateAccident(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: "updated successfully"
            });
        });
    },
   
    deleteAccident: (req, res) => {
        const data = req.body;
        deleteAccident(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 202,
                    message: "Failed to delete accident"
                });
            }
            return res.json({
                code: 200,
                message: "Accident deleted successfully"
            });
        });
    }
};
