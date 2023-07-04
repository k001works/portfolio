 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	// userAgent
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


// stellar
	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();


	// scroll
	var scrollWindow = function() {
		var navbar = $('.ftco_navbar');
		if ( !navbar.hasClass('navbar-static') ) {
			$(window).scroll(function(){
				var $w = $(this),
						st = $w.scrollTop(),
						sd = $('.js-scroll-wrap');

				if ( !navbar.hasClass('navbar-static') ) {
					if (st > 150) {
						if ( !navbar.hasClass('scrolled') ) {
							navbar.addClass('scrolled');	
						}
					} 
					if (st < 150) {
						if ( navbar.hasClass('scrolled') ) {
							navbar.removeClass('scrolled sleep');
						}
					} 
					if ( st > 350 ) {
						if ( !navbar.hasClass('awake') ) {
							navbar.addClass('awake');	
						}
						if(sd.length > 0) {
							sd.addClass('sleep');
						}
					}
					if ( st < 350 ) {
						if ( navbar.hasClass('awake') ) {
							navbar.removeClass('awake');
							navbar.addClass('sleep');
						}
						if(sd.length > 0) {
							sd.removeClass('sleep');
						}
					}
				}
			});

		} else {
			if ( !navbar.hasClass('scrolled') ) {
				navbar.addClass('scrolled');	
			}
			if ( !navbar.hasClass('awake') ) {
				navbar.addClass('awake');	
			}
		}
	};
	scrollWindow();

// waypoint
	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
				}, 100);
			}
		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });

		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
	};
	OnePageNav();

	$(".nav-menu-btn").click(function () {
		$(this).toggleClass('active');
		$("#ftco-nav").toggleClass('show');
	});
	
	$("#ftco-nav a").click(function () {
		$(".nav-menu-btn").removeClass('active');
		$("#ftco-nav").removeClass('show');
	});

	
	// modaal
	$(".gallery").modaal({
		type: 'image',
		overlay_close:true,
		before_open:function() {
			$('html').css('overflow-y', 'hidden');
		},
		after_close:function() {
			$('html').css('overflow-y','scroll');
		}
	});


	// ページトップボタン
	function PageTopAnimate() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200) {
			$('#page-top').removeClass('DownMove');
			$('#page-top').addClass('UpMove');
		} else {
			if($('#page-top').hasClass('UpMove')) {
				$('#page-top').removeClass('UpMove');
				$('#page-top').addClass('DownMove');
			}
		}
	}
	
	$(window).scroll(function() {
		PageTopAnimate();
	});

	$('#page-top a').click(function() {
			$('body, html').animate({
					scrollTop: 0
			}, 100);
			return false;
	});

})(jQuery);
