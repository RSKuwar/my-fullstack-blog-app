import mongoose from "mongoose";
import blogModel from "../models/blogModel.js";
import userModel from "../models/userModel.js";

//get all blog 
 export const getAllBlogController = async(req,res) =>{
    try {
        const blogs = await blogModel.find({}).populate('user');
        if (blogs.length === 0) {
          return res.status(200).send({
          success: false,
          message: "No blogs found",
          });
        }
        return res.status(200).send({
                success:true,
                blogCount: blogs.length,
                message:"no blogs found",
                blogs,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error while geting all blogs",
            error,
        });
    }
 }

//post create blog
 export const createBlogController = async(req,res) =>{
    try {
        const {title,description,image, user} = req.body;
        if(!title || !description || !image){
            return res.status(400).send({
            success:false,
            message:"Please provide all fields",
        });
        }
        const existingUser = await userModel.findById(user)
        if(!existingUser){
          return res.status(404).send({
            success:false,
            message:"unable to find user",
        });
        }
        const newBlog = new blogModel({title,description,image, user})

        //below to save userid in blog when creating blog
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session})
        existingUser.blogs.push(newBlog._id);
        await existingUser.save({session})
        await session.commitTransaction();
        session.endSession();
        return res.status(201).send({
            success:true,
            message:"blog created successfully",
            newBlog,
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error while creating blogs",
            error,
        });
    }
 }

//put update blog
export const updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;

    // Optional: Check if blog exists
    const existingBlog = await blogModel.findById(id);
    if (!existingBlog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Update blog
    const updatedBlog = await blogModel.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Blog updated successfully",
      blog: updatedBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while updating blog",
      error: error.message,
    });
  }
};

//get single blog id
export const getBlogByIdController = async(req,res) =>{
     try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single blog",
      error,
    });
  }
}

//delete delete blog 

export const deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await blogModel.findById(id).populate("user");

    // Check if blog exists first
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "Blog not found",
      });
    }

    // Remove blog reference from user
    await blog.user.blogs.pull(blog._id);
    await blog.user.save();

    // Delete the blog after reference cleanup
    await blogModel.findByIdAndDelete(id);

    return res.status(200).send({
      success: true,
      message: "Blog deleted successfully",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting blog",
      error: error.message,
    });
  }
};


export const userBlogController = async(req,res) =>{
  try {
    const userBlog = await userModel.findById(req.params.id).populate("blogs");
    if(!userBlog){
      return res.status(404).send({
      success: false,
      message: "blog not found with this id",
    });
    }
    return res.status(200).send({
      success: true,
      message: "usser blog found",
      userBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while user blog",
      error: error.message,
    });
  }
}