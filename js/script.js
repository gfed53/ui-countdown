//jshint esversion: 6

$(function(){
	
	// .format('MMMM Do YYYY, h:mm:ss a')
	
	let end = moment('2017-12-25','YYYY-MM-DD');

	console.log(end);

	function init(){
		let timeInterval = setInterval(()=>{
			let t = calcTimeRemaining(end);
			$('.countdown').html(`
				${t.days} days. ${t.hours} hours. ${t.minutes} minutes. ${t.seconds} seconds..
				`);
			
			if(t.total <= 0){
				clearInterval(timeInterval);
			}
		}, 1000);
	}

	function calcTimeRemaining(endTime){
		let diff = endTime.diff(moment(), true),
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