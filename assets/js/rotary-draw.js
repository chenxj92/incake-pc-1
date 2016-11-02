(function($, window, document) {

	$(function() {

		// 城市切换
		fnInitLocation();

		// 抽奖初始化
		fnInitLottery();
	});

	/**
	 * 抽奖初始化逻辑
	 * @return {[type]} [description]
	 */
	function fnInitLottery() {
		var $oContainer = $('#rotaryContainer'),
			$oInnerCircle = $oContainer.find('.inner-circle'),
			$oBtnLottery = $oContainer.find('.btn-lottery'),
			tl = new TimelineLite();

		$oBtnLottery.on('click', function() {

			// TODO 到后台拿到当前抽到的奖项，计算需要转动的角度
			var rotation = 40;

			tl.clear();
			tl.to($oInnerCircle, 0, {
				rotation: 0
			}).to($oInnerCircle, 8, {
				rotation: 360 * 10 + rotation,
				ease: Circ.easeInOut
			});
		});
	}

	/**
	 * 城市切换
	 * @return {[type]} [description]
	 */
	function fnInitLocation() {
		var $oRotaryHeader = $('#rotaryHeader'),
			$oBtnLocation = $oRotaryHeader.find('.btn-location'),
			$oDialogLocation = $oRotaryHeader.find('.dialog-location');

		// 城市切换dialog 显示/隐藏
		$oBtnLocation.hoverDelay({
             hoverDuring: 0, // 鼠标移入延时时间，单位ms
             outDuring: 200, // 鼠标移除延时时间，单位ms
             hoverEvent: function() { // 鼠标移入处理事件
                 $oDialogLocation.fadeIn();
             },
             outEvent: function() { // 鼠标移除处理事件
                 $oDialogLocation.fadeOut();
             }
         });

		// 城市切换
		$oDialogLocation.on('click', 'li', function() {
			$oBtnLocation.find('span').text($(this).text());
			$(this).addClass('active').siblings().removeClass('active');
			$oDialogLocation.fadeOut();
		});
	}

})(jQuery, window, document);