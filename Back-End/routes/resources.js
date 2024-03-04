const router= require('express').Router()
const controller=require('../controllers/resources.js')



router.get("/getAll",controller.getAllResource)
router.get("/getOne/:id",controller.getAllResource)
router.post("/add",controller.createResource)
router.delete("/delete/:id",controller.deleteResource)
router.put("/update/:id",controller.updateResource)

module.exports=router