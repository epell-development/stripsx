function validate() {
    var input = document.getElementById("input").value;
    var password = "malpensa24"
    
    if(input==password) {
        window.open("pages/strips.html", "_self")
        
    } else alert("Password is not correct.")
}