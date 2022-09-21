const router = require("express").Router();


//Constante accident
const {
     createAccident,
     getAccident, 
     getNumbersAccidents,
     getAccidentByUserCtrl,
     getAllNoticationByUser,
     getAllNoticationByUserLimit,
     getAllNoticationByUserIdAccident,
	 countAccidentByIduser,
	 getAccidentByIdaccident,
     updateAccident, 
     deleteAccident 
    } = require('./accident.controller');

//route Accident
router.get("/", getAccident);
router.get("/all-accidents", getNumbersAccidents);
router.get("/idaccident/:id", getAccidentByIdaccident);
router.get("/iduser/:id", getAccidentByUserCtrl);
router.get("/alertes", getAllNoticationByUser);
router.get("/alertes/limit", getAllNoticationByUserLimit);
router.get("/alertes/idaccident/:id", getAllNoticationByUserIdAccident);
router.get("/alertes/:id", countAccidentByIduser);
router.post("/", createAccident);
router.patch("/", updateAccident);
router.delete("/", deleteAccident);

module.exports = router;
