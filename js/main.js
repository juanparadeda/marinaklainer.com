$(document).ready(function(){

    var isMenuDown = false;
    
    $('#hamburgerMenu').mouseenter(function(){
        $(this).removeClass('fastRotationCountercl');
        $(this).addClass('fastRotationCl'); 
    });
    $('#hamburgerMenu').mouseleave(function(){
        $(this).removeClass('fastRotationCl'); 
        $(this).addClass('fastRotationCountercl'); 
    });
    $('#hamburgerMenu').click(function(){
        if ( isMenuDown == false){
            $('#bigbox').css('display', 'none');
            $('#bigbox').css('z-index', '10');
            $('#bigbox').slideDown(1000, function(){
                isMenuDown = true;
                $('#bigbox').mouseenter(function(){
                    $('#bigbox').css('display','flex');    
                });
            });
        }else{
                $('#bigbox').slideUp(1000,function(){
                    isMenuDown = false;
                });
            }     
    }); 

});