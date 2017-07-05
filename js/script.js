//jshint esversion: 6

$(function(){
	
	let $main = $('#main'),
		end = moment('2017-12-25','YYYY-MM-DD'),
		durations = [2000,3000,4000,5000,6000,7000],
		isLooping = false;

	function init(){
		let timeInterval = setInterval(()=>{
			let t = calcTimeRemaining(end);

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
		for(let i = 1; i<5; i++){
			$('.countdown span:nth-child('+i+')').velocity({
				opacity: 1
			},{
				duration: 50,
				delay: 1000*i
			});
		}
	}

	//Create interval that blurs and sharpens periodically

	function blurLoop(){
		let interval = setInterval(()=>{
			if(!isLooping){
				let length = durations[Math.floor(Math.random()*durations.length)];
				blurRound(length);
			}
		}, 1000);
	}

	function blurRound(length){
		isLooping = true;
		let blurOuter = setTimeout(()=>{
			blurEffect(()=>{
				clearTimeout(blurOuter);
				isLooping = false;
			});
		}, length);
	}

	function blurEffect(cb){
		$main.addClass('blur');
		let blurInner = setTimeout(()=>{
			$main.removeClass('blur');
			clearTimeout(blurInner);
			cb();
		}, 500);
		
	}

	init();


});