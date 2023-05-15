const firebaseConfig = {
    apiKey: "AIzaSyD77vAHr_URTB9nLKfydd73Nt8sHiInVs8",
    authDomain: "fir-sample-9c119.firebaseapp.com",
    databaseURL: "https://fir-sample-9c119-default-rtdb.firebaseio.com",
    projectId: "fir-sample-9c119",
    storageBucket: "fir-sample-9c119.appspot.com",
    messagingSenderId: "277007452529",
    appId: "1:277007452529:web:db73338a25514044c9ced0",
    measurementId: "G-XLWKXGBX4C"
  };

  firebase.initializeApp(firebaseConfig);

  var sampleFormDB = firebase.database().ref('sampleForm')

document.getElementById('container1').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal();
    var email = getElementVal();
    var message = getElementVal();

    console.log(name, email, message);
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}