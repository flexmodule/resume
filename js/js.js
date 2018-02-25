$(function(){
  (function(){
  	var ranwidth=$(window).width();
  	var ranheight=$(window).height();
  	var cenavheight=$(".ce-nav").height();
    var introheight=$(".intro").height();
    var chaheight=ranheight/2-(introheight/2);
    $(".intro").css({
      marginTop:chaheight
    })
  	$("#home").width(ranwidth);
  	$("#home").height(ranheight);
  	$(".ce-nav").css({
  		top:(ranheight-cenavheight)/2
  	});
  	$(window).resize(function(){
  		  ranwidth=$(window).width();
  	    ranheight=$(window).height();
        introheight=$(".intro").height();
        chaheight=ranheight/2-(introheight/2);
        $(".intro").css({
        marginTop:chaheight
        })
  	    $("#home").width(ranwidth);
  	    $("#home").height(ranheight);
  	    $(".ce-nav").css({
  			top:(ranheight-cenavheight)/2
      	});
  	})
  })();
  (function(){
  	$(window).scroll(function(){
  		var $scrolltop=$(window).scrollTop();
  		if($scrolltop>70){	
  			$(".ce-nav").fadeIn(500);
  		}else{
  			$(".ce-nav").fadeOut(500);
  		}
  		if($scrolltop>$(window).height()){
  			$(".navbar").css({
  				position:"fixed",
  				width:"100%",
  				top:0,
          zIndex:99
  			})
  		}else{
  			$(".navbar").css({
  				position:"static"
  			})
  		}
  		$(".ce-nav ul").find("li").each(function(){
  			var $top=$(".nav-content").find(".resume").eq($(this).index()+1).offset().top;
  			if($top>($scrolltop+$(window).height())){
  				$(".ce-nav ul").find("li").removeClass("active");
  				$(".ce-nav ul").find("li").eq($(this).index()).addClass("active");
  				return false;
  			}
  		})
  	})
  })();
  $(".ce-nav ul").find("li").on("click",function(){
  			$(this).addClass("active").siblings("li").removeClass("active");
  			var $index=$(this).index();
  			var $top=$(".nav-content").find(".resume").eq($index).offset().top-$(window).height()+100;
  			$('html,body').animate({
			scrollTop:$top
		    },200);
  		})
  		$(".totop").on("click",function(){
  			$('html,body').animate({
			scrollTop:0
		    },200);
  		});
      $(".job-intension").find("ul li").hover(function(){
        $(this).find(".job-hide").stop(true,true).animate({
          top:0
        },200)
      },function(){
        $(this).find(".job-hide").stop(true,true).animate({
          top:"100%"
        },200)
      });

      $(".works").find("ul li").hover(function(){
        $(this).stop(true,true).animate({
          width:"65%"
        }).siblings("li").stop(true,true).animate({
          width:"15%"
        })
        $(".worksli-t").eq($(this).index()).hide();
      },function(){
         $(".works").find("ul li").stop(true,true).animate({
          width:"25%"
        },function(){
          $(".worksli-t").eq($(this).index()).show();
        })
      })

})