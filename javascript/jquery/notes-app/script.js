$(".add-btn").click(function(){
    var newNotes=$(`<p class="p-notes"></p>`).text($(".notes-inp").val());
    // var newBtn=$(`<button class="x-btn"></button>`).text("X");
    console.log($(".notes-inp").val());
    $(".notes-cont").append(newNotes);
});




