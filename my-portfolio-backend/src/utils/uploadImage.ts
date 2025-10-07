import cloudinary from "../config/cloudinary";

export const uploadImage = (fileBuffer: Buffer): Promise<string> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "blogs" },
      (error:any, result:any) => {
        if (error) return reject(error);
        resolve(result?.secure_url || "");
      }
    );

    stream.end(fileBuffer); 
  });
};
