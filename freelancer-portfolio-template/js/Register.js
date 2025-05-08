class User {
    constructor(username, password, email, phone, userId) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.userId = userId;
    }
}

class Email {
    constructor(email, emailId) {
        this.email = email;
        this.emailId = emailId;
    }
}

const sleepMode = (time) => new Promise(res => setTimeout(res, time * 2000));
//localStorage.removeItem(`currentUser`);

async function deleteFields() {
    document.getElementById("cube1").style.display = "block";
    await sleepMode(1);

    $("#username").val("");
    $("#password").val("");
    $("#email").val("");
    $("#phone").val("");
    //$("#city").val("");
    // $("#urlPicture").val("");
    // $("#profilePicture").val("");
    document.getElementById("cube1").style.display = "none";
    window.location.href = "../Register.html";


}

async function loginBtnFunc() {
    document.getElementById("cubeLogin").style.display = "block";
    await sleepMode(1);
    window.location.href = "login.html"
}

$("#submitRegBtn").click(async (event) => {

    event.preventDefault();

    let username = $("#username").val();
    let password = $("#password").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    // let city = $("#city").val();

    if (username == "" || password == "" || email == "" || phone == "") {
        alert("please complete all fields");
    }
    else {  // Check is exist? EMAIL
        let newemail = new Email(email, null)
        newemail.email = email;

        let emails = JSON.parse(localStorage.getItem("emails"));
        let emailexist = false;
        if (emails) {
            for (let i in emails) {
                if (email == emails[i].email) {
                    alert("email exist please type new email ")
                    emailexist = true;
                    break;
                }
            }
            if (!emailexist) {
                newemail.emailId = emails[emails.length - 1].emailId + 1;
                emails.push(newemail);
                localStorage.setItem("emails", JSON.stringify(emails));
            }
        }
        else {
            newemail.emailId = 1;
            localStorage.setItem("emails", JSON.stringify([newemail]));
        }
        // create new user
        if (!emailexist) {
            let updatedEmails = JSON.parse(localStorage.getItem("emails"));
            let lastEmail = updatedEmails[updatedEmails.length - 1];
            localStorage.setItem("numOfUsers", lastEmail.emailId);
            let newUser = new User(username, password, email, phone, lastEmail.emailId);
            let Users = JSON.parse(localStorage.getItem("users"));
            if (Users) {
                Users.push(newUser);
                localStorage.setItem("users", JSON.stringify(Users));
            }
            else {
                localStorage.setItem("users", JSON.stringify([newUser]));
            }
            alert("You have successfully registered");
            deleteFields()
            window.location.href = "profile.html";
            return;
        }

        /*
        let newUser = new User("Guest", "", "", "", "")
        newUser.userId = 0;
        localStorage.setItem("guestMode", JSON.stringify(newUser));
*/
    }
})


function convertPic() {

    let picturerOpt = document.getElementsByName("pictureFileOpt");   //arr
    let currentPicture = null;
    let i = 0;

    for (i = 0; i < picturerOpt.length; i++) {
        if (picturerOpt[i].checked) {
            currentPicture = picturerOpt[i].value;
            console.log(i)
            break;
        }
    }


    if (i == 0) {
        console.log(0);
        const file = document.getElementById("profilePicture").files[0];
        console.log(file)
        if (!file) {
            console.log(file)
            return "../images/no.jpg"
        }
        else {
            console.log(file)
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = function () {
                    const base64 = reader.result;
                    resolve(base64);
                }
                reader.readAsDataURL(file);
            })
        }
    }

    if (i == 1) {
        console.log(1);
        const file = $("#urlPicture").val();
        console.log(file)
        if (!file) {
            return "../images/no.jpg";
        }
        else {
            return file;
        }
    }
}


