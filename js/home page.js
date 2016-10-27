//顶部广告的展开和关闭
$(function(){
	$("#btnHide").click(function(){
		$(".aTop").css("display","none")
	})	
})
//我的麦乐购效果
$(function(){
	$(".mygou").eq(0).hover(function(){
		$(".site-top div.rg div.mygou ul.noneCon").css("display","block")
		$(".site-top div.rg div").eq(0).addClass("on")		
	},
	function(){
		$(".site-top div.rg div.mygou ul.noneCon").css("display","none")
		$(".site-top div.rg div").eq(0).removeClass("on")
		
	})
	
})
//收藏麦乐购效果
$(function(){
	$(".site-top div.rg div").eq(1).hover(function(){	
		$(".site-top div.rg div i").addClass("in")		
	},
	function(){
		$(".site-top div.rg div i").removeClass("in")
	})	
})

//手机麦乐购效果
$(function(){
	$(".mygou").eq(1).hover(function(){
		$(".site-top div.rg div.mygou div.noneCon").css("display","block")
		$(".site-top div.rg div").eq(5).addClass("on")	
	},
	function(){
		$(".site-top div.rg div.mygou div.noneCon").css("display","none")
		$(".site-top div.rg div").eq(5).removeClass("on")
		
	})
	
})

//搜索框
$(function () {
	var
		oSeachBox	  = $('#searchForm'),
		oSeachContent = $('#search_key'),
		oSearchList   = $('#search-list'),
		iSearchIndex  = -1,
		sOriHtml 	  = oSearchList.html();
	oSeachContent.focus(function () {
		oSeachContent.attr("value","")
		oSearchList.css('display', 'block');
	}).blur(function () {
		oSeachContent.attr("value","中秋小团圆，满499-50");
		oSearchList.css('display', 'none');
	}).keyup(function (ev) {
		var
			ev = ev || window.event,
			aLi = $('#search-list li');
		if(ev.keyCode === 38 || ev.keyCode === 40) {
			if(ev.keyCode === 38 && iSearchIndex > 0) {
				iSearchIndex--;
			} else if(ev.keyCode === 40 && iSearchIndex < aLi.length - 1) {
				iSearchIndex++;
			}
			//oSeachContent.val(aLi.removeClass('active').eq(iSearchIndex).addClass('active'));
		}
	}).bind('input propertychange', function () {
		var sSearchCon = $(this).val();
		if(sSearchCon) {
			$.ajax({
				url: 'http://www.gou.com/search/getkey.do',
				data: {
					q: sSearchCon,
				},
				type:'GET',
				jsonp: 'jsoncallback',
				//jsonpCallback: 'jQuery172004612211277708411_1473297448718',
				dataType: 'jsonp',
				success: function (str) {
					//console.log(str);
					var sHtml = '';
					sHtml = str.Content;
					console.log(sHtml)
					//oSearchList.html(sHtml);
					sHtml+="<li>"+sSearchCon+"</li>"
					if(sHtml) {
						oSearchList.css('display', 'block').html(sHtml);
					} else {
						oSearchList.css('display', 'none');
					}
					iSearchIndex = -1;
				}
			});
		} else {
			oSearchList.html(sOriHtml);
			iSearchIndex = -1;
		}
	});
	
})

//导航下边框运动
$(function(){
	var aLi=$(".navMain-list li")
	var lastLi=$(".navMain-list li.onBg")
	aLi.mouseover(function(){
		var a=$(this).position().left
		var b=$(this).find("a").width()
		//console.log(a,b)
		lastLi.stop().animate({"left":a,"width":b},400)
	})
	aLi.mouseout(function(){
		lastLi.stop().animate({"left":0,"width":32},400)
	})
})

//整点抢效果

