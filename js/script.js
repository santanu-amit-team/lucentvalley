
    $(document).ready(function(){





      $('.sec6 .owl-carousel').owlCarousel({
          loop:true,
          margin:10,
          navigation: true, // Show next and prev buttons
          slideSpeed: 300,
          paginationSpeed: 400,
          singleItem: true,
          margin: 0,
          items: 1,
          autoplay:false,
          autoplayTimeout: 5000,
          autoplayHoverPause:true,
          loop: true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              767:{
                  items:2,
                  nav:true
              }
          }
      });

      $(".package").click(function(){
        $(".package").removeClass("active");
        $(this).addClass("active");
        });


    });



      
