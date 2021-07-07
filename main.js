x=[];
function kaka(){
var a=document.getElementById("ibox1").value;
var b=document.getElementById("ibox2").value;
var c=document.getElementById("ibox3").value;
var d=document.getElementById("ibox4").value;
x.push(a)
x.push(b)
x.push(c)
x.push(d)
console.log(x);
document.getElementById("answer").innerHTML=x;
document.getElementById("nami").style.display="none";
document.getElementById("caca").style.display="inline-block";
}
function aaaa(){
    x.sort();
    console.log(x);
document.getElementById("answer").innerHTML=x;
}