$(function(){
	var b=$(".effect .letters b")
	var timer=setInterval(move,2000)
		function move(){
			b.eq(1).find("i").css("top",0)
			b.eq(0).find("i").eq(0).animate({"top":-30},function(){
				b.eq(1).find("i").eq(0).animate({"top":-37})
				b.eq(0).find("i").eq(1).animate({"top":-30},function(){
					b.eq(1).find("i").eq(1).animate({"top":-37})
					b.eq(0).find("i").eq(2).animate({"top":-30},function(){
						b.eq(1).find("i").eq(2).animate({"top":-37},function(){
							b.eq(0).css("top",0);
						})
						b.eq(0).css("top",37)
						b.eq(0).find("i").css("top",0)
					})
				})
				
			})
		}
})
//二级菜单效果
$(function(){
	var li=$("nav .nav-list li")
	var sub=li.find(".sub-pannel")
	li.mouseover(function(){
		$(this).addClass("nav-hover")	
		sub.eq($(this).index()).css("display","block").stop().animate({"opacity":0.96,"left":180})
	})
	li.mouseleave(function(){
		$(this).removeClass("nav-hover")
		sub.eq($(this).index()).css("display","none").stop().animate({"opacity":0.5,"left":170})
	})
})
$(function(){
	$("nav .nav-list li .sub-pannel .nelBox p a").hover(function(){
		$(this).addClass("on2")
	},function(){
		$("nav .nav-list li .sub-pannel .nelBox p a").removeClass("on2")
	})
})
//banner 图
	$(function(){
		var ban=$(".market-pannel a")
		var btn=$("#marketBtn li")
		var back=$(".market-silde")
		var bac=["rgb(3,31,85)","rgb(18,72,58)","rgb(251,235,235)","rgb(249,118,30)","rgb(239,239,223)"]
		var i=0
		var j=0
		var timer=setInterval(move,3000)
			btn.eq(0).addClass("current")
			back.eq(0).css("background",bac[0])
			function move(){
				i++;
				i=i>ban.length-1 ? 0 : i;
				ban.eq(i).find("img").stop().animate({"width":810,"height":480},1000).parent().parent().parent().siblings().find("img").stop().animate({"width":830,"height":500},1000)
				ban.eq(i).stop().animate({"opacity":1},200).parent().parent().siblings().find("a").stop().animate({"opacity":0},200)
				btn.eq(i).stop().animate({"top":-8}).siblings().stop().animate({"top":0})
				back.eq(i).css("background",bac[i]).siblings().css("background","none")
				
			}
			btn.mouseenter(function(){
				clearInterval(timer)
				btn.eq($(this).index()).stop().animate({"top":-8},1000).siblings().stop().animate({"top":0},1000)
				ban.eq($(this).index()).stop().animate({"opacity":1},200).parent().parent().siblings().find("a").stop().animate({"opacity":0},200)
				back.eq($(this).index()).css("background",bac[$(this).index()]).siblings().css("background","none")
				i=$(this).index()
			})
			btn.mouseleave(function(){
				btn.eq(i).stop().animate({"top":0})
				timer=setInterval(move,3000)
			})
			
			
	})
	//打开网页弹出图片和遮罩层
	$(function(){
		$("#tanchu").css("display","block")
		$(".zhezhao").css("display","block")
		$(".guanbi").click(function(){
			$(".zhezhao").css("display","none")
			$("#tanchu").css("display","none")
		})	
	})

	//右侧购物车效果
	$(function(){
		$(".cart-nav-list-7 li").click(function(e){		
			if($(this).hasClass("show")){
				$(".gou-cart").animate({"right":-280},500)
				$(this).removeClass("show")
			}else{
				$(".gou-cart").animate({"right":0},500);
				$(".sidebar").eq($(this).index()).fadeIn().siblings(".sidebar").fadeOut();
				$(this).addClass("show").siblings("li").removeClass("show");
			}	
			e.stopPropagation();    
		})	
//		$(document).click(function(){
//			$(".gou-cart").animate({"right":-280},500)	
//		})		
	})
	//左边框下部分划过事件
	$(function(){
		$(".bot li").eq(0).hover(function(){
			$(".chu1").stop().animate({"width":120,"left":-120})},function(){
				$(".chu1").stop().animate({"width":0,"left":0})
			}	
		)
		$(".bot li").eq(1).hover(function(){
			$(".chu2").stop().animate({"width":80,"left":-80})},function(){
				$(".chu2").stop().animate({"width":0,"left":0})
			}	
		)
		$(".bot li").eq(2).hover(function(){
			$(".chu3").stop().animate({"width":80,"left":-80})},function(){
				$(".chu3").stop().animate({"width":0,"left":0,})
			}	
		)
		$(".bot li").eq(3).hover(function(){
			$(".chu4").stop().animate({"width":240,"left":-240})},function(){
				$(".chu4").stop().animate({"width":0,"left":0})
			}	
		)
		$(".bot li").eq(4).hover(function(){
			$(".chu5").stop().animate({"width":80,"left":-80})},function(){
				$(".chu5").stop().animate({"width":0,"left":0})
			}	
		)
		$(".bot li").eq(5).click(function(){
			//console.log($(document).scrollTop())
			$("body").stop().animate({"scrollTop":0},1000)
		})
		
	})
