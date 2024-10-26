import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC3d_uMMY50i7L5QnOL4h_dzmywhM1Izps",
  authDomain: "caiman-4c1fa.firebaseapp.com",
  projectId: "caiman-4c1fa",
  storageBucket: "caiman-4c1fa.appspot.com",
  messagingSenderId: "697980684932",
  appId: "1:697980684932:web:ee6bb2b36bfe08177c90d1",
  measurementId: "G-XGNHMPMM8Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);