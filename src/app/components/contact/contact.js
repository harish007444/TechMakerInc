function sendMail(){
    let parms = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        mobileNumber: document.getElementById("mobileNumber").value,
        message: document.getElementById("message").value,

    }
    emailjs.send("service_rpxmzvl", "template_rp6bsic", parms).then(alert("Email Sent"))
}    