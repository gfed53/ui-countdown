//jshint esversion: 6

$(function(){
	
	// .format('MMMM Do YYYY, h:mm:ss a')
	let $main = $('#main');
	
	let end = moment('2017-12-25','YYYY-MM-DD');

	console.log(end);

	let durations = [2000,3000,4000,5000,6000,7000];

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

		blurLoop();
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

	let isLooping = false;

	function blurLoop(){
		console.log('blurLoop start');
		let interval = setInterval(()=>{
			if(!isLooping){
				console.log('blurLoop inner execution');
				let length = durations[Math.floor(Math.random()*durations.length)];
				blurRound(length);
			}
		}, 1000);
	}

	function blurRound(length){
		console.log('blurRound start. length:',length);
		isLooping = true;
		let blurOuter = setTimeout(()=>{
			console.log('blurOuter timeout end');
			blurEffect(()=>{
				clearTimeout(blurOuter);
				isLooping = false;
			});
		}, length);
	}

	function blurEffect(cb){
		console.log('blurEffect start');
		$main.addClass('blur');
		let blurInner = setTimeout(()=>{
			$main.removeClass('blur');
			clearTimeout(blurInner);
			cb();
		}, 1000);
		
	}

	init();

	console.log(typeof diff);


});