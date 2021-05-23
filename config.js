import * as firebase from'firebase'
require('@firebase/firestore')

const firebaseConfig={
   
        apiKey: "AIzaSyBjGK7vmI69M_U7z4ATzaAmOnrCuTbnZCY",
        authDomain: "story-hub-165dd.firebaseapp.com",
        projectId: "story-hub-165dd",
        storageBucket: "story-hub-165dd.appspot.com",
        messagingSenderId: "735917708539",
        appId: "1:735917708539:web:2e84f52731b7f282984c5e"
     };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      export default firebase.firestore();
