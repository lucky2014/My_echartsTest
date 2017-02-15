define(function(require, exports, module) {
	var mapApp = {
	    init: function(data,date){
	        var me = this;
	        return {
			    title: {
	                text: "成交",
	                left: "center",
	                textBaseline: "top",
	                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontWeight: 'normal',
	                    fontSize: 14,
	                    color: '#27bb77',
	                },
	                subtext: "subtext",
	                padding: [18,0,0,0]
	            },
	            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                fontWeight: 'normal',
	                fontSize: 12,
	                color: '#09787d'
	            },
	            tooltip : {
	                trigger: 'axis',
	                formatter : function (params) {
	                    //console.log(JSON.stringify(params,null,2));
	                    return (params[0].value) ? params[0].seriesName + ' : ' + me.format(params[0].value*1000) +"Wh" : params[0].seriesName +" : 0Wh";
	                 }
	            },
	            legend: {
	                data:['成交'],
	                //show: false
	            },
	            color: ["#5bb39e"], //区域的颜色
	            toolbox: {
	                show: false
	            },
	            grid: {
	                left: '1%',
	                right: '3%',
	                bottom: '5%',
	                top: '22%',
	                containLabel: true
	            },
	            xAxis: {
	            	name: "时间",
			        boundaryGap: false, //渲染与grid之间的间隔
			        type : 'category',
	                name:'',
	                nameGap:1,
	                axisLine: {
	                    lineStyle: {
	                        color: ['#f60']
	                    }
	                },
			        data: date
			    },
			    yAxis: {
			    	name: "kWh",
			        boundaryGap: [0, '50%'],
			        type: 'value',
			        nameGap:5,
	                splitLine:{ //Y轴分割线
	                    show: true,
	                    interval: "auto",
	                    lineStyle: {
	                        color: ['#06c']
	                    }
	                },
	                axisLine: {
	                    lineStyle: {
	                        color: ['#09787d']
	                    }
	                }
			    },
			    series: [
			        {
			            name:'成交',
			            type:'line',
			            smooth:true,
			            symbol: 'none',
			            stack: 'a',
			            areaStyle: {
			                normal: {}
			            },
			            data: data
			        }
			    ]
			};
	    },
	    format: function(num){
	    	return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'); //数值千分位显示
	    }
	};

	module.exports = mapApp;
});