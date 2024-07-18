function svalidate()
{
    var email=document.getElementById("semail").value;
    var pass=document.getElementById("spassword").value;
    var cpass=document.getElementById("scnfpassword").value;
    var username=document.getElementById("name").value;
    if (  (/[!@#$%^&*+=/-?.,;:]/).test(username)){
        alert("special characters are not allowed in Username");
    }
    const pattern=/(?=.*\d)(?=.*[A-Z])(?=.[a-z])(?=.[@#$%^&*-=+-.,]).{8,}/;
    if (!(pattern.test(pass)))
    {
        alert("password must contain atleast one [A-Z],[a-z],[0-9],special characters");
    }
    if (cpass!=pass){
        alert("password should match");
    }
    const substring="@gmail.com";
    const len=email.length;
    if ((/^_/) || (email.length<16) || (email.slice(len-10,len)!=substring)){
        alert("Enter proper Email ID");  
    }
}