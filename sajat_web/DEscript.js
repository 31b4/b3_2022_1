$(document).ready(function (params) {
    console.log("szia");
    setInterval(()=>{Igazitas();}, 100)
    
    function Igazitas(params) {            
        if ($(window).width() > 1000) {
            $("#tagok div").css("padding-top", "20px")
            $("#tagok div").removeClass("col-12");
        }
        else if ($(window).width() > 690) {
            $("#tagok div").css("padding-top", "35px")
            $("#tagok div").removeClass("col-12");
        }
        else{
            $("#tagok div").addClass("col-12");
            $("#tagok div").css("padding-top", "50px")
            $("#tagok div#elsoKep").css("padding-top","20px")
        }
    }            
})

//---------------------------------------time--------------------------
var a=setInterval(function(){pontosIdo()},1000);
pontosIdo()//ahogy betolt az oldal mutatja rogton az idot
function pontosIdo() {
    var d=new Date();
    var h = d.getHours()
    var m = d.getMinutes()
    if(m<10){
        document.getElementById("ido").innerHTML=h+':0'+m;
    }
    else{
        document.getElementById("ido").innerHTML=h+':'+m;
    }
}