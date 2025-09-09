import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAKB9ITQk8vYBmDbTWn6uHZSp2jWV81nEY',
  authDomain: 'portfolio-ajit-vishwakarma.firebaseapp.com',
  projectId: 'portfolio-ajit-vishwakarma',
  storageBucket: 'portfolio-ajit-vishwakarma.firebasestorage.app',
  messagingSenderId: '850037257891',
  appId: '1:850037257891:web:01d33d21e008df036a7116',
  databaseURL:'https://portfolio-ajit-vishwakarma-default-rtdb.firebaseio.com'
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;