import express from "express";

import { 
    // getUser,createUser,deleteUser,updateUser,
    likeRestaurant
    ,unLikeRestaurant,getUserLikeRestaurant,rateRestaurant
    ,getUserRateRestaurant,addOrder} from "../controllers/userController.js";

const userRouter = express.Router();

// API chức năng CRUD USER
// userRouter.get("/get-user", getUser)
// userRouter.post("/create-user", createUser)
// userRouter.delete("/delete-user", deleteUser)
// userRouter.put("/update-user", updateUser)


userRouter.post("/like-restaurant", likeRestaurant)
userRouter.post("/unlike-restaurant", unLikeRestaurant)

userRouter.get("/get-user-like-restaurant", getUserLikeRestaurant)

userRouter.post("/rate-restaurant", rateRestaurant)


userRouter.get("/get-user-rate-restaurant", getUserRateRestaurant)

userRouter.post("/add-order", addOrder)


export default userRouter