var current_item = 0;
var section_hide_time = 1300;
var section_show_time = 1300;
jQuery(document).ready(function($) {
	$('li.nav-item').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
                        $(".navbar-collapse").collapse('hide');
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('li.nav-item').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $('a', current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});