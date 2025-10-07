import dotenv from "dotenv"
import cloudinary from "./cloudinary"

dotenv.config()

export const envVar = {
    port : process.env.PORT,
    admin_email:process.env.ADMIN_EMAIL,
    admin_pass : process.env.ADMIN_PASS,
    jwt_secret:process.env.JWT_SECRET,
    cloudinary_name:process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_secret:process.env.CLOUDINARY_API_SECRET,
    cloudinary_key:process.env.CLOUDINARY_API_KEY
}