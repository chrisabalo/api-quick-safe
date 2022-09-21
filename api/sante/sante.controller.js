const {
    create,
    getListCentreSante,
    updateCentreSante,
    deleteCentreSante
} = require("./sante.service");
 
 
module.exports = {
    createCentreSante: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getListCentreSante: (req, res) => {
        getListCentreSante((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'list Centre sante',
                data: results
            });
        });
    },
    updateCentreSante: (req, res) => {
        const body = req.body;
        updateCentreSante(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to update "
                });
            }
            return res.json({
                success: 1,
                message: "updated successfully"
            });
        });
    },
   
    deleteCentreSante: (req, res) => {
        const data = req.body;
        deleteCentreSante(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to delete Centre sante"
                });
            }
            return res.json({
                success: 1,
                message: " Centre sante deleted successfully"
            });
        });
    }
};