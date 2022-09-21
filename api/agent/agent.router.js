const router = require("express").Router();


//Constante Agent
const {
   createAgent,
   getAgentByidAgent,
   getListAgent,
   getAllCountAgent,
   updateAgent,
   deleteAgent
    } = require('./agent.controller');

//route Accident
router.get("/", getListAgent);
router.get("/all/all-agent", getAllCountAgent);
router.get("/idagent/:id", getAgentByidAgent);
router.post("/", createAgent);
router.patch("/:id", updateAgent);
router.delete("/:id", deleteAgent);


module.exports = router; 