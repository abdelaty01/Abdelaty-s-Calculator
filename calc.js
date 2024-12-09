let txt=document.getElementById("txt");
let DEL=document.getElementById("DEL");
let AC= document.getElementById("AC");
let equal=document.getElementById("equal");
function get(a){
    txt.value+=a;
}
DEL.onclick=()=>{
    txt.value=txt.value.slice(0,-1);
}
AC.onclick=()=>{
    txt.value="";
}
equal.onclick=()=>{
    txt.value=eval(txt.value);
}