function btnclick(){
    var a=document.getElementById("txtep").value;
    var b=document.getElementById("txtv1s").value;

    var res=a / (0.01 * b);
    document.getElementById("txtnos").value=res;

}