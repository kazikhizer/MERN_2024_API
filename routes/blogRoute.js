import express from 'express';
const blogRouter= express.Router();
import { isAuthenticated } from '../middellware/auth.js';

import { createBlog,myBlog,updateBlog,deleteBlog } from '../controller/blogController.js';

blogRouter.post("/new",isAuthenticated,createBlog);

blogRouter.get("/myblogs",isAuthenticated,myBlog);

blogRouter.put("/:id",isAuthenticated,updateBlog);

blogRouter.delete("/:id",isAuthenticated,deleteBlog);







export default blogRouter