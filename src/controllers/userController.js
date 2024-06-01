// import Video from "../models/video.js"

import initModels from "../models/init-models.js"
import sequelize from "../models/connect.js"


let model = initModels(sequelize)

import moment from 'moment';




const likeRestaurant = async (req, res) => {

    const {user_id,res_id}=req.body;
    const date_like=moment().format('YYYY MM DD, h:mm:ss');

    let [data_likeRestaurant, like_created] = await model.like_res.findOrCreate({
        where: {
            user_id: user_id,
            res_id: res_id
        },
        defaults: { date_like: date_like }
    });


    if(like_created){
        res.status(200).json({
            data:data_likeRestaurant,
            status:"Đã thích thành công"
        });
    }else{
        res.status(200).json({
            data:data_likeRestaurant,
            status:"Bạn đã thích trước đó"
        });
    }



  
}


const unLikeRestaurant = async (req, res) => {

    const {user_id,res_id}=req.body;
    let data_unLikeRestaurant = await model.like_res.destroy({
        where: {
            user_id: user_id,
            res_id: res_id
        }
    });

    res.status(200).json(data_unLikeRestaurant);

  
}


const getUserLikeRestaurant = async (req, res) => {

    const {user_id,res_id}=req.body;

    let data_getUserLikeRestaurant = await model.like_res.findAll({
        where: {
            user_id: user_id,
            res_id: res_id
        }
        ,
        include:["user","re"]
    });

    res.status(200).json(data_getUserLikeRestaurant);

  
}



const rateRestaurant = async (req, res) => {

    const {user_id,res_id,amount}=req.body;

    //     let user_id = request.query.id;
    // let hoTen = request.query.hoTen
  
    const date_rate=moment().format('YYYY MM DD, h:mm:ss');

    let [data_rateRestaurant, rate_created] = await model.rate_res.findOrCreate({
        where: {
            user_id: user_id,
            res_id: res_id,
            amount:amount
        },
        defaults: { date_rate: date_rate }
    });


    if(rate_created){
        res.status(200).json({
            data:data_rateRestaurant,
            status:"Đánh giá thành công"
        });
    }else{
        res.status(200).json({
            data:data_rateRestaurant,
            status:"Bạn đã đánh giá trước đó"
        });
    }

    res.status(200).json(data_rateRestaurant);


  
}


// Lấy người dùng đã đánh giá và không trùng đánh giá với nhau, một đánh giá với 1 người dùng và 1 restaurant
const getUserRateRestaurant = async (req, res) => {

    const {user_id,res_id}=req.body;
    let data_getUserRateRestaurant = await model.rate_res.findAll({
        where: {
            user_id: user_id,
            res_id: res_id
        }
        ,
        include:["user","re"]
    });

    res.status(200).json(data_getUserRateRestaurant);

  
}

// Thêm order và không trùng order với nhau
const addOrder = async (req, res) => {

    const {user_id, food_id, amount, code, arr_sub_id}=req.body;

    let [data_addOrder, order_created]= await model.order.findOrCreate({
        where: {
            user_id: user_id,
            food_id: food_id,
            amount:amount,
            code:code,
            arr_sub_id:arr_sub_id
        }
       
    });

    if(order_created){
        res.status(200).json({
            data:data_addOrder,
            status:"Thêm order thành công"
        });
    }else{
        res.status(200).json({
            data:data_addOrder,
            status:"Order đã tồn tại"
        });
    }

   

  
}

// let id = request.query.id;
// let id2 = request.params.id
// sequelize.query("SELECT * FROM video ")

// SELECT * FROM video 
// localhost:8080/video/get-video
// const getUser = async (req, res) => {

//     let data = await model.user.findAll()

//     res.status(200).json(data)
// }

// const createUser = async (req, res) => {

//     const body=req.body;

//     let data_createUser = await model.user.create(body)

//     res.status(200).json(data_createUser)

// }

// const deleteUser = async (req, res) => {

//     const body=req.body.user_id;

//     const data_deleteUser = await model.user.destroy({
//         where:{user_id:body}
//         })

//     res.status(200).json(data_deleteUser)


// }

// const updateUser = async (req, res) => {

//     const body=req.body;
//     const user_id=req.body.user_id;

//     const data_updateUser = await model.user.update({...body },{
//         where:{user_id:user_id}
//     });

//     res.status(200).json(data_updateUser)


// }





export {
    // getUser,createUser,deleteUser,updateUser,
    likeRestaurant,unLikeRestaurant,
    getUserLikeRestaurant,rateRestaurant,getUserRateRestaurant,addOrder
}

