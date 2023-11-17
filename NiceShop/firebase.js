{/*

import { initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBDNeMhdg5a1T_SJmiX5wWHAYPLpSp8fy0",
  authDomain: "nice-auth-83e82.firebaseapp.com",
  projectId: "nice-auth-83e82",
  storageBucket: "nice-auth-83e82.appspot.com",
  messagingSenderId: "37355242764",
  appId: "1:37355242764:web:ccd0ee0bd29450c6bbf529",
  measurementId: "G-BJ6KT66JFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;


*/}

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDNeMhdg5a1T_SJmiX5wWHAYPLpSp8fy0",
    authDomain: "nice-auth-83e82.firebaseapp.com",
    projectId: "nice-auth-83e82",
    storageBucket: "nice-auth-83e82.appspot.com",
    messagingSenderId: "37355242764",
    appId: "1:37355242764:web:ccd0ee0bd29450c6bbf529",
    measurementId: "G-BJ6KT66JFH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  
  export { auth };