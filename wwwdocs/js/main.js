jQuery(document).ready(function($) {
	$('#body-bg').click(function(){
		$('body').toggleClass('body-bg');
	});
	$('[class*="width"]').find('[class*="width"]').addClass('width-child');
	$('.width-child.float-right').removeClass('width-child').addClass('width-child-right');
	$('.width-child:last-child, .width-child-right:last-child, .local-places:nth-child(3n)').addClass('margin-none');

	//form da programação
	var botaoAbrir = $('#quer-palestrar');
	var botaoFechar = $('#quer-fechar');
	var form = $('#quer-palestrar-form');
	botaoAbrir.click(function(){ 
		form.animate({'right':'0px','opacity':'1'},700); //Animação para o menu aparecer
		//$(botao).animate({'left':'820px'},700); //Animação para o botão seguir o menu
		this.state='1'; //Mudança do estado no próximo clique no botão ele ficará escondido
		$(this).fadeOut();
		//$(this).html('Fechar formulário'); //mudança da imagem do botão no caso uma seta agora para a esquerda
		$('#quer-overlay').show().animate({'opacity':'0.9'});
	});
	botaoFechar.click(function(){ 
		//$('#overlay').fadeOut();
		form.animate({'right':'-320px','opacity':'0'},700); //Animação para o menu ficar escondido
		//$(botao).animate({'left':'0px'},700);//Animação para o botãoficar no canto da tela
		this.state='0'; //Mudança do estado no próximo clique no botão ele aparecerá
		//$(this).html('Quer palestrar? Clique aqui');//mudança da imagem do botão no caso uma seta agora para a direita
		botaoAbrir.fadeIn();
		$('#quer-overlay').animate({'opacity':'0'}).hide();
	});
	
	//funções da nav
	$('nav a').click(function(){
		var IDlimpa = $(this).attr('id').replace('-menu','');
		$('html, body').animate({
			scrollTop: $('#'+IDlimpa).offset().top
		}, 500);
	});
	$(window).scroll(function(){
		var objeto = 'section';
		var objetoID = $(objeto).attr('id');
		var altura = ($(objeto).height())+120;
		var quantoScroll = $(this).scrollTop();
		var scrollObjectOff = ($(objeto).offset().top)-60;
		if( quantoScroll>scrollObjectOff && quantoScroll<(altura+scrollObjectOff)){
			$('#'+objetoID+'-menu').addClass('active');
		} else {
			$('nav a').removeClass('active');
		}
	})
	
	//logo-yapc-sticky
	var logoYapcSticky = $('#logo-yapc-sticky');
	logoYapcSticky.hide();
	function logoYapcStickyFade(){
		if($('#nav-sticky-wrapper').hasClass('is-sticky')){
			logoYapcSticky.fadeIn('fast');
		} else {
			logoYapcSticky.fadeOut('fast');
		};
	};
	logoYapcStickyFade();
	$(window).scroll(logoYapcStickyFade);
	$(window).resize(logoYapcStickyFade);
	logoYapcSticky.click(function(){
		$('html, body').animate({scrollTop:0});
	});
	
	//chama o sticky
	$('header').sticky({ topSpacing: 0 });
});
