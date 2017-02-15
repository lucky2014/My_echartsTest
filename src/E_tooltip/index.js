define(function(require, exports, module) {
	var echarts = require('echarts');
	var $ = require('$');
	var setOption = require('src/E_tooltip/setOption');

	var myChart = echarts.init(document.getElementById('myChart'));
	var app = {};

	function readerMap(){
        $.get('src/C_echarts/map/china.json', function (chinaJson) {
	        echarts.registerMap('china', chinaJson);

	        myChart.clear();
	        myChart.setOption(setOption.init()); //data,layoutSize,layoutCenter

	        app.currentIndex = -1;
			setInterval(function () {
			    var dataLen = setOption.data.length;
			    // 取消之前高亮的图形
			    myChart.dispatchAction({
			        type: 'downplay',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			    app.currentIndex = (app.currentIndex + 1) % dataLen;
			    //alert(app.currentIndex);
			    // 高亮当前图形
			    myChart.dispatchAction({
			        type: 'highlight',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			    // 显示 tooltip
			    myChart.dispatchAction({
			        type: 'showTip',
			        seriesIndex: 0,
			        dataIndex: app.currentIndex
			    });
			}, 2000);	       
	    });
	}

	readerMap();



});