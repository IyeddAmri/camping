const router= require('express').Router()
const controller=require('../controllers/transport.js')



router.get("/getAll",controller.getAllTransport)
router.get("/getOne/:id",controller.getOneTransport)
router.post("/add",controller.createTransport)
router.delete("/delete/:id",controller.deleteTransport)
router.put("/update/:id",controller.updateTransport)

module.exports=router