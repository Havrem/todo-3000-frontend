import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDSgNzkEC5iOe61EkjLeZOWaQVtcsurAYg",
  authDomain: "todo-261f9.firebaseapp.com",
  projectId: "todo-261f9",
  storageBucket: "todo-261f9.firebasestorage.app",
  messagingSenderId: "698661463861",
  appId: "1:698661463861:web:24f2b26de997cf1a284e7c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);