// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAc-ayerFSjCPW0GSBZrD773Ymqnvs8E0w",
    authDomain: "landing-page1-8be9f.firebaseapp.com",
    databaseURL: "https://landing-page1-8be9f-default-rtdb.firebaseio.com",
    projectId: "landing-page1-8be9f",
    storageBucket: "landing-page1-8be9f.appspot.com",
    messagingSenderId: "122575446065",
    appId: "1:122575446065:web:0b401df1426a398446f510",
    measurementId: "G-4ZXG3V2M73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase()

var first = document.getElementById('fn')
var last = document.getElementById('ln')
var email = document.getElementById('email')
var pass = document.getElementById('psw')
var contact = document.getElementById('con')
var course = document.getElementById('Course')
var parent = document.getElementById('parent')

window.getvalue = function () {
    var obj = {
        firstName: first.value,
        LastName: last.value,
        Email: email.value,
        Password: pass.value,
        Contact: contact.value,
        Course: course.value,
    }
    // console.log(obj);
    obj.id = Math.random().toString().slice(2)
    const studentData = ref(database, `students/${obj.id}/`)
    set(studentData, obj)
}

function getdata() {
    var arr = [];
    const studentData = ref(database, "students/");
    onChildAdded(studentData, function (dt) {
        arr.push(dt.val())
        // console.log(arr)
        parent.innerHTML = ""
        for (var i = 0; i < arr.length; i++) {
            parent.innerHTML += `<li>${arr[i].firstName}</li>`
            parent.innerHTML += `<li>${arr[i]. LastName}</li>`
            parent.innerHTML += `<li>${arr[i].    Email}</li>`
            parent.innerHTML += `<li>${arr[i]. Password}</li>`
            parent.innerHTML += `<li>${arr[i].  Contact}</li>`
            parent.innerHTML += `<li>${arr[i].   Course}</li>`
        }
    })
}
getdata()