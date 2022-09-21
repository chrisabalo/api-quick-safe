const router = require("express").Router();


//Constante centre sante
const {
     createCentreSante,
     getListCentreSante, 
     updateCentreSante, 
     deleteCentreSante 
    } = require('./sante.controller');

//route centre sante
router.get("/", getListCentreSante);
router.post("/", createCentreSante);
router.patch("/", updateCentreSante);
router.delete("/", deleteCentreSante);



module.exports = router;