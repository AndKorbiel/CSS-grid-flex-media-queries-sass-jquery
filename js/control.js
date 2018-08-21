$(document).ready(function() {

	$('#full').click(function() {
		$('.aside, .other-aside').fadeOut(500);
		$('main').css('grid-column', 'span 12');
		$('#f-2, #f-3, #f-4').removeClass('visible').fadeOut(500);
		$('input[name="n"]').each(function() {
			this.checked = false;
		});
		$('input[id="full"]').each(function() {
			this.checked = true;
		});
	});

	$('#one').click(function() {
		$('.aside').fadeIn(500);
		$('.other-aside, #f-3, #f-4').removeClass('visible').fadeOut(500);
		$('.aside').css('grid-column', 'span 2');
		$('main').css('grid-column', 'span 10');
		$('#f-2').fadeIn(500);
		$('input[name="n"]').each(function() {
			this.checked = false;
		});
		$('input[id="one"]').each(function() {
			this.checked = true;
		});

	});

		$('#onesix').click(function() {
			$('.aside').css('grid-column', 'span 2');
			$('main').css('grid-column', 'span 10');
		});

		$('#onefourth').click(function() {
			$('.aside').css('grid-column', 'span 3');
			$('main').css('grid-column', 'span 9');
		});

		$('#onethird').click(function() {
			$('.aside').css('grid-column', 'span 4');
			$('main').css('grid-column', 'span 8');
		});

	$('#both').click(function() {
		$('.aside, .other-aside').fadeIn(500);
		$('main').css('grid-column', 'span 8');
		$('.aside, .other-aside').css('grid-column', 'span 2');
		$('#f-2').fadeOut(100);
		$('#f-3, #f-4').addClass('visible').fadeIn(500);
		$('input[name="n"]').each(function() {
			this.checked = false;
		});
		$('input[id="both"], input[id="onesix-a"], input[id="onesix-b"] ').each(function() {
			this.checked = true;
		});

		if ($('#f-3').hasClass('visible')) {
			$('#f-3, #f-4').click(function() {

					if ($('#onesix-a').is(':checked') && $('#onesix-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 2');
						$('main').css('grid-column', 'span 8');
						$('.other-aside').css('grid-column', 'span 2');
					}
					else if ($('#onesix-a').is(':checked') && $('#onefourth-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 2');
						$('main').css('grid-column', 'span 7');
						$('.other-aside').css('grid-column', 'span 3');
					}

					else if ($('#onesix-a').is(':checked') && $('#onethird-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 2');
						$('main').css('grid-column', 'span 6');
						$('.other-aside').css('grid-column', 'span 4');
					}

					else if ($('#onefourth-a').is(':checked') && $('#onesix-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 3');
						$('main').css('grid-column', 'span 7');
						$('.other-aside').css('grid-column', 'span 2');
					}

					else if ($('#onefourth-a').is(':checked') && $('#onefourth-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 3');
						$('main').css('grid-column', 'span 6');
						$('.other-aside').css('grid-column', 'span 3');
					}

					else if ($('#onefourth-a').is(':checked') && $('#onethird-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 3');
						$('main').css('grid-column', 'span 5');
						$('.other-aside').css('grid-column', 'span 4');
					}

					else if ($('#onethird-a').is(':checked') && $('#onesix-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 4');
						$('main').css('grid-column', 'span 6');
						$('.other-aside').css('grid-column', 'span 2');
					}

					else if ($('#onethird-a').is(':checked') && $('#onefourth-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 4');
						$('main').css('grid-column', 'span 5');
						$('.other-aside').css('grid-column', 'span 3');
					}

					else if ($('#onethird-a').is(':checked') && $('#onethird-b').is(':checked')) {
						$('.aside').css('grid-column', 'span 4');
						$('main').css('grid-column', 'span 4');
						$('.other-aside').css('grid-column', 'span 4');
					}
				
			});
		};
	});

		
});