import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema({
    "username": {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        unique: true
    },

    "email": {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },

    "password": {
        type: String,
        required: true,
    },
    
    "role": {
        type: String,
        default: "guest",
        lowercase:true
    },

},
    //{ typeKey: '$type' }
)

const UserProfile = mongoose.model("UserProfile", userProfileSchema);
export default UserProfile;