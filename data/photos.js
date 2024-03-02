const { getStorage, ref, uploadBytes }=require("firebase/storage");
const { addDoc,collection,onSnapshot }=require("firebase/firestore")

const  { readFileSync }=require("fs")
const storage = getStorage();

const localImagePath= '../assetes/images/calisImg.jpg';

const storagePath = 'images/calisthenics/' + new Date().getTime();

const storageRef = ref(storage, storagePath);
const fileData = readFileSync(localImagePath);
const file = new Blob([fileData], { type: 'image/jpg' });

// const file = new File([localImagePath], 'calisImg.jpg', { type: 'image/jpg' });

uploadBytes(storageRef, file)
  .then((snapshot) => {
    console.log('Image uploaded successfully:', snapshot);
  })
  .catch((error) => {
    console.error('Error uploading image:', error);
  });
