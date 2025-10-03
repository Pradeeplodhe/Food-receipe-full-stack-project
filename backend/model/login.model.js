 import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });
  
  const UserModel = mongoose.model("receipelogin", userSchema);

  export default UserModel;