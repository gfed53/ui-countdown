//jshint esversion: 6

$(function(){
	
	// .format('MMMM Do YYYY, h:mm:ss a')
	
	var end = moment('2017-12-25','YYYY-MM-DD');

	console.log(end);

	function init(){
		var timeInterval = setInterval(()=>{
			var t = calcTimeRemaining(end);


			$('.test').html(`
				${t.days} days. ${t.hours} hours. ${t.minutes} minutes. ${t.seconds} seconds..
				`);
		}, 1000);
	}

	function calcTimeRemaining(endTime){
		var diff = endTime.diff(moment(), true),
			diffDays = Math.floor((diff/(1000*60*60*24))),
			diffHours = Math.floor((diff/(1000*60*60)) % 24),
			diffMins = Math.floor((diff/1000/60) % 60),
			diffSecs = Math.floor((diff/1000) % 60);

		return {
			'total': diff,
			'days': diffDays,
			'hours': diffHours,
			'minutes': diffMins,
			'seconds': diffSecs
		};
	}

	init();

	console.log(typeof diff);


});