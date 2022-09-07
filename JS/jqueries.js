$(document).ready(function(){
    $(".main-title").click(function(){
        $("h2").animate({
            
            opacity: '0.8',
            fontSize: '4.5em',
            width: '100%'
        });
    });
  
  
  
   $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});

