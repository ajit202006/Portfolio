import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "portfolio-ajit-vishwakarma.firebaseapp.com",
  databaseURL: "https://portfolio-ajit-vishwakarma-default-rtdb.firebaseio.com",
  projectId: "portfolio-ajit-vishwakarma",
  storageBucket: "portfolio-ajit-vishwakarma.firebasestorage.app",
  messagingSenderId: "850037257891",
  appId: "1:850037257891:web:bb487faf2f255e256a7116"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
