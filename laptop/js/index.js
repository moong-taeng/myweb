function next(){
    var name = document.getElementById("name_input").value;
    var phone = document.getElementById("num_input").value;
    
    if(name == "심근수" && phone == "01073151492"){
        document.location.href = "../html/one.html";
    }else{
        document.getElementById("now").style.visibility="visible";
    }
}