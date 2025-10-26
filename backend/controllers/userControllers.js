import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";


// signup
export const signup = async (req, res) => {
    const { email, fullName, password, bio } = req.body;

    try {
        if (!email || !fullName || !password || !bio) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            email,
            fullName,
            password: hashedPassword,
            bio,
        });

        const token = generateToken(newUser._id)
        res.json({success:true, userData: newUser, token, message:"Account created successfully"})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false ,message: error.message });
        
    }
}

// login

export const login = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        const userData = await User.findOne({ email });

        const isPasswordCorrect = await bcrypt.compare(password, userData.password );

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(userData._id) 

        res.json({success:true, userData, token, message:"Login successfully"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false ,message: error.message });
        
    }
}
// controller to chck user authenticate

export const checkAuth = (req, res) => {
    res.json({ success: true, user: req.user });
}  

// update user profile pic
export const updateProfilePic = async (req, res) => {
    try {
        const { profilePic, bio, fullName } = req.body;
        const userId = req.user._id;

        let updateUser;
        if (!profilePic) {
            updateUser = await User.findByIdAndUpdate(userId, { bio, fullName }, { new: true });
        }
        else {
            const upload = await cloudinary.uploader.upload(profilePic)

            updateUser = await User.findByIdAndUpdate(userId, {
                profilePic: upload.secure_url,
                bio,
                fullName
            }, { new: true });
        }
        res.json({ success: true, user: updateUser})
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}