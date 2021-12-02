$(function(){
$("#proLink1").click(function() {
    $("#pro1").show();
    $("#pro2").hide();
    $("#pro3").hide();
    $("#proLink1").addClass("selected");
    $("#proLink2").removeClass("selected");
    $("#proLink3").removeClass("selected");
    return false;
});


$("#proLink2").click(function() {
    $("#pro1").hide();
    $("#pro2").show();
    $("#pro3").hide();
    $("#proLink1").removeClass("selected");
    $("#proLink2").addClass("selected");
    $("#proLink3").removeClass("selected");
    return false;
});

$("#proLink3").click(function() {
    $("#pro1").hide();
    $("#pro2").hide();
    $("#pro3").show();
    $("#proLink1").removeClass("selected");
    $("#proLink2").removeClass("selected");
    $("#proLink3").addClass("selected");
    return false;
});
});
