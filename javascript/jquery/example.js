//$(document).ready -> when the document is fully rendered
// $(this) -> selects current object
// $("") -> can select any Element,calss,tags using selectors


// $(document).ready(function(){
//     $(".btn").click(function(){
//       $("p").hide();
//     });
//   });


$(document).ready(function(){
    $("img").mouseover(function(){
        $(this).css("height","370px");
        $(this).css("width","370px");
        $(this).css("border","10px silver solid");
        $(this).css("rotate","-15deg");
        $(".ad-info").fadeToggle();
    });
    $("img").dblclick(function(){
        $(this).css("rotate","0deg");
    });
});


$(document).ready(function(){
    $("img").mouseout(function(){
        $(this).css("height","300px");
        $(this).css("width","300px");
        $(this).css("border","20px black solid");
        $(this).css("rotate","0deg");
        $(".ad-info").fadeToggle();
    });
});