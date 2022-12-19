$(function(){
    //Swiper
    var swiper = new Swiper('.swiper', {
        autoHeight: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 1,
        // spaceBetween: 30,
        breakpoints: {
            // 1600: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            // 1260: {
            //     slidesPerView: 1,
            //     spaceBetween: 30,
            // },
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });
})

$(function(){
    $(".gameType .top li").click(function(){
        $(this)
        .toggleClass("active");
       
        $(this).siblings()
        .removeClass("active");

        var log = $(this).index();

        if( log == 0) 
        {
            $(".typeContent.hot")
            .addClass("display");

            $(".typeContent.hot").siblings()
            .removeClass("display");
        }

        if( log == 1) 
        {
            $(".typeContent.all")
            .addClass("display");

            $(".typeContent.all").siblings()
            .removeClass("display");
        }

        if(log == 2) 
        {
            $(".typeContent.sport")
            .addClass("display");

            $(".typeContent.sport").siblings()
            .removeClass("display");
        }

        if(log == 3) 
        {
            $(".typeContent.live")
            .addClass("display");

            $(".typeContent.live").siblings()
            .removeClass("display");
        }
        if(log == 4) 
        {
            $(".typeContent.slot")
            .addClass("display");

            $(".typeContent.slot").siblings()
            .removeClass("display");
        }
        if(log == 5) 
        {
            $(".typeContent.fish")
            .addClass("display");

            $(".typeContent.fish").siblings()
            .removeClass("display");
        }
        if(log == 6) 
        {
            $(".typeContent.board")
            .addClass("display");

            $(".typeContent.board").siblings()
            .removeClass("display");
        }
    })

})