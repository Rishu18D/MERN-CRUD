import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

export default mongoose.model("User", userSchema);
