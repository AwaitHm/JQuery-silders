(function($){
	var defaults = {
		sliderbutton : ".sliderbutton",
		num : ".num"
		
	}
	$.fn.silder = function(options){
		options = $.extend(defaults,options);
		$(options.sliderbutton).on('mousedown',function(event){
			var that = $(this),
				silderLength = that.parent().width() - that.width(),
				btnLeft = parseInt(that.css("left")),
			 	xcoordOne = event.pageX;
			window.onmousemove = function(event){
				var xcoordTwo = event.pageX,
					btnMoveLength = Math.min(silderLength,Math.max(0,btnLeft+(xcoordTwo-xcoordOne)));
				that.css("left",btnMoveLength +'px');
				$(options.num).text(btnMoveLength);
			};
			window.onmouseup = new Function ('window.onmousemove = null')	
		})	   
	}
	
})(jQuery)
