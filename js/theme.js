/*
================================================================
* Template:  	 Simone - Personal Portfolio Template
* Written by: 	 Harnish Design - (http://www.harnishdesign.net)
* Description:   Main Custom Script File
================================================================
*/

(function ($) {
	"use strict";contact-form

// Preloader
$(window).on('load', function () {
	$('.lds-ellipsis').fadeOut(); // will first fade out the loading animation
	$('.preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);
});


// Header Sticky
$(window).on('scroll',function() {
	var stickytop = $('#header.sticky-top .bg-transparent');
	var stickytopslide = $('#header.sticky-top-slide');
	
	if ($(this).scrollTop() > 1){  
		stickytop.addClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('sticky-logo'));
	}
	else {
		stickytop.removeClass("sticky-on-top");
		stickytop.find(".logo img").attr('src',stickytop.find('.logo img').data('default-logo'));
	}
	
	if ($(this).scrollTop() > 180){  
		stickytopslide.find(".primary-menu").addClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('sticky-logo'));
	}
	else{
		stickytopslide.find(".primary-menu").removeClass("sticky-on");
		stickytopslide.find(".logo img").attr('src',stickytopslide.find('.logo img').data('default-logo'));
	}
});

// Sections Scroll
if($("body").hasClass("side-header")){
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    var sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top}, 1500, 'easeInOutExpo');
});
   }else {
$('.smooth-scroll').on('click', function() {
	event.preventDefault();
    var sectionTo = $(this).attr('href');
	$('html, body').stop().animate({
      scrollTop: $(sectionTo).offset().top - 50}, 1500, 'easeInOutExpo');
});
}

// Mobile Menu
$('.navbar-toggler').on('click', function() {
	$(this).toggleClass('show');
});
$(".navbar-nav a").on('click', function() {
    $(".navbar-collapse, .navbar-toggler").removeClass("show");
});

// Overlay Menu & Side Open Menu
$('.navbar-side-open .collapse, .navbar-overlay .collapse').on('show.bs.collapse hide.bs.collapse', function(e) {
    e.preventDefault();
}),
$('.navbar-side-open [data-bs-toggle="collapse"], .navbar-overlay [data-bs-toggle="collapse"]').on('click', function(e) {
   e.preventDefault();
   $($(this).data('bs-target')).toggleClass('show');
})

/*---------------------------------
   Carousel (Owl Carousel)
----------------------------------- */
$(".owl-carousel").each(function (index) {typed-strings
    var a = $(this);
	if ($("html").attr("dir") == 'rtl') {
		var rtlVal = true
	}else{
		var rtlVal = false
    }
	$(this).owlCarousel({
		rtl: rtlVal,
		autoplay: a.data('autoplay'),
		center: a.data('center'),
		autoplayTimeout: a.data('autoplaytimeout'),
		autoplayHoverPause: a.data('autoplayhoverpause'),
		loop: a.data('loop'),
		speed: a.data('speed'),
		nav: a.data('nav'),
		dots: a.data('dots'),
		autoHeight: a.data('autoheight'),
		autoWidth: a.data('autowidth'),
		margin: a.data('margin'),
		stagePadding: a.data('stagepadding'),
		slideBy: a.data('slideby'),
		lazyLoad: a.data('lazyload'),
		navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		animateOut: a.data('animateout'),
		animateIn: a.data('animatein'),
		video: a.data('video'),
		items: a.data('items'),
		responsive:{
        0:{items: a.data('items-xs'),},
        576:{items: a.data('items-sm'),},
		768:{items: a.data('items-md'),},
        992:{items: a.data('items-lg'),}
        }
    });
});

/*------------------------------------
    Magnific Popup
-------------------------------------- */
// Image on Modal
$('.popup-img-gallery').each(function() {
$(this).magnificPopup({
    delegate: '.popup-img:visible',
	type: "image",
	tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    },
});
});

