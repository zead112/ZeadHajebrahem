// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAqgV73en5-wc7P3LFdQYwqK_2aO29ymI",
  authDomain: "contactform-c8181.firebaseapp.com",
  databaseURL: "https://contactform-c8181-default-rtdb.firebaseio.com",
  projectId: "contactform-c8181",
  storageBucket: "contactform-c8181.appspot.com",
  messagingSenderId: "284972545740",
  appId: "1:284972545740:web:b6a1108b4faebd2c017469",
  measurementId: "G-Y87NCDGFNH",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  console.log(name, emailid, msgContent);
  saveMessages(name, emailid, msgContent);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
