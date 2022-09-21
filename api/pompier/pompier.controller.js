const {
    create,
    getListCentrePompier,
    updateCentrePompier,
    deleteCentrePompier
} = require("./pompier.service");

module.exports = {
    createCentrePompier: (req, res) => {
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
    getListCentrePompier: (req, res) => {
        getListCentrePompier((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: 'list Centre pompier',
                data: results
            });
        });
    },
    updateCentrePompier: (req, res) => {
        const body = req.body;
        updateCentrePompier(body, (err, results) => {
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
   
    deleteCentrePompier: (req, res) => {
        const data = req.body;
        deleteCentrePompier(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Failed to delete Centre pompier"
                });
            }
            return res.json({
                success: 1,
                message: " Centre pompier deleted successfully"
            });
        });
    }
};