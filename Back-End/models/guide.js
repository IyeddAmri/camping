const connection=require('../database/index.js')

const getAll=(callback)=>{
    const query='SELECT * FROM guide'
    connection.query(query,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const getOne=(id,callback)=>{
    const query='SELECT * FROM guide WHERE id=?'
    connection.query(query,[id],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const create=(guideData,callback)=>{
    const {name, experience, location, price, imageUrl}=guideData
    const query='INSERT INTO guide(name, experience, location, price, imageUrl) VALUES(?,?,?,?,?)'
    connection.query(query,[name, experience, location, price, imageUrl,guideData],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}
const remove=(callback)=>{
    const query='DELETE FROM guide WHERE id=?'
    connection.query(query,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

const update=(guideId,guideData,callback)=>{
    const {name, experience, location, price, imageUrl}=guideData
    const query='UPDATE guide SET name=?, experience=?, location=?, price=?, imageUrl=? WHERE id=?'
    connection.query(query,[name, experience, location, price, imageUrl,guideId],(err,result)=>{
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