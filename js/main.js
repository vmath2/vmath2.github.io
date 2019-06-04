$( document ).ready(function() {
    ga('send', 'pageview', new Date()) ;
});

$('#resume').click(function() {
	ga('send', 'event', 'header', 'click', 'resume') ;
})

$('#linked-in').click(function() {
	ga('send', 'event', 'header', 'click', 'linked-in') ;
})

$('#github').click(function() {
	ga('send', 'event', 'header', 'click', 'github') ;
})

$('#website').click(function() {
	ga('send', 'event', 'header', 'click', 'website') ;
})

$('#header-name').click(function() {
	ga('send', 'event', 'header', 'click', 'vaibhav raj mathur') ;
})

$('#email').click(function() {
	ga('send', 'event', 'header', 'click', 'email') ;
})

$('#tel-phone').click(function() {
	ga('send', 'event', 'header', 'click', 'tel-phone') ;
})

$('#sapientrazorfish').click(function() {
	ga('send', 'event', 'experience', 'click', 'sapientrazorfish') ;
})

$('#indianinstituteofmanagement').click(function() {
	ga('send', 'event', 'experience', 'click', 'indianinstituteofmanagement') ;
})
$('#drdo').click(function() {
	ga('send', 'event', 'experience', 'click', 'drdo') ;
})