//整点抢倒计时
$(function(){
	setInterval(function(){
	var date=new Date();
	//console.log(date)
	var oDate=new Date("2016/9/20")
	//console.log(oDate)
	var aa =disTime(oDate,date)
		//console.log(aa);
	var hours=24-aa[1]
	if(hours>=9&&hours<13){
		$(".timeTit li").eq(0).css("background","#cb351a").find("a").eq(1).text("抢购进行中").parent().siblings().css("background","##444851").find("a").eq(1).text("即将开抢")	
	}
	if(hours>=13&&hours<17){
		$(".timeTit li").eq(1).css("background","#cb351a").find("a").eq(1).text("抢购进行中").parent().siblings().css("background","##444851").find("a").eq(1).text("即将开抢")
	}	
	if(hours>=17&&hours<24){
		$(".timeTit li").eq(2).css("background","#cb351a").find("a").eq(1).text("抢购进行中").parent().siblings().css("background","##444851").find("a").eq(1).text("即将开抢")
	}	
	if(hours>=0&&hours<9){
		$(".timeTit li").eq(3).css("background","#cb351a").find("a").eq(1).text("抢购进行中").parent().siblings().css("background","##444851").find("a").eq(1).text("即将开抢")	
	}	
		
	var e=$(".timeCount span.time em")	
		e.eq(0).text(aa[1][0])
		e.eq(1).text(aa[1][1])
		e.eq(2).text(aa[2][0])
		e.eq(3).text(aa[2][1])
		e.eq(4).text(aa[3][0])
		e.eq(5).text(aa[3][1])
		e.eq(6).text(0)		
			 
	})
	function addZero(num) {
		num < 10 ? num = "0" + num : num = "" + num;
		return num;
	}
	function disTime(date1, date2) {
		var dis = Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000); //转换成还剩多少秒
		if(dis==0){
			return null;
		}else{
			var day = Math.floor(dis / (24 * 60 * 60));
			var hour = Math.floor(dis / (60 * 60) % 24);
			var minute = Math.floor(dis / 60 % 60);
			var second = Math.floor(dis % 60);
			//console.log(addZero(day));
			var arr = [addZero(day),addZero(hour),addZero(minute),addZero(second)];
			return arr;
		}
	}
})

//整点抢商品列表

$(function(){
	$.ajax({
			type:"get",
			url:"shuju.txt",
			async:true,
			success:function(data){
			console.log(data);
			var data=eval(data);
			var i=1;
			$(".timeTit li").click(function(){			
				i=$(this).index()
				data[i*2].title1 == 1 ?  data[i*2].title1="" : data[i*2].title1;
				$(".goods ul li dl dt img").attr("src",data[i*2].src)
				$(".goods ul li dl dd.deguo").find("a").text(data[i*2].title1).parent().find("span").text(data[i*2].title2)
				$(".goods ul li dl dd .jiage span").text(data[i*2].price)
				$(".goods ul li dl dd .price").find("b").text(data[i*2].neprice).parent().find("s").text(data[i*2].oldprice)
				$(this).addClass("current").siblings().removeClass("current")	
				$(this).find("i").addClass("arrow-down").parent().siblings().find("i").removeClass("arrow-down")
				$(".bt .litm").text("1")
			})
			$(".goods .prev").click(function(){
				//console.log("b")
				var c=0
					c++;
				if(c%2==1){
					$(".bt .litm").text("2")
				}else{
					$(".bt .litm").text("1")
				}
				var b=2*i-1	
				$(".goods ul li dl dt img").attr("src",data[b].src)
				$(".goods ul li dl dd.deguo").find("a").text(data[b].title1).parent().find("span").text(data[b].title2)
				$(".goods ul li dl dd .jiage span").text(data[b].price)
				$(".goods ul li dl dd .price").find("b").text(data[b].neprice).parent().find("s").text(data[b].oldprice)
			})
	
			$(".goods .next").click(function(){
				//console.log("a")
				var d=0
					d++;
				if(d%2==1){
					$(".bt .litm").text("2")
				}else{
					$(".bt .litm").text("1")
				}
				var b=2*i-1
				$(".goods ul li dl dt img").attr("src",data[b].src)
				$(".goods ul li dl dd.deguo").find("a").text(data[b].title1).parent().find("span").text(data[b].title2)
				$(".goods ul li dl dd .jiage span").text(data[b].price)
				$(".goods ul li dl dd .price").find("b").text(data[b].neprice).parent().find("s").text(data[b].oldprice)
				$()
			})
			
		}
	})
})
//			<div class="bt">
//          	<div class="next"></div>
//		 		<div class="prev"></div>
//		 		<font class="red litm">1</font>/<font class="count">2</font>
//			</div>
//			<dd class="deguo"><a>德国直邮 包邮包税</a><span>4件装 德国凯莉泓乐德文版Hello 3段（10个月以上）600g</span></dd>
//			<dd class="jia">
//				<div class="jiage">
//					<span>7.4</span>
//					<i>折</i>
//				</div>
//				<div class="price">
//					<p>¥<b class="tahoma">828</b>.00<br><s>¥1116.00</s></p>
//				</div>
//				<div class="start"><a>即将开抢</a></div>
//			</dd>	

