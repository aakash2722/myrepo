var os=String.empty;

function btnclick(){
    var a=document.getElementById("txtep").value;
    var b=document.getElementById("txtv1s").value;

    var res=a / (0.01 * b);
    document.getElementById("txtnos").value=res;
    document.getElementById("qs").value = os;

}

function getquerystring(){
  const params = new URLSearchParams(window.location.search)
for (const param of params) {
  console.log(param);
  os=param[1];
  
}
console.log(os);

}

window.onload = getquerystring();



