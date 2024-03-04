const connection=require('../database/index.js')

const getAll=(callback)=>{
    const query='SELECT * FROM transport'
    connection.query(query,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const getOne=(id,callback)=>{
    const query='SELECT * FROM transport WHERE id=?'
    connection.query(query,[id],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const create=(transportData,callback)=>{
    const {driver_name,  car_option, available_places,  price, imageUrl}=transportData
    const query='INSERT INTO transport(driver_name,  car_option, available_places,  price, imageUrl) VALUES(?,?,?,?,?)'
    connection.query(query,[driver_name,  car_option, available_places,  price, imageUrl,transportData],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const remove=(callback)=>{
    const query='DELETE FROM transport WHERE id=?'
    connection.query(query,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

const update=(transportId,transportData,callback)=>{
    const {driver_name,  car_option, available_places,  price, imageUrl}=transportData
    const query='UPDATE transport SET driver_name=?,  car_option=?, available_places=?,  price=?, imageUrl=? WHERE id=?'
    connection.query(query,[driver_name,  car_option, available_places,  price, imageUrl,transportId],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

module.exports={
    getAll,
    getOne,
    create,
    remove,
    update
}