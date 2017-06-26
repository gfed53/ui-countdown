//jshint esversion: 6

$(function(){
	
	// .format('MMMM Do YYYY, h:mm:ss a')
	
	var end = moment('2017-12-25','YYYY-MM-DD');

	console.log(end);

	var current = moment();

	var diffDays = end.diff(current, 'days'),
		diffHours = end.diff(current, 'hours'),
		diffMins = end.diff(current, 'minutes'),
		diffSecs = end.diff(current, 'seconds');

	// console.log(diff);

	function init(){
		setInterval(()=>{
			current = moment();
			diffDays = end.diff(current, 'days'),
			diffHours = end.diff(current, 'hours'),
			diffMins = end.diff(current, 'minutes'),
			diffSecs = end.diff(current, 'seconds');
			$('.test').html(`
				${diffDays} days. ${diffHours} hours.
				`);
		}, 1000);
	}

	init();

	console.log(typeof diff);


});