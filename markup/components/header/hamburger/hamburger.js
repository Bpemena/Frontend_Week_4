$(document).ready(function() {
		
		$('.hamburger').on('click',function(e){
			e.preventDefault();
			$(this).toggleClass('hamburger--active');
			$('.searchMobile').toggleClass('searchMobile--active');
			$('.navL').toggleClass('navL--active');
			$('.navR').toggleClass('navR--active');
		});
});