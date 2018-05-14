jQuery(document).ready(function( $ ) {
    if ( window.location.pathname.indexOf('operations') === 1 ) return;
    
    jQuery('.round.round-yes').click(function(){
        if(!jQuery(this).parent().parent().next().hasClass('positive') && !jQuery(this).parent().parent().hasClass('negative')){
            jQuery(this).parent().parent().next().addClass('positive');
            jQuery(this).addClass('active');
        }
    })
    
    
    jQuery('.round.round-no').click(function(){
        if(!jQuery(this).parent().parent().hasClass('negative') && !jQuery(this).parent().parent().next().hasClass('positive')){
            jQuery(this).parent().parent().addClass('negative');
            jQuery(this).addClass('active');
        }
    })
	
	
    jQuery('.round.round-then').click(function(){console.log(1);
       	 if(!jQuery(this).parent().parent().next().hasClass('positive')){
	     	jQuery(this).parent().parent().next().addClass('positive');
	        jQuery(this).addClass('active');
	     }
    })
    
    jQuery('.restart-button-pilot').click(function(){
        jQuery('.checklist-row.clearfix').removeClass('positive negative');
        jQuery('.checklist-row.clearfix:first').addClass('positive');
        jQuery('.round.round-no, .round.round-yes').removeClass('active');
        return false;
    });
    
});

