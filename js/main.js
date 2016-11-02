// $(function ()  {
    
//     $(".hamburger").click(function() {
//         var value = $(".content-section-b").offset().top;
//         console.log("Hamburger clicked: Offset: "+value);
//         $('html, body').animate({
//             scrollTop: $(".content-section-b").offset().top
//         }, 800);

//     });
    
    
// });


function scrollTo() {
            $('html, body').animate({ scrollTop: $('#div_id').offset().top }, 'slow');
            return false;
        }

