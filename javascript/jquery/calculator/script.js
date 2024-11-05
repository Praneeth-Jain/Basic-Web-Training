
$(".btn").click(function(){
    var text=$(this).text()
    $(".display-p").append(text)
})

$("#btneq").click(function(){
    var evalstring=$(".display-p").text()
    console.log(evalstring);
    $(".display-p").text(eval(evalstring))
})

$("#btnC").click(function(){
    $(".display-p").text("")
})
