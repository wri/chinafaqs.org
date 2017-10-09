/**
 * Javascript functions
 * by Giovanni Glass
 * for WRI
 * Copyright 2009 All Rights Reserved
 * momendo AT gmail dot com
 * http://www.giovanniglass.com
 *
 */
$(document).ready(function() {
	// remove yellow border on tabber if empty
	joe.timer = setInterval(function() { // sharethis slows us down, so we have to wait
		if ($('ul.tabbernav:not(:has(*))').size()) {
			$('div#tabs').hide();
			$('div#right div#right_bl:first').css('margin-top', '0');
		}
	}, 100);
	setTimeout('clearInterval(joe.timer)', 10000); // kill the interval after awhile
	
	$('div.related-posts:first > .gray-bar').hide();
});

(function() {
	var joe = window.joe = new Object();

	/**
	 * Reset all fields in a form.
	 */
	joe.formAlter = joe.prototype = {
		reset : function(obj) {
			$(obj).parent().parent().parent().each(function() {
				// Clear all of the text inputs
				$(this).find(".views-exposed-widget #edit-keys").each(function(n, element) { 
					$(element).val('');
				});

				// Deselect everything
				$(this).find(".views-exposed-widget select option").attr('selected', '').removeAttr('selected');

				// Uncheck everything
				$(this).find(".views-exposed-widget input[type=checkbox]").attr('checked', false);
			});
		}
	}
})();