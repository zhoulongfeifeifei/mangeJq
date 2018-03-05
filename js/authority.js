$(function() {
	$("#addlabel").click(function(){
//		alert(5)
		$(".lower-modle01").fadeIn()
		$(".lower-no").click(function(){
			$(".lower-modle01").fadeOut()
		})
	})
	$("#edit").on("click",function(){
		$('.lower-modle02').fadeIn()
		$(".lower-no").click(function(){
			$(".lower-modle02").fadeOut()
		})
	})
	$("#delete").on("click",function(){
		$('.lower-modle03').fadeIn()
		$(".lower-no").click(function(){
			$(".lower-modle03").fadeOut()
		})
	})
	$('.button').on('click',function(){
		if($('#tz').val()==''){
			alert('请选择跳转页码')
		}else{
			
		}
	})
})