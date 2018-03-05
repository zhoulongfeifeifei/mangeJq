$(function() {
	var flag;
	$(".personal-btn").click(function(){
		$(".chahua").fadeOut();	
	})
	$(".usermoney>ul>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
		flag=$(this).index();
		console.log(flag)
		$(".tablemain").find(".tablediv").eq(flag).show().siblings().hide()
	})
	$('#example01').DataTable({
		"ajax": "../json/personal.json",
		"columns": [{
			"data": "time"
		}, {
			"data": "qudao"
		}, {
			"data": "type"
		}, {
			"data": "yajinjine"
		}, {
			"data": "shichong"
		}, {
			"data": "fanchong"
		}, {
			"data": "hongbao"
		}, {
			"data": "zhuangtai"
		}, {
			"data": "dingdanhao"
		}, {
			"data": "caozuo"
		}],
		fnDrawCallback: function(table) {  
            $("#example01_paginate").append("<div class='tzPage'>到第<input style='height:28px;line-height:28px;width:40px;' class='margin text-center' id='changePage' type='text'> 页  <a class='btn btn-default shiny' style='margin-bottom:5px' href='javascript:void(0);' id='dataTable-btn'>确认</a></div>");  
            var oTable = $("#example01").dataTable();  
            $('#dataTable-btn').click(function(e) {  
                if($("#changePage").val() && $("#changePage").val() > 0) {  
                    var redirectpage = $("#changePage").val() - 1;  
                } else {  
                    var redirectpage = 0;  
                }  
                oTable.fnPageChange(redirectpage);  
            });  
        },  
		pageLength: 2,
		searching : false, //去掉搜索框方法一
        bFilter: false,   //去掉搜索框方法二
        bSort: false,  //禁止排序
         bLengthChange: false,
         pagingType:   "full_numbers",
         info: false 
	});
	$('#example02').DataTable({
		"ajax": "../json/personal.json",
		"columns": [{
			"data": "time"
		}, {
			"data": "yajinjine"
		}, {
			"data": "type"
		}],
		pageLength: 2,
		searching : false, //去掉搜索框方法一
        bFilter: false,   //去掉搜索框方法二
        bSort: false,  //禁止排序
         bLengthChange: false,
         pagingType:   "full_numbers",
         info: false 
	});
	$('#example03').DataTable({
		"ajax": "../json/personal.json",
		"columns": [{
			"data": "time"
		}, {
			"data": "yajinjine"
		}, {
			"data": "type"
		}, {
			"data": "zhuangtai"
		}],
		pageLength: 2,
		searching : false, //去掉搜索框方法一
        bFilter: false,   //去掉搜索框方法二
        bSort: false,  //禁止排序
         bLengthChange: false,
         pagingType:   "full_numbers",
         info: false 
	});
	$('#example04').DataTable({
		"ajax": "../json/personal.json",
		"columns": [{
			"data": "time"
		}, {
			"data": "yajinjine"
		}, {
			"data": "type"
		}, {
			"data": "zhuangtai"
		},{
			"data": "time"
		}, {
			"data": "yajinjine"
		}, {
			"data": "type"
		}, {
			"data": "zhuangtai"
		}, {
			"data": "zhuangtai"
		}],
		pageLength: 2,
		searching : false, //去掉搜索框方法一
        bFilter: false,   //去掉搜索框方法二
        bSort: false,  //禁止排序
         bLengthChange: false,
         pagingType:   "full_numbers",
         info: false 
	});
	$(".zhuangtai-term li").click(function(){
		if($(this).hasClass("active")){
			$(this).removeClass("active");
			$(this).find("img").attr("src","../img/radio_normal.png")
		}else{
			$(this).addClass("active").siblings().removeClass("active")
			$(this).find("img").attr("src","../img/redio_selected.png").parent().siblings().find("img").attr("src","../img/radio_normal.png")
		}
		
	})
})