$(document).ready(function(){
	if ($.cookie('buy_popup') != '1') {
		
		$('#myModal').modal('show');
		idleTime = 0;
		$('.close').on('click', function(){
			$('#myModal').modal('hide');
		});
		$.cookie('buy_popup', '1', { expires: 30 });
	}
});