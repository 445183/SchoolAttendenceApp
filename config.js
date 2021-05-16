 import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt-UncrI_6XOkD74FAV_8QeqnLrCxdGfE",
  authDomain: "schoolattandence.firebaseapp.com",
  databaseURL: "https://schoolattandence-default-rtdb.firebaseio.com",
  projectId: "schoolattandence",
  storageBucket: "schoolattandence.appspot.com",
  messagingSenderId: "604240411514",
  appId: "1:604240411514:web:a4db9a19b39c9d707a74c3"
};
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig)
}
export default firebase.database();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  