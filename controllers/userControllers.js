import userModel from '../models/userModel.js';
import bcrypt from 'bcrypt'

// GET all users
export const getAllUsers = async (req, res) => {
  
  try {
    const users = await userModel.find({});
    return res.status(201).send({
        userCount:users.length,
      success: true,
      message: 'New User Created',
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
        success: false,
      message: 'Error in getAllUsers callback',
      error,
    })
  }
};

// REGISTER user
export const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Please fill all fields',
      });
    }

    // Check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: 'User already exists',
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const user = new userModel({ username, email, password:hashedPassword });
    await user.save();

    return res.status(201).send({
      success: true,
      message: 'New User Created',
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error in register callback',
      error,
    });
  }
};

// LOGIN user
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: 'Please provide email and password',
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered',
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: 'Invalid email or password',
      });
    }

   return res.status(200).send({
      success: true,
      message: 'Login successful',
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: 'Error in login callback',
      error,
    });
  }
};