// Ajax On Modal 
$('.popup-ajax-gallery').each(function() {
$(this).magnificPopup({
	delegate: '.popup-ajax:visible',
    type: "ajax",
	tLoading: '<div class="preloader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>',
	mainClass: "mfp-fade",
	closeBtnInside: true,
	midClick: true,
	gallery: {
      enabled: true,
    },
	callbacks: {
		ajaxContentAdded: function() {
			$(".owl-carousel").each(function (index) {
			  var a = $(this);
			  if ($("html").attr("dir") == 'rtl') {
		var rtlVal = true
	}else{
		var rtlVal = false
    }
	$(this).owlCarousel({
		rtl: rtlVal,
				autoplay: a.data('autoplay'),
				center: a.data('center'),
				autoplayTimeout: a.data('autoplaytimeout'),
				autoplayHoverPause: a.data('autoplayhoverpause'),
				loop: a.data('loop'),
				speed: a.data('speed'),
				nav: a.data('nav'),
				dots: a.data('dots'),
				autoHeight: a.data('autoheight'),
				autoWidth: a.data('autowidth'),
				margin: a.data('margin'),
				stagePadding: a.data('stagepadding'),
				slideBy: a.data('slideby'),
				lazyLoad: a.data('lazyload'),
				navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
				animateOut: a.data('animateOut'),
				animateIn: a.data('animateIn'),
				video: a.data('video'),
				items: a.data('items'),
				responsive:{
					0:{items: a.data('items-xs'),},
					576:{items: a.data('items-sm'),},
					768:{items: a.data('items-md'),},
					992:{items: a.data('items-lg'),}
				}	
                });
            });
         }
    }
});
});

// YouTube/Viemo Video & Gmaps
$('.popup-youtube, .popup-vimeo, .popup-gmaps').each(function() {
$(this).magnificPopup({
        type: 'iframe',
		mainClass: 'mfp-fade',
});
});

/*------------------------------------
    Isotope Portfolio Filter
-------------------------------------- */
$(window).on('load', function () {
$(".portfolio-filter").each(function() {
    var e = $(this);
	e.imagesLoaded(function () {
	if ($("html").attr("dir") == 'rtl') {
		var rtlVal = false
	}else{
		var rtlVal = true;
    }
	var $grid = e.isotope({
			layoutMode: "masonry",
			originLeft: rtlVal
		});
	$(".portfolio-menu").find("a").on("click", function() {
        var filterValue = $(this).attr("data-filter");
        return $(".portfolio-menu").find("a").removeClass("active"), $(this).addClass("active"), 
		$grid.isotope({
          filter: filterValue
        }), !1
    });
	});
	});
});

/*------------------------------------
    Parallax Background
-------------------------------------- */
$(".parallax").each(function () {
$(this).parallaxie({
	speed: 0.5,
});
});

/*------------------------------------
    Counter
-------------------------------------- */
$(".counter").each(function () {
    $(this).appear(function () {
        $(this).countTo({
			speed: 1800,
		});
    });
});

/*------------------------------------
    Typed
-------------------------------------- */
$(".typed").each(function() {
var typed = new Typed('.typed', {
    stringsElement: '.typed-strings',
	loop: true,
	typeSpeed: 100,
    backSpeed: 50,
	backDelay: 1500,
});
});

/*------------------------------------
    YTPlayer YouTube Background
-------------------------------------- */

$(".player").each(function () {
    $(this).mb_YTPlayer();
});

/*------------------------
   tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/*------------------------
   Scroll to top
-------------------------- */
$(function () {
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 400) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').on("click", function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});

/*------------------------
   Contact Form
-------------------------- */
var form = $('#contact-form'); // contact form
var submit = $('#submit-btn'); // submit button

// form submit event
$("#contact-form").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbxx0wFjIl4bGGn2e1pEKSEs6kReSaMxWO5SrbQ9lOB9fQqaTQp6qgELAumim37JZpgbAg/exec",
		data:$("#contact-form").serialize(),
		method:"post",
		success:function (response){
			// alert("Form submitted successfully");
			$('.messegepass').html("<span style='color:#20c997'>Successfullly Mail Send</span>");
			if (response) {
				form.trigger('reset'); // reset form
			}
		},
			//window.location.href="https://google.com";
		error:function (err){
			alert("Something Error");

		}
	});
});
// ___________________________________________________________________
// form.on('submit', function (e) {
// 	e.preventDefault(); // prevent default form submit

