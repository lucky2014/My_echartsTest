define(function(require, exports, module) {
	var echarts = require('echarts');
	var $ = require('$');
	var setOption = require('src/E_tutorialDynamicData/setOption');

	var myChart = echarts.init(document.getElementById('myChart'));
	//myChart.showLoading();

	function readerCharts(){
		var date = [];
		var data = [Math.random() * 15];
		var now = null;

		function addData(shift) {
		    now = [new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()].join(':'); //时间前没有置0
		    date.push(now);
		    data.push((Math.random() - 0.1) * 10 + data[data.length - 1]);

		    if (shift) {
		        date.shift();
		        data.shift();
		    }

		    now = new Date(+new Date(now) + 10000);
		}

		for (var i = 1; i <30; i++) { //初始化，显示数据
		    addData();
		}

		var option = setOption.init(data, date);

		myChart.setOption(option);
		

		setInterval(function () {
		    addData(true);
		    myChart.setOption({
		        xAxis: {
		            data: date
		        },
		        series: [{
		            name:'成交',
		            data: data
		        }]
		    });
		}, 1000);
	}

	readerCharts();
	//myChart.hideLoading();

});