import { v2 as cloudinary } from "cloudinary";
import fs from 'fs';

export const uploadOnCloudinary = async (filePath: string) => {

  // BUG: not getting the these .env variables
  console.log(process.env.CLOUDINARY_NAME);
  console.log(process.env.CLOUDINARY_API_KEY);
  console.log(process.env.CLOUDINARY_API_SECRET);

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    if (!filePath) return null;

    // upload on cloudinary
    const response = await cloudinary.uploader.upload(filePath);

    fs.unlinkSync(filePath);
    return response.url;
  } catch (error) {
    // remove the locally saved temporary file
    fs.unlinkSync(filePath);

    return null;
  }
};