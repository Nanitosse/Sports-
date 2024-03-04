const {storage}=require('../config');
const { ref, uploadBytes } = require("firebase/storage");
const { readFileSync, readdirSync } = require("fs");
const path = require("path");


const basePath = 'videos/';

function uploadVideo(videoFile) {
  const localVideoPath = path.join(__dirname, '../assets/Videos', videoFile);
  const storagePath = basePath + videoFile;

  const storageRef = ref(storage, storagePath);
  const videoContent = readFileSync(localVideoPath);
  const videoBlob = new Blob([videoContent]);

  return uploadBytes(storageRef, videoBlob);
}

// Get a list of files in the directory
const videoFiles = readdirSync(path.join(__dirname, '../assets/Videos'));

// Upload each video
videoFiles.forEach((videoFile) => {
  uploadVideo(videoFile)
    .then((snapshot) => {
      console.log(`${videoFile} uploaded successfully`);
    })
    .catch((error) => {
      console.error(`Error uploading ${videoFile}:`, error);
    });
});