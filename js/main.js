

jQuery(document).ready(function(){

        "use strict";
        $('#slider-carousel').carouFredSel({
            responsive:true,
            width:'100%',
            circular:true,
            scroll:{
                items:1,
                duration:500,
                pauseOnHover:true
            },
            auto:true,
            items:
            {
                visible:{
                    min:1,
                    max:1
                },
                height:"variable"
            },
                pagination:{
                    container:".sliderpage",
                    pageAnchorBuilder: false
                }
            });
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=60){
            $("header").addClass('secondary')
        }
        else if($("header").hasClass('secondary')){
            $("header").removeClass('secondary')}
        }
    );
});

function initMap() {
    var klaipeda = {lat: 55.713414, lng: 21.134837};
    var map = new google.maps.Map(
        document.getElementById("map"), {zoom: 14, center: klaipeda});
    var marker = new google.maps.Marker({position: klaipeda, map: map});
    
    }




  