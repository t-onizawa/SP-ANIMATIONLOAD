
$.fn.extend ({
	styleSelect : function ( options ) {
		var targetSelect = this,
			targetOptions = targetSelect.find('option'),
			optionsLength = targetOptions.length;

		var $wrap = $('<div class="style-select-wrap">'),
			$head = $('<p class="style-select-head">'),
			$ul = $('<ul class="style-select">'),
			li = [];

		for ( var i = 0; i < optionsLength; i++ ) {
			var optionValue = targetOptions[i].value,
				optionText = targetOptions[i].innerHTML;
			li.push('<li><a href="javascript:void(0);" value="' + optionValue + '" class="style-option">' + optionText + '</a></li>');
		}
		$ul.html(li);
		$head.text(targetOptions[0].innerHTML);
		$wrap.append($head).append($ul);
		targetSelect.after($wrap);
		targetSelect.css('display', 'none');

		var $createdOption = $('.style-option');
		$createdOption.on('click', function () {
			var createdOptionValue = $(this).attr('value'),
				createdOptionText = $(this).text();

			$head.text(createdOptionText);
			targetOptions.removeAttr('selected');
			targetOptions.each(function () {
				if ( $(this).val() == createdOptionValue ) {
					$(this).attr('selected', 'selected');
				}
			});
			$(this).parent().parent($ul).fadeOut(100);
		});

		if ( options.mouseEventType == 'click' ) {
			$head.on('click', function () {
				var createdList = $(this).next($ul);
				if ( createdList.is(':hidden')) {
					if ( options.animationType == 'fade' ) {
						createdList.fadeIn(options.animationDuration);
					} else {
						createdList.slideDown(options.animationDuration);
					}
				} else {
					if ( options.animationType == 'fade' ) {
						createdList.fadeOut(options.animationDuration);
					} else {
						createdList.slideUp(options.animationDuration);
					}
				}
			});
		} else {
			$wrap.hover( function () {
				var createdList = $(this).find($ul);
				if ( $ul.is(':animated') ) {
					return;
				}
				if ( options.animationType == 'fade' ) {
					createdList.fadeIn(options.animationDuration);
				} else {
					createdList.slideDown(options.animationDuration);
				}
			},
			function () {
				
				var createdList = $(this).find($ul);
				if ( $ul.is(':animated') ) {
					return;
				}
				if ( options.animationType == 'fade' ) {
					createdList.fadeOut(options.animationDuration);
				} else {
					createdList.slideUp(options.animationDuration);
				}
			});
		}

		
	}
});



