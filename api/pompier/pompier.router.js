const router = require("express").Router();


//Constante centre pompier
const {
     createCentrePompier,
     getListCentrePompier, 
     updateCentrePompier, 
     deleteCentrePompier 
    } = require('./pompier.controller');

//route centre pompier
router.get("/", getListCentrePompier);
router.post("/", createCentrePompier);
router.patch("/", updateCentrePompier);
router.delete("/", deleteCentrePompier);


module.exports = router;