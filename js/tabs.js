$("#name").bind("click", function() {
    $("#nameTab").show();
    $("#workTab").hide();
    $("#aboutTab").hide();
 });

 $("#work").bind("click", function() {
    $("#workTab").show();
    $("#nameTab").hide();
    $("#aboutTab").hide();
 });

 $("#about").bind("click", function() {
    $("#aboutTab").show();
    $("#nameTab").hide();
    $("#workTab").hide();
 });
 

