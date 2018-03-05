$(function() {
	$("#datetimeStart").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	});
	function red(changered){
		var mm = changered.html()
//		console.log(mm)
		var oLength = mm.length;
		var oBegin = mm.substring(0,oLength-2)
		var oEnd = mm.substring(oLength-2,oLength)
		changered.html(oBegin+"<b style='color:#ff7f83;'>"+oEnd+"</b>")
	}
	red($(".newuser"));
	red($(".newpay"));
	red($(".newyajin"));
	red($(".newbike"));
	red($(".yajinrefund"));
	red($(".payrefund"));
	red($(".yajinmore"));
	red($(".paymore"));
	red($(".alluser"));
	red($(".oneuser"));
	red($(".twouser"));
	red($(".threeuser"));
	$(".user>ul>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active")
	})
	$.ajax({
		type: "get",
		url: "../json/caiwu.json",
		async: true,
		success: function(data) {
			$(".load").fadeOut();
			var myCharts01 = echarts.init(document.getElementById('myCharts01'));
			var weixinchongzhi01 = data.zhexian.data01;
			var shijian01 = data.zhexian.x;
			option = {
				
				tooltip: {
					trigger: 'axis'
				},
				toolbox: {
					show: false,
					feature: {
						/*dataZoom: {
							yAxisIndex: 'none'
						},
						dataView: {
							readOnly: false
						},*/
						magicType: {
							show: true, type: ['line', 'bar', 'stack', 'tiled']
						},
						/*restore: {},*/
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: shijian01
				},
				yAxis: {
					type: 'value',
					axisLabel: {
						formatter: '{value} 元'
					}
				},
				series: [{
					name: '用户总数',
					type: 'line',
					 itemStyle : {  
                                normal : {  
                                    lineStyle:{  
                                        color:'#ff787c'  
                                    }  
                                }  
                            },  
					data: weixinchongzhi01,
					smooth:true
					
				}]
			};
			// 使用刚指定的配置项和数据显示图表。 
			myCharts01.setOption(option);
			
		}
	});
})