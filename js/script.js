$(document).ready(function(){
	$('#dem1').click(function(){
		$('#sel1').hide();
	});
	$('#dem2').click(function(){
		$('#sel1').show();
	});
	$('#dem3').click(function(){
		$('#sel1').toggle();
	})
	$('#dem4').hover(function(){
		$('.sel4').hide();
	});
	$('#dem5').hover(function(){
		$('#sel4').show();
	});
	$('#dem6').hover(function(){
		$('.sel4').toggle();
	});
	$('#dem7').click(function(){
	    $(this).hide();
	});
	$('#dem8').click(function(){
		$('p.trial1').hide();
	});
	$('#dem9').click(function(){
		$('p.trial1:first').show();
	});
	$('#dem10').click(function(){
		$('ul li:first').hide();
	});
	$('#dem11').click(function(){
		$('ul li:last-child').hide();
	});
	$('#dem12').click(function(){
		$('[href]').hide();
	});
	$('#dem13').click(function(){
    	$("a[target='_blank']").show();
  });
	$('#dem14').click(function(){
		$('#dem14').hide();
	})	;
	$('#dem15').click(function(){
		$('tr:odd').css('background-color','blue');
	});
	$('#dem16').click(function(){
		$('tr:even').css('background-color','red');
	});
	// $('#dem17').mouseenter(function(){
		// alert('put your mouse out of the text');
	// });
	$('#dem18').mouseleave(function(){
		$(this).css('color','green');
	});
	$('#dem19').mousedown(function(){
		$(this).css("color","red");
	});
	$('#dem20').mousedown(function(){
		$(this).css("color","blue");
	});
	$('input').focus(function(){
		$(this).css("background-color", "red");
	});
	$('input').blur(function(){
		$(this).css("background-color", "yellow");
	});
	$('#dem23').on({
		mouseenter: function(){
			$(this).css('font-size',"35px");
		},
		mousedown: function(){
			$(this).css('color', 'green');
		},
		click: function(){
			$(this).css('background-color','blue');
		}
	});
	$('#dem24').on("click" ,function(){
		$('#dem23').hide();
	});
	$('#dem25').click(function(){
		$('.fout').fadeOut();
		//$(this).fadeOut();
	});
	$('#dem26').click(function(){
		$('.fout').fadeIn();
	});
	$('#dem27').click(function(){
		$('.fout').fadeOut('slow');
	});
	$('#dem28').click(function(){
		$('.fout').fadeIn('fast');
	});
	$('#dem29').click(function(){
		$('.fout').fadeToggle();
	});
	$('#dem30').click(function(){
		$('.fout').fadeToggle(5000);
	});
	$('#dem31').click(function(){
		$('.fout').fadeTo("slow", 0.4);
	});
	$('#dem32').click(function(){
		$('#sel32').slideDown();
	});
	$('#dem33').click(function(){
		$('#sel32').slideUp();
	});
	$('#dem34').click(function(){
		$('#sel32').slideToggle();
	});
	$('#dem35').click(function(){
		$('#sel35').slideDown(7000);
	});
	$('#stop35').click(function(){
		$('#sel35').stop();
	});
	$('#dem36').click(function(){
		$('#demt').animate({left: '350px'});

	});
	$('#dem37').click(function(){
		$('#demt').animate({
	
			height: '20px',
			width: '10px'

			
		});
	});
	$('#dem38').click(function(){
		$('#demt').animate({
			height: '+=10px',
			width: '+=10px'
		});
	});
	$('#dem39').click(function(){
		$('#demt').animate({
			height: 'toggle'
		});
	});
	$('#dem40').click(function(){
		var dem_40 =$('.dem_40');
		dem_40.animate({height:'200px', width:'200px'});
		dem_40.animate({height:'200px', width:'20x'});
		dem_40.animate({height:'100px', width:'20px', opacity: '.5'});
		dem_40.animate({height:'200px', width:'200px'},'slow');
		
	});
	$('.sel41').click(function(){
		$('#dem41').hide(function(){
			alert('stop tapping');
		});
	})
	
});