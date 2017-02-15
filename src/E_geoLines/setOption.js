define(function(require, exports, module) {
	var mapApp = {
	    init: function(data,layoutSize,layoutCenter){
	        var me = this;
	        data = me.data;
	        return {
	            backgroundColor: '#202b33',
	            title: {
	                show: false
	            },
	            tooltip: {
	                trigger: 'item',
	                formatter: function (params) {
	                    //console.log(JSON.stringify(params,null,2));
	                    return params.name + '： <br /> ' + params.value[2] + "kW/"+params.data.power+"kWp";
	                },
	                backgroundColor:"#357a69",
	                borderColor: "#1fd1cb",
	                borderWidth: 1
	            },
	            grid: {
	                left:0,
	                top:0,
	                bottom:0,
	                right:0
	            },
	            layoutCenter: layoutCenter || ["50%", "50%"],
	            // 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
	            layoutSize: layoutSize || 530,
	            legend: {
	                orient: 'vertical',
	                y: 'top',
	                x:'right',
	                data:['pm2.5'],
	                textStyle: {
	                    color: '#fff'
	                },
	                show: false
	            },
	            roam: true,
	            visualMap: {
	                min: 0,
	                max: 400000,
	                calculable: true,
	                left: '10',
	                top: 20,
	                inRange: {
	                    color: ['#2f8cea', '#28ddad', '#35d32d']
	                },
	                textStyle: {
	                    color: '#fff'
	                }
	            },
	            geo: {
	                map: 'china',
	                label: {
	                    emphasis: {
	                        show: false
	                    }
	                },
	                //roam: true,
	                itemStyle: {
	                    normal: {
	                        areaColor: '#2d4455',
	                        borderColor: '#202b33'
	                    },
	                    emphasis: {
	                        areaColor: '#2d4455'
	                    }
	                }
	            },
	            series: [
	                {
	                    name: 'pm2.5',
	                    type: 'effectScatter',
	                    coordinateSystem: 'geo',
	                    data: me.data,
	                    symbolSize: 6,
	                    label: {
	                        normal: {
	                            show: false
	                        },
	                        emphasis: {
	                            show: false
	                        }
	                    },
	                    itemStyle: {
	                        emphasis: {
	                            borderColor: '#fff',
	                            borderWidth: 1
	                        }
	                    },
	                    rippleEffect: {
	                    	brushType: "stroke",
	                    	scale: "2",
	                    	period: 1000
	                    }
	                }
	            ]
	        }
	    },
	    data: [  //mock数据
	        {
	          "name": "维信诺光伏电站",
	          "value": [
	            120.90516071,
	            31.33333695,
	            "1144337.91"
	          ],
	          "power": "18973.0"
	        },
	        {
	          "name": "闵行科委",
	          "value": [
	            121.37276235,
	            31.10658398,
	            "15375.84"
	          ],
	          "power": "156.0"
	        },
	        {
	          "name": "福联电子光伏电站",
	          "value": [
	            121.012379,
	            31.311739,
	            "248537.34"
	          ],
	          "power": "5718.0"
	        },
	        {
	          "name": "昆山德国工业园绿色孵化基地光伏电站",
	          "value": [
	            120.97187,
	            31.297468,
	            "618405.81"
	          ],
	          "power": "22040.0"
	        },
	        {
	          "name": "贝尔诺电站#1",
	          "value": [
	            121.371094,
	            30.223215,
	            "23496.43"
	          ],
	          "power": "103.0"
	        },
	        {
	          "name": "国置精密机械光伏电站",
	          "value": [
	            121.025749,
	            31.262733,
	            "114689.35"
	          ],
	          "power": "4564.0"
	        },
	        {
	          "name": "鑫莹蕾光伏电站",
	          "value": [
	            120.980737,
	            31.385598,
	            "140940.81"
	          ],
	          "power": "14705.0"
	        },
	        {
	          "name": "来田办公楼9户",
	          "value": [
	            117.486306,
	            30.210313,
	            "11106.57"
	          ],
	          "power": "1046.0"
	        },
	        {
	          "name": "库山60KW",
	          "value": [
	            117.372571,
	            30.143157,
	            "49230.87"
	          ],
	          "power": "2189.0"
	        },
	        {
	          "name": "西柏村60KW",
	          "value": [
	            117.360443,
	            30.165042,
	            "20772.9"
	          ],
	          "power": "987.0"
	        },
	        {
	          "name": "梓丰村60KW",
	          "value": [
	            117.304291,
	            30.299404,
	            "27115.31"
	          ],
	          "power": "856.0"
	        },
	        {
	          "name": "九步村60KW",
	          "value": [
	            117.256966,
	            30.237846,
	            "22614.83"
	          ],
	          "power": "1380.0"
	        },
	        {
	          "name": "来田村60KW村级电站",
	          "value": [
	            117.235092,
	            30.243889,
	            "33443.07"
	          ],
	          "power": "71.0"
	        },
	        {
	          "name": "安源村120KW",
	          "value": [
	            109.677364,
	            33.579683,
	            "53028.42"
	          ],
	          "power": "2426.0"
	        },
	        {
	          "name": "杏溪村级电站60KW",
	          "value": [
	            117.426247,
	            30.207468,
	            "21306.9"
	          ],
	          "power": "1012.0"
	        },
	        {
	          "name": "矶滩60KW",
	          "value": [
	            117.441544,
	            30.265638,
	            "32675.92"
	          ],
	          "power": "0.0"
	        },
	        {
	          "name": "太康120KW户用电站",
	          "value": [
	            117.444336,
	            30.26112,
	            "34858.04"
	          ],
	          "power": "2201.0"
	        },
	        {
	          "name": "昆山万利机械光伏电站",
	          "value": [
	            120.945932,
	            31.441614,
	            "79214.89"
	          ],
	          "power": "7822.0"
	        },
	        {
	          "name": "昆山好家居光伏电站",
	          "value": [
	            120.923198,
	            31.395077,
	            "145987.05"
	          ],
	          "power": "11823.0"
	        },
	        {
	          "name": "锦溪佳途光伏电站",
	          "value": [
	            120.980737,
	            31.385598,
	            "93128.87"
	          ],
	          "power": "5874.0"
	        },
	        {
	          "name": "科瑞泰克#1光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "9061.34"
	          ],
	          "power": "2181.0"
	        },
	        {
	          "name": "科瑞泰克#2光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "8745.03"
	          ],
	          "power": "1953.0"
	        },
	        {
	          "name": "科瑞泰克#3光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "9009.05"
	          ],
	          "power": "2100.0"
	        },
	        {
	          "name": "科瑞泰克#4光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "8604.56"
	          ],
	          "power": "2096.0"
	        },
	        {
	          "name": "科瑞泰克#5光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "9299.9"
	          ],
	          "power": "2198.0"
	        },
	        {
	          "name": "科瑞泰克#6光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "8933.64"
	          ],
	          "power": "2139.0"
	        },
	        {
	          "name": "科瑞泰克#7光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "9223.87"
	          ],
	          "power": "2058.0"
	        },
	        {
	          "name": "科瑞泰克#8光伏电站",
	          "value": [
	            120.922933,
	            31.453475,
	            "9104.72"
	          ],
	          "power": "2226.0"
	        },
	        {
	          "name": "昆山鸿永盛光伏电站",
	          "value": [
	            120.949738,
	            31.446817,
	            "168583.82"
	          ],
	          "power": "31099.0"
	        },
	        {
	          "name": "金山市场有限公司",
	          "value": [
	            121.213229,
	            30.788905,
	            "103633.49"
	          ],
	          "power": "25153.0"
	        }
	    ]
	    
	};

	module.exports = mapApp;
});