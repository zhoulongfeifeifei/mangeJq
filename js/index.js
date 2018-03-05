$(function(){
	//右上角时间
/*	startTime();
		function startTime() {
			var today = new Date();
			var y = today.getFullYear();
			var M = today.getMonth() + 1;
			var d = today.getDate();
			var w = today.getDay();
			var h = today.getHours();
			var m = today.getMinutes();
			var s = today.getSeconds();
			// add a zero in front of numbers<10  
			m = checkTime(m);
			s = checkTime(s);
			$('#timenow').html(y + '年' + M + '月' + d + "日 " + h + ':' + m + ':' + s); //可改变格式  
			t = setTimeout(startTime, 500);

			function checkTime(i) {
				if(i < 10) {
					i = "0" + i;
				}
				return i;
			}
		}*/
		$(".out").click(function(){
			var deleterows = confirm("确定退出吗？");
		if(deleterows) {
			// 		alert(0)
			window.location.href="../login.html";
		}
		})
		//=========================左侧菜单栏高度
	var a=document.body.clientHeight;
	console.log(a)
	$(".left-ul01").css({"min-height":(a-60)+"px"})
	//左侧菜单栏点击事件
	$(".left-ul01>li .main-li01").click(function(){
		if($(this).parent().hasClass("active")){
			$(this).parent().find(".second").slideUp();
			$(this).parent().removeClass("active")
		}else{
			$(this).parent().addClass("active").siblings().removeClass("active");
			$(this).parent().siblings().find(".second").slideUp()
			$(this).parent().find(".second").slideDown()
		}
	})
	$(".in-src").click(function(){
		var newSrc=this.getAttribute('mySrc');  
		$("#wangye").attr("src",newSrc)
	})
})
