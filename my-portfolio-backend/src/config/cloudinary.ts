import { v2 as cloudinary } from "cloudinary";
import { envVar } from ".";

cloudinary.config({
  cloud_name: envVar.cloudinary_name as string,
  api_key: envVar.cloudinary_key as string,
  api_secret:envVar.cloudinary_secret as string,
  secure: true,
});

export default cloudinary;
