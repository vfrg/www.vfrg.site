
(function($){
$(document).ready(function(){
	
	var img = $('.wrapper-gallery > .mlg-preview').size();
	if(img < 3) {
	 $('.mlg-preview').css("width", "100%");
	 }
	
    
});
})(jQuery);


window.onload = function(){
	function isInternal(link){
		if (link.attr('href').indexOf(window.location.protocol +'//' + window.location.host) === 0 || 
			link.attr('href').indexOf('#') === 0 || 
			link.attr('href').indexOf('/') === 0 || 
			link.attr('href').indexOf('mailto') === 0 || 
			link.attr('href').indexOf('javascript') === 0 ||
			link.hasClass('share-popup') ) return true;
		else return false;
	}
	var links = $('a').filter(function(index){
		return !isInternal($(this))
	})
	$(links).attr('target', '_blank')


	$('a.share-popup').bind('click', sharePopup);
	function sharePopup(e){
		if ( e.preventDefault ) e.preventDefault();
		if ( e.returnValue ) e.returnValue = false;
		var h = window.innerHeight > 500 ? window.innerHeight : 500;
		var w = window.innerWidth > 700 ? window.innerWidth : 700;

		window.open($(this).attr('href'), $(this).attr('target'), 'height=' + 260 + ', width=' + 490 + ', top=' + (h - 260)/2 + ', left=' + (w - 490)/2 + ', toolbar=0, location=0, menubar=0, directories=0');
		return false
	}
}

