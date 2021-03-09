function output () {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    if (firstName.length > 5) {
        document.getElementById("outputLine").style.color = "red";
    } else {
        document.getElementById("outputLine").style.color = "green";
    }

    document.getElementById("outputLine").innerHTML = "First Name: " + firstName + "<br>Last Name: " + lastName + "<br>Age: " + age;
};

document.getElementById("submitBtn").addEventListener("click",output);