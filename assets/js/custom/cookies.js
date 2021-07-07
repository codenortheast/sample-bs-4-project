/*
    When the page will load it will have blank fields
    Front end Validation
*/
let disableButton;
let status = true;

document.getElementById("page").onload = function(){
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("phonenumber").value = "";
    document.getElementById("pin-code").value = "";

    for(let i=1; i<6; i++){
        document.getElementById("error"+i).style.visibility = "hidden";
    }

    let cities = new Array("Agartala", "Agra", "Allahabad", "Aligarh", "Bengaluru", "Chandigarh", "Delhi", "Varanasi", "Chennai", "Mumbai", "Ranchi", "Hyderabad");
    let options = new Array();

    for(let i=0; i<cities.length; i++){
        options[i] = document.createElement("option");
        options[i].text = cities[i]
        options[i].value = cities[i].toUpperCase();
        document.getElementById("city").add(options[i]);
    }
};

document.getElementById("name").onchange = function(){
    let name = document.getElementById("name").value;
    for(let i=0; i<name.length; i++){
        if(!isNaN(name[i])){
            document.getElementById("name").value = "";
            document.getElementById("jsonButton").disabled = true;
            break;
        }
    }
};

document.getElementById("mail").onchange = function(){
    let mail = document.getElementById("mail").value;
    let invalidMail = true;

    for(let i=0; i<mail.length; i++){
        if(mail[i] == "@"){
            i++;
            while(i<mail.length){
                if(mail[i] == "."){
                    invalidMail = false;
                    break;
                }
               i++;
            }
            break;
        }
    }
    if(invalidMail){
        document.getElementById("mail").value = "";
            document.getElementById("jsonButton").disabled = true;
    }
    else{
            document.getElementById("jsonButton").disabled = false;
    }

};


setInterval(
    function(){
        //Pin code validation
        document.getElementById("error3").style.visibility = isNaN(document.getElementById("pin-code").value) ? "visible" : "hidden";
        document.getElementById("error3").style.visibility = document.getElementById("pin-code").value.length != 6 && document.
        getElementById("pin-code").value.length > 0 ? "visible" : "hidden";
        disableButton = (document.getElementById("error3").style.visibility == "visible") ? true: false;
    },
    500
);

setInterval(
    function(){
        //Phone number validation
        document.getElementById("error4").style.visibility = document.getElementById("phonenumber").value.length != 10 && document.getElementById("phonenumber").value.length > 0 ? "visible" : "hidden";
        document.getElementById("error4").style.visibility = isNaN(document.getElementById("phonenumber").value) ? "visible" : "hidden";
        disableButton = (document.getElementById("error4").style.visibility == "visible") ? true: false;
    },
    500
);
setInterval(
    function(){
        document.getElementById("jsonButton").disabled = (disableButton == true) ? true: false;
    },
    500
);

document.getElementById("jsonButton").onclick = function(){
    fullname = document.getElementById("name").value;
    mail = document.getElementById("mail").value;
    pincode = document.getElementById("pin-code").value;
    phoneNumber = document.getElementById("phonenumber").value;
    city = document.getElementById("city").value;

    var dataObj = {
        "name" : fullname,
        "mail" : mail,
        "pincode" : pincode,
        "phonenumber" : phoneNumber,
        "city": city,
        "dateofregistration" : currentDate,
        "status": 1
    };

    let data = JSON.stringify(dataObj);
    document.write(data);
};

setInterval(function(){
        let date  = new Date();
        let hours = (date.getHours())<10 ? "0"+date.getHours() : date.getHours();
        let mins = (date.getMinutes())<10 ? "0"+date.getMinutes() : date.getMinutes();
        let secs = (date.getSeconds())<10 ? "0"+date.getSeconds() : date.getSeconds();
        let time = hours + ":" + mins + ":" + secs;
        document.getElementById("currenttime").innerHTML = time;
    },
1000);
