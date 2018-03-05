$(function() {
	$("#datetimeStart01").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	}).on("changeDate", function(ev) {
		var end = $("#datetimeStart01").val();
		$("#datetimeEnd01").datetimepicker("setStartDate", end)
	});
	$("#datetimeEnd01").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	})
	$("#datetimeStart02").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	}).on("changeDate", function(ev) {
		var end = $("#datetimeStart02").val();
		$("#datetimeEnd02").datetimepicker("setStartDate", end)
	});
	$("#datetimeEnd02").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	})
	$("#datetimeStart03").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	}).on("changeDate", function(ev) {
		var end = $("#datetimeStart03").val();
		$("#datetimeEnd03").datetimepicker("setStartDate", end)
	});
	$("#datetimeEnd03").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month', 
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	})
	$(".type li").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find("img").attr("src","../img/multi_normal.png");
		}else{
			$(this).addClass("active");
			$(this).find("img").attr("src","../img/multi_selected.png");
		}
		
	})
	$(".item03 img").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).attr("src","../img/radio_normal.png");
		}else{
			$(this).addClass("active");
			$(this).attr("src","../img/redio_selected.png");
		}
		
	})
})