import express from 'express';
import {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} from "../controllers/blogControllers.js";

// Create router object
const router = express.Router();

// Routes

// GET all blogs
router.get('/all-blog', getAllBlogController);

// POST create a new blog
router.post('/create-blog', createBlogController);

// PUT update an existing blog
router.put('/update-blog/:id', updateBlogController);

// GET single blog by ID
router.get('/get-blog/:id', getBlogByIdController);

// DELETE a blog
router.delete('/delete-blog/:id', deleteBlogController);

//get user blog
router.get('/user-blog/:id',userBlogController)

// Export router
export default router;
