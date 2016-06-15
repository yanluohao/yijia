$(function(){
	//第一个轮播图
   var myindex=0;
   $("#container .btns span").hover(
   	function(){
   		clearInterval(time_1);
   		$("#container .btns span").removeClass("on");
   		$(this).addClass("on");
   		$("#container img").hide();
   		$("#container img").eq($(this).index()).show();
   	},function(){
   		myindex=$(this).index();
   		time_1=setInterval(nextpic,2000);
   	}
   );


   var bannerlength=$("#container img").length;

   function nextpic(){
   	if(myindex<bannerlength-1){
   		myindex++;
   	}
   	else if(myindex=bannerlength-1){
   		myindex=0;
   	}
   	showBtn();
   	showPic();
   }
  
   function showBtn(){
   	$("#container .btns span").removeClass("on");
   	$("#container .btns span").eq(myindex).addClass("on");
   }

   function showPic(){
   	$("#container img").hide();
   	$("#container img").eq(myindex).show();
   }

   time_1=setInterval(nextpic,2000);

    //第二个轮播图
   var container = $('#container2');
   var list = $('.displaypic1');
   var buttons = $('.displaybtn span');
   var prev = $('.pre');
   var next = $('.next');
   var index = 1;
   var len = 3;
   var interval = 3000;
   var timer;


   function animate (offset) {
       var left = parseInt(list.css('left')) + offset;
       if (offset>0) {
           offset = '+=' + offset;
       }
       else {
           offset = '-=' + Math.abs(offset);
       }
       list.animate({'left': offset}, 300, function () {
           if(left > 0){
               list.css('left', -1000 * len);
           }
           if(left < (-1000 * len)) {
               list.css('left', 0);
           }
       });
   }

   function showButton() {
       buttons.eq(index-1).addClass('active').siblings().removeClass('active');
   }

   function play() {
       timer = setTimeout(function () {
           next.trigger('click');
           play();
       }, interval);
   }
   function stop() {
       clearTimeout(timer);
   }

   next.bind('click', function () {
       if (list.is(':animated')) {
           return;
       }
       if (index == 3) {
           index = 1;
       }
       else {
           index += 1;
       }
       animate(-1000);
       showButton();
   });

   prev.bind('click', function () {
       if (list.is(':animated')) {
           return;
       }
       if (index == 1) {
           index = 3;
       }
       else {
           index -= 1;
       }
       animate(1000);
       showButton();
   });

   buttons.each(function () {
        $(this).bind('click', function () {
            if (list.is(':animated') || $(this).attr('class')=='active') {
                return;
            }
            var myIndex = parseInt($(this).attr('index'));
            var offset = -1000 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        })
   });

   container.hover(stop, play);

   play();


   $("#slidebar ul li").hover(function(){
   	$(this).animate({
   		right:76                                   //侧边栏
   	})
   },function(){
   	$(this).animate({
   		right:0
   	})
   })

 
   //回到顶部
   $(window).scroll(
   	function(){
   		var wHeight=document.documentElement.clientHeight||document.body.clientHeight;
   		var sTop=document.body.scrollTop||document.documentElement.scrollTop;
   		if(1200<wHeight+sTop){
   			 $(".scrolltoTop").show();
   		}
   		else{
   			 $(".scrolltoTop").hide();
   		}
   	}
   	)

    $(".scrolltoTop").click(function(){
    	var speed=500;
    	$("body").animate({
    		scrollTop:0
    	},speed)
    })

})

