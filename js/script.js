//jshint esversion: 6

$(function(){
	
	// .format('MMMM Do YYYY, h:mm:ss a')
	
	let end = moment('2017-12-25','YYYY-MM-DD');

	console.log(end);

	function init(){
		let timeInterval = setInterval(()=>{
			let t = calcTimeRemaining(end);
			// $('.countdown').html(`
			// 	<span class="cd-days">${t.days} days.</span> <span>${t.hours} hours.</span> <span>${t.minutes} minutes.</span> <span>${t.seconds} seconds..</span>
			// 	`);

			$('.countdown span:nth-child(1)').html(`${t.days} days.`);
			$('.countdown span:nth-child(2)').html(`${t.hours} hours.`);
			$('.countdown span:nth-child(3)').html(`${t.minutes} minutes.`);
			$('.countdown span:nth-child(4)').html(`${t.seconds} seconds.`);

			
			if(t.total <= 0){
				clearInterval(timeInterval);
			}
		}, 1000);

		display();
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

	function display(){
		//Refactor into loop?
		$('.countdown span:nth-child(1)').velocity({
			opacity: 1
		},{
			duration: 50,
			delay: 1000
		});
		$('.countdown span:nth-child(2)').velocity({
			opacity: 1
		},{
			duration: 50,
			delay: 2000
		});
		$('.countdown span:nth-child(3)').velocity({
			opacity: 1
		},{
			duration: 50,
			delay: 3000
		});
		$('.countdown span:nth-child(4)').velocity({
			opacity: 1
		},{
			duration: 50,
			delay: 4000
		});
	}

	//Create interval that blurs and sharpens periodically
	function blurFull(){
		let blurInterval = setInterval(()=>{
			//
		}, 5000);
	}

	function blurEffect(){
		
	}

	init();

	console.log(typeof diff);


});