//天天特卖图片放大效果
$(function(){
	$(".saleToday li img").mouseenter(function(){
		$(this).stop().animate({"width":315,"height":250,"left":-13,"top":-10}).siblings().stop().animate({"width":290,"height":230,"left":0,"top":0})	
	})
	$(".saleToday li img").mouseleave(function(){
		$(this).animate({"width":290,"height":230,"left":0,"top":0})
	})	
})

//猜你喜欢分页效果

$(function(){
	var i=3
	$(".guess-l .prev").click(function(){
		i--;
		i=i>0 ? i : 2;
		if(i%2==0){
			$(".guess-m ul").eq(0).css("display","none")
			$(".guess-m ul").eq(1).css("display","block")
			$(".gs .litm").text("2")
		}else{
			$(".guess-m ul").eq(0).css("display","block")
			$(".guess-m ul").eq(1).css("display","none")
			$(".gs .litm").text("1")
		}	
	})
	$(".guess-l .next").click(function(){
		i++;
		i=i<6 ? i : 4;
		if(i%2==0){
			$(".guess-m ul").eq(0).css("display","none")
			$(".guess-m ul").eq(1).css("display","block")
			$(".gs .litm").text("2")
		}else{
			$(".guess-m ul").eq(0).css("display","block")
			$(".guess-m ul").eq(1).css("display","none")
			$(".gs .litm").text("1")
		}
	})	
})

