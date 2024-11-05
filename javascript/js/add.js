var btn=document.querySelector("#btn");
btn.addEventListener("click",function(){
    var num1=document.querySelector("#number1");
    var n1=parseInt(num1.value)
    var num2=document.querySelector("#number2");
    var n2=parseInt(num2.value)
    var sum=n1+n2;
    // var p=document.querySelector("#res");
    // p.innerHTML=sum;
    alert("Result is : "+sum);
});

var btn=document.querySelector("#btn2");
btn.addEventListener("click",function(){
    var num1=document.querySelector("#number1");
    var n1=parseInt(num1.value)
    var num2=document.querySelector("#number2");
    var n2=parseInt(num2.value)
    var sum=n1-n2;
    // var p=document.querySelector("#res");
    // p.innerHTML=sum;
    alert("Result is : "+sum);
});
var btn=document.querySelector("#btn3");
btn.addEventListener("click",function(){
    var num1=document.querySelector("#number1");
    var n1=parseInt(num1.value)
    var num2=document.querySelector("#number2");
    var n2=parseInt(num2.value)
    var sum=n1/n2;
    // var p=document.querySelector("#res");
    // p.innerHTML=sum;
    alert("Result is : "+sum);
});
var btn=document.querySelector("#btn4");
btn.addEventListener("click",function(){
    var num1=document.querySelector("#number1");
    var n1=parseInt(num1.value)
    var num2=document.querySelector("#number2");
    var n2=parseInt(num2.value)
    var sum=n1*n2;
    // var p=document.querySelector("#res");
    // p.innerHTML=sum;
    alert("The result is "+sum);
});