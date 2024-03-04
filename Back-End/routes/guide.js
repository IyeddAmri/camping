const router= require('express').Router()
const controller=require('../controllers/guide.js')



router.get("/getAll",controller.getAllGuide)
router.get("/getOne/:id",controller.getOneGuide)
router.post("/add",controller.createGuide)
router.delete("/delete/:id",controller.deleteGuide)
router.put("/update/:id",controller.updateGuide)

module.exports=router