//楼层
$(function(){
	$(window).scroll(function(){
		var $scrolltop=$(document).scrollTop()
		if($scrolltop>560&&$scrolltop<2200){
			$(".leftSus").css("display","block")
		}else{
			$(".leftSus").css("display","none")
		}
		if($scrolltop>2500&&$scrolltop<8000){
			$(".mui-lift").css("display","block")
		}else{
			$(".mui-lift").css("display","none")
		}
		//console.log($scrolltop)
		//求出索引
		var $hei=$(".floor").eq(0).height()
		//console.log($hei)
		var i=parseInt(($scrolltop-2500)/$hei) 
		$(".mui-lift a").eq(i).addClass("on").siblings().removeClass("on")
		//对楼梯添加点击事件
		$(".mui-lift a").click(function(){
			var $scroll=2700+$(this).index()*$hei
			$("body").stop().animate({"scrollTop":$scroll},2000)	
		})
	})
})
//1-9层的轮播
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love1 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love1").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love1").css("left","0px")
			}
		})		
	}
	$(".brand .prev").each(function(){
		$(this).click(function(){
		var $li=$(".brand .br-b li")
		var $wid=$li.eq(0).width()
		//console.log($(this))
			if(i==0){
				i = 0;
				$(".brand .br-b ul").css("left",-$wid*2)
			}
			move();
		})
	})
	$(".brand .next").each(function(){
		$(this).click(function(){
			move();
	})
		
	})	
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love2 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love2").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love2").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love3 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love3").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love3").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love4 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love4").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love4").css("left","0px")
			}
		})		
	}
})	
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love5 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love5").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love5").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love6 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love6").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love6").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love7 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love7").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love7").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love8 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love8").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love8").css("left","0px")
			}
		})		
	}
})
$(function(){
	var timer=setInterval(move,3000);
	var i=0;
	function move(){
		i++;
		//console.log(i)
		var $li=$(".love9 li")
		//console.log($li.length)
		var $wid=$li.eq(0).width()
		//console.log($wid)
		$(".love9").stop().animate({"left":-$wid*i},1000,function(){
			if(i>=2){
				i=0	
				$(".love9").css("left","0px")
			}
		})		
	}
})
////晒单区轮播图
$(function(){
	var time=setInterval(mover,3000);
	var j=0;
	function mover(){
		j++;
		//console.log(j)
		var $ul=$(".sunaCon ul")
		//console.log($ul.length)
		var $width=$ul.eq(0).width()
		//console.log($width)
		$(".sunaCon").stop().animate({"left":-$width*j},1000,function(){
			if(j>=2){
				j=0;
				
				$(".sunaCon").css("left","0px")
			}
		})	
	}
	$(".sunArea .conTit .prev").click(function(){
		var $ul=$(".sunaCon ul")
		var $width=$ul.eq(0).width()
			if(j==0){
				j=0
				$(".sunaCon").css("left",-$width*2)
			}
			mover();
	})
	$(".sunArea .conTit .next").click(function(){
		mover();
	})

})
//《天天特卖列表》倒计时
$(function(){
	setInterval(function(){
	var date=new Date();
	//console.log(date)
	var oDate=new Date("2016/9/30")
	//console.log(oDate)
	var aa =disTime(oDate,date)
		//console.log(aa);
		var a=$(".saleToday ul li div.saleTit h3 p.limit")
		a.find("#shijian").text(aa[0])
		a.find("#shijian1").text(aa[1])
		a.find("#shijian2").text(aa[2])
		a.find("#shijian3").text(aa[3])
			 
	})
	function addZero(num) {
		num < 10 ? num = "0" + num : num = "" + num;
		return num;
	}
	function disTime(date1, date2) {
		var dis = Math.floor(Math.abs(date1.getTime() - date2.getTime()) / 1000); //转换成还剩多少秒
		if(dis==0){
			return null;
		}else{
			var day = Math.floor(dis / (24 * 60 * 60));
			var hour = Math.floor(dis / (60 * 60) % 24);
			var minute = Math.floor(dis / 60 % 60);
			var second = Math.floor(dis % 60);
			//console.log(addZero(day));
			var arr = [addZero(day),addZero(hour),addZero(minute),addZero(second)];
			return arr;
		}
	}
})

//天天特卖字体效果
$(function(){
	var bo=$("#bolang i")
	//console.log(bo)
		setInterval(move,6000)
		function move(){
			bo.eq(0).animate({"top":"-7px"},function(){
				$(this).animate({"top":"0"})
				bo.eq(1).animate({"top":"-7px"},function(){
					$(this).animate({"top":"0"})
					bo.eq(2).animate({"top":"-7px"},function(){
						$(this).animate({"top":"0"})
						bo.eq(3).animate({"top":"-7px"},function(){
							$(this).animate({"top":"0"})
							bo.eq(4).animate({"top":"-7px"},function(){
								$(this).animate({"top":"0"})
								bo.eq(5).animate({"top":"-7px"},function(){
									$(this).animate({"top":"0"})
									bo.eq(6).animate({"top":"-7px"},function(){
										$(this).animate({"top":"0"})
										bo.eq(7).animate({"top":"-7px"},function(){
											$(this).animate({"top":"0"})
											bo.eq(8).animate({"top":"-7px"},function(){
												$(this).animate({"top":"0"})
												bo.eq(9).animate({"top":"-7px"},function(){
													$(this).animate({"top":"0"})
													bo.eq(10).animate({"top":"-7px"},function(){
														$(this).animate({"top":"0"})
														bo.eq(11).animate({"top":"-7px"},function(){
															$(this).animate({"top":"0"})
															bo.eq(12).animate({"top":"-7px"},function(){
																$(this).animate({"top":"0"})
																bo.eq(13).animate({"top":"-7px"},function(){
																	$(this).animate({"top":"0"})
																	bo.eq(14).animate({"top":"-7px"},function(){
																		$(this).animate({"top":"0"})
																	})
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
			//console.log("a")
		}
})

















