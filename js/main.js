$(document).ready(function(){
    //팝업창
    $("#gnb li:eq(0)").click(function(){
        $("#layer").addClass("active");
    });
    $(".btn").click(function(){
        $("#layer").removeClass("active");
    });
});