//# Epmpty Box Error 

function chkempt(){
    var  names = document.getElementById("name").value;
    var  em = document.getElementById("email").value;
    var  sub = document.getElementById("sub").value;
    var  ms = document.getElementById("msg").value;
    if(names==''|| em == ''|| sub==''||ms==''){
        alert("Empty Fiels");
    }else{
        document.getElementById("myForm").submit();
    }
}


