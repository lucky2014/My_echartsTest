(function(){
	var config = {
		base: "./",
		alias: {
			"$":"src/C_jquery/jquery-1.8.3.min",
			"echarts": "src/C_echarts/echarts", //图表
			"engine": "src/common.lib/setup/engine", //模板引擎
			"setup": "src/common.lib/setup/setup", //ajax配置
			"swiper": "src/common.swiper/swiper.min",
		}
	};

	seajs.config(config);
})();