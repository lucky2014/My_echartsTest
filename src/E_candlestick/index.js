define(function(require, exports, module) {
	var echarts = require('echarts');
	var $ = require('$');
	var optionSetting = require('src/E_candlestick/setOption');

	var myChart = echarts.init(document.getElementById('myChart'));

	function readerCharts(){
		var option = optionSetting.init();

		myChart.setOption(option);
	}

	readerCharts();

});