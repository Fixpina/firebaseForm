// Initialize Firebase
var config = {
    apiKey: "AIzaSyAL_LEKtSP27q6qRD5efH88R7mKyd6pJv0",
    authDomain: "contactform-62847.firebaseapp.com",
    databaseURL: "https://contactform-62847.firebaseio.com",
    projectId: "contactform-62847",
    storageBucket: "contactform-62847.appspot.com",
    messagingSenderId: "618107257083"
  };
  firebase.initializeApp(config);

// Reference message collection
var messsagesRef = firebase.database().ref('messages');  

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    //Get all the values
    var name    = getInputVal('name');
    var company = getInputVal('company');
    var email   = getInputVal('email');
    var phone   = getInputVal('phone');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, company, email, phone, message);

    // Show alert
    document.querySelector('.alert').style.display = "block";

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = "none";
    },3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messsagesRef.push();
    newMessageRef.set({
        name:    name,
        company: company,
        email:   email,
        phone:   phone,
        message: message
    });
}