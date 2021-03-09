// basic exercise 1

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

    var profession = document.getElementById("select").value;
    console.log(profession);

    switch (profession){
        case "IT":
            document.getElementById("outputLine").style.backgroundColor = "purple";
            break;
        case "Hospitality":
            document.getElementById("outputLine").style.backgroundColor = "yellow";
            break;
        case "Clown":
            document.getElementById("outputLine").style.backgroundColor = "brown";
            break;
        case "Teacher":
            document.getElementById("outputLine").style.backgroundColor = "pink";
            break;
        case "Doctor":
            document.getElementById("outputLine").style.backgroundColor = "orange";
            break;
    }
};

document.getElementById("submitBtn").addEventListener("click",output);

// basic exercise 2



// function result(){
//     var select = document.getElementById("select").value;
//     console.log(check);
//     console.log(select);
//     // console.log(value)
//     document.getElementById("result").innerHTML = value;
// }
// document.getElementById("btn").addEventListener("click",result);