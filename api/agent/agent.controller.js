const {
    create,
    getListAgent,
    getAllCountAgent,
    getAgentByidAgent,
    updateAgent,
    deleteAgent
} = require("./agent.service");


module.exports = {
    createAgent: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    code: 500,
                    message: "Database connection errror"
                });
            }
             if (results) {
                   return res.status(200).json({
                        code: 200,
                        message: "register agent success",
                        data: results
                     });
                 }
          
        }); 
    },
    getAgentByidAgent: (req, res) => {
        const id = req.params.id;
        getAgentByidAgent(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 500,
                    message: "Record not Found"
                });
            }
            return res.json({
                code: 200,
                message: "list agent by id",
                data: results
            });
        });
    },
    getListAgent: (req, res) => {
        getListAgent((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list Agent',
                data: results
            });
        });
    },
    getAllCountAgent: (req, res) => {
        getAllCountAgent((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'Nombre d\'Agent',
                data: results
            });
        });
    },
    updateAgent: (req, res) => {
        const id = req.params.id;
        const body = req.body;
        updateAgent(id, body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 500,
                    message: "Invalid id agent"
                });
            }
            return res.json({
                code: 200,
                message: "updated successfully"
            });
        });
    },
   
    deleteAgent: (req, res) => {
         const id = req.params.id;
        deleteAgent(id, (err, results) => {
            if (err) { 
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 500,
                    message: "Failed to delete agent"
                });
            }
            return res.json({
                code: 200,
                message: "Agent deleted successfully"
            });
        });
    }
};