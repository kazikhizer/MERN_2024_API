import express from 'express';
import { userRegister,userLogin,userLogout ,getMyProfile,getUserById} from '../controller/userController.js';
import { isAuthenticated } from '../middellware/auth.js';
const userRouter= express.Router();


userRouter.get("/", (req, res) => {
    res.json({
        success: true,
        message: "we are in home route"
    })
})



userRouter.post("/register",userRegister )

userRouter.post("/login",userLogin )

userRouter.get("/logout",userLogout)

userRouter.get('/myprofile',isAuthenticated,getMyProfile)

userRouter.get("/:id",getUserById)



export default userRouter;