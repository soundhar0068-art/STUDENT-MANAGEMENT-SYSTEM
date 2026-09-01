// Login Function
export function loginUser() {

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let msg = document.getElementById("msg");

    if (user === "admin" && pass === "1234") {
        msg.innerHTML = "Login Successful ✅";
        msg.style.color = "green";
    } else {
        msg.innerHTML = "Invalid Username or Password ❌";
        msg.style.color = "red";
    }
}