
const {storage}=require('../config');
const { ref, uploadBytes } = require("firebase/storage");
const { readFileSync, readdirSync } = require("fs");
const path = require("path");

const basePath = 'images/calisthenics/'


function uploadImage(imageFile) {
  const localImagePath = path.join(__dirname,'../assets/images',imageFile);
  const storagePath = basePath + imageFile;

  const storageRef = ref(storage, storagePath);
  const fileContent = readFileSync(localImagePath);
  const file = new Blob([fileContent]);

  return uploadBytes(storageRef, file);
}


const imageFiles = readdirSync(path.join(__dirname, '../assets/images'));
imageFiles.forEach((imageFile) => {
  uploadImage(imageFile)
    .then((snapshot) => {
      console.log(`${imageFile} uploaded successfully`);
    })
    .catch((error) => {
      console.error(`Error uploading ${imageFile}:`, error);
    });
});