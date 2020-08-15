function btnclick(){
    var a=document.getElementById("txtep").value;
    var b=document.getElementById("txtv1s").value;

    var res=a / (0.01 * b);
    document.getElementById("txtnos").value=res;

}

function getquerystring(){
const params = new URLSearchParams(window.location.search)
for (const param of params) {
  console.log(param)
}
}