// 	if (typeof $('#google-recaptcha-v3').val() != "undefined") {
// 		grecaptcha.ready(function () {
// 			var site_key = $('#google-recaptcha-v3').attr('src').split("render=")[1];
// 			grecaptcha.execute(site_key, {action: 'contact'}).then(function (token) {
// 				var gdata = form.serialize() + '&g-recaptcha-response=' + token;
// 				$.ajax({
// 					url: 'https://script.google.com/macros/s/AKfycbxx0wFjIl4bGGn2e1pEKSEs6kReSaMxWO5SrbQ9lOB9fQqaTQp6qgELAumim37JZpgbAg/exec',  // form action url
// 					type: 'POST', 		  // form submit method get/post
// 					dataType: 'json', 	  // request type html/json/xml
// 					data: gdata, 		  // serialize form data
// 					beforeSend: function () {
// 						submit.attr("disabled", "disabled");
// 						var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // change submit button text
// 						if (submit.html() !== loadingText) {
// 							submit.data('original-text', submit.html());
// 							submit.html(loadingText);
// 						}
// 					},
// 					success: function (data) {
// 						submit.before(data.Message).fadeIn("slow"); // fade in response data 
// 						submit.html(submit.data('original-text'));// reset submit button text
// 						submit.removeAttr("disabled", "disabled");
// 						if (data.response == 'success') {
// 							form.trigger('reset'); // reset form
// 						}
// 						setTimeout(function () {
// 							$('.alert-dismissible').fadeOut('slow', function(){
// 								$(this).remove();
// 							});
// 						}, 3000);
// 					},
// 					error: function (e) {
// 						console.log(e)
// 					}
// 				});
// 			});
// 		});
// 	} else {
// 		$.ajax({
// 			url: 'https://script.google.com/macros/s/AKfycbxx0wFjIl4bGGn2e1pEKSEs6kReSaMxWO5SrbQ9lOB9fQqaTQp6qgELAumim37JZpgbAg/exec', // form action url
// 			type: 'POST', // form submit method get/post
// 			dataType: 'json', // request type html/json/xml
// 			data: form.serialize(), // serialize form data
// 			beforeSend: function () {
// 				submit.attr("disabled", "disabled");
// 				var loadingText = '<span role="status" aria-hidden="true" class="spinner-border spinner-border-sm align-self-center me-2"></span>Sending.....'; // change submit button text
// 				if (submit.html() !== loadingText) {
// 					submit.data('original-text', submit.html());
// 					submit.html(loadingText);
// 				}
// 			},
// 			success: function (data) {
// 				submit.before(data.Message).fadeIn("slow"); // fade in response data 
// 				submit.html(submit.data('original-text'));// reset submit button text
// 				submit.removeAttr("disabled", "disabled");
// 				if (data.response == 'success') {
// 					form.trigger('reset'); // reset form
// 				}
// 				setTimeout(function () {
// 					$('.alert-dismissible').fadeOut('slow', function(){
// 						$(this).remove();
// 					});
// 				}, 3500);
// 				if (typeof $('#recaptcha-v2').val() != "undefined") {
// 					grecaptcha.reset(); // reset reCaptcha
// 				}
// 			},
// 			error: function (e) {
// 				console.log(e)
// 			}
// 		});
// 	}
// });

})(jQuery)
// time
function displayTime(){
	var dateTime = new Date();
	var hour = dateTime.getHours();
	var minutes = dateTime.getMinutes();
	var second = dateTime.getSeconds();
	var session = document.getElementsByClassName("session");
	//date
	var day = dateTime.getDay();
	var month = dateTime.getMonth();
	var year = dateTime.getFullYear();
	if(hrs >= 12){
		session.innerHTML="PM";
	}else{
		session.innerHTML="AM";
	}
    if (hour == 0) {
    hour = 12;
	}
	if(hour > 12){
		hour = hour - 12;
	}
if(hour <= 9){
hour = "0"+hour;
}
if(second <= 9 ){
	second = "0"+second;
	}

	document.getElementById("hrs").innerHTML = hour;
	document.getElementById("min").innerHTML = minutes;
	document.getElementById("sec").innerHTML = second;
} 
setInterval(displayTime(),1000);

// function updateClock(){
// 	var now = new Date();
// 	var dname = now.getDay(),
// 		mo = now.getMonth(),
// 		dnum = now.getDate(),
// 		yr = now.getFullYear(),
// 		hou = now.getHours(),
// 		min = now.getMinutes(),
// 		sec = now.getSeconds(),
// 		pe = "AM";
		
// 		if(hou >= 12){
// 		  pe = "PM";
// 		}
// 		if(hou == 0){
// 		  hou = 12;
// 		}
// 		if(hou > 12){
// 		  hou = hou - 12;
// 		}

// 		Number.prototype.pad = function(digits){
// 		  for(var n = this.toString(); n.length < digits; n = 0 + n);
// 		  return n;
// 		}

// 		var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
// 		var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// 		var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
// 		var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
// 		for(var i = 0; i < ids.length; i++)
// 		document.getElementById(ids[i]).firstChild.nodeValue = values[i];
//   }

//   function initClock(){
// 	updateClock();
// 	window.setInterval(updateClock(), 1000);
//   }