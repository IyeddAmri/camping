// import { Cloudinary } from 'cloudinary-react-native';

// Cloudinary.init({
// CLOUDINARY_NAME:"dhy6nhgot",
// CLOUDINARY_API_KEY:"263224771845993",
// CLOUDINARY_SECRET:"NXSo4rKFoZpBxdZgVrD-tTjxh6gc",
// })
import { Cloudinary } from 'cloudinary-react-native';

Cloudinary.init({
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

