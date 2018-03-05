$(function() {
	
	$("#datetimeStart").datetimepicker({
		format: 'yyyy-mm-dd',
		minView: 'month',
		endDate: new Date(),
		language: 'zh-CN',
		autoclose: true
	});
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
	var myChart = echarts.init(document.getElementById('myChart'));
	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		title: {
			text: '当日数据',
			subtext: '2000000.00',
			fontSize: '30',
			x: 'center',
			y: 'center'
		},
		//		legend: {
		//			orient: 'vertical',
		//			x: 'left',
		//			data: ['开不了锁', '无法结束行程', '退余额', '退押金', '支付宝扫码','常规咨询', '单车故障', '未开始计费', '忘记锁车', '其他共享单车','其他']
		//		},
		color: ['#58F2E8', '#40efae', '#4ad348', '#21d2ff', '#38afff', '#e347f2', '#ee67aa', '#f9ac78', '#f78b6f', '#f36e69', '#4468da'],
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: ['50%', '70%'],
			avoidLabelOverlap: false,
			label: {
				normal: {
					show: false,
					position: 'center'
				},
				emphasis: {
					show: false,
					textStyle: {
						fontSize: '14',
						fontWeight: 'bold'
					}
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 335,
				name: '开不了锁'
			}, {
				value: 310,
				name: '无法结束行程'
			}, {
				value: 234,
				name: '退余额'
			}, {
				value: 135,
				name: '退押金'
			}, {
				value: 1548,
				name: '支付宝扫码'
			}, {
				value: 335,
				name: '常规咨询'
			}, {
				value: 310,
				name: '单车故障'
			}, {
				value: 234,
				name: '未开始计费'
			}, {
				value: 135,
				name: '忘记锁车'
			}, {
				value: 1548,
				name: '其他共享单车'
			}, {
				value: 1548,
				name: '其他'
			}]
		}]
	};

	// 使用刚指定的配置项和数据显示图表。 
	myChart.setOption(option);
	$("#bianji").click(function(){
		$('.editlabel').fadeIn();
		$("#zhaohui").click(function(){
			$('.addlaber').fadeIn();
			$("#close").click(function(){
				$(".addlaber").fadeOut()
			})
		})
	})
	$('#new-addition').click(function(){
		$('.signature').fadeIn();
		$('.lower-yes').click(function(){
			$(".signature").fadeOut()
		})
		$("#close").click(function(){
			$(".signature").fadeOut()
		})
	})
})