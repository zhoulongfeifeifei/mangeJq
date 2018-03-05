$(function(){
	var map = new AMap.Map("container", {
		resizeEnable : true,
		center: [120.15507, 30.274085],//地图中心点
		zoom : 10
	// 地图显示的缩放级别
	});
	map.plugin([ 'AMap.ToolBar'],function(){
		// 设置地位标记为自定义标记
		var toolBar = new AMap.ToolBar();
		map.addControl(toolBar);
	})
	map.plugin([ "AMap.Scale" ], function() { // 加载比例尺插件
		scale = new AMap.Scale();
		map.addControl(scale);
		scale.show();
	})
	// 信息窗体的创建与设定
	var infowindow = new AMap.InfoWindow({
		content : '<h3>高德地图</h1><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
		offset : new AMap.Pixel(0, -30),
		size : new AMap.Size(230, 0)
	});
})