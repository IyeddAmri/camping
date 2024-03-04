const connection=require('../database/index.js')

const getAll=(callback)=>{
    const query='SELECT * FROM resources'
    connection.query(query,(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

const getOne=(id,callback)=>{
    const query='SELECT * FROM resources WHERE `id`=?'
    connection.query(query,[id],(err,result)=>{
        if(err){
            callback(err,result)
        }
    })
}
const create=(resourcesData,callback)=>{
    const{Title,Description,Category,ImageURL}=resourcesData
    const query='INSERT INTO resources (Title,Description,Category,ImageURL)VALUES (?,?,?,?)'
    connection.query(query,[Title,Description,Category,ImageURL],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}

const remove=(resourcesId,callback)=>{
    const query='DELETE FROM resources WHERE id=?'
    connection.query(query,[resourcesId],(err)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}
const update=(resourcesId,resourcesData,callback)=>{
    const {Title,Description,Category,ImageURL}=resourcesData
    const query='UPDATE resources SET Title=?,Description=?,Category=?,ImageURL=? WHERE id=?'
    connection.query(query,[Title,Description,Category,ImageURL,resourcesId],(err,result)=>{
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
    update,
    remove,
}