
var buttonClick = document.getElementById('buttonClick');

var fild = document.getElementById('fild');
/*if(localStorage.getItem('name')!== '') {
		var nameText = localStorage.getItem('name');
		document.getElementById('fild').value = nameText;
	}

localStorage.setItem("name", fild.value);*/

var modal = document.querySelector('.modal');

var close = document.querySelector('.close');
close.addEventListener('click',function(){
	modal.style.display = 'none';
})
//document.getElementById("fild").value = localStorage.getItem("name");
//секундомер

var h4 = document.getElementById('stopwatch');

var ticks = 0;
var ticker = false;

 function formatTime(time) {
    if (time < 10) {
      return "0" + time
    } else {
      return time
    }
  }

function getReady() {
    var hours = Math.floor(ticks / 3600)
    var minutes = Math.floor((ticks - hours * 3600) / 60)
    var seconds = ticks - hours * 3600 - minutes * 60

   h4.innerHTML = formatTime(hours) + " : " + formatTime(minutes) + " : " + formatTime(seconds)
}

buttonClick.addEventListener('click', function(){
	if (buttonClick.innerHTML == "START") {
		buttonClick.innerHTML = "STOP";
		ticker = setInterval(() => {
			getReady()
			ticks += 1
			localStorage.setItem('time', ticks)

		},1000);
			hours = 0;
		minutes = 0;
    	seconds = 0;
        	localStorage.setItem('time', ticks)
	} else if (buttonClick.innerHTML == "STOP" && fild.value == '') {
		modal.style.display = 'block';
		clearInterval(ticker);
	} else if (buttonClick.innerHTML == "STOP" && fild.value !== '') {
		buttonClick.innerHTML = "START";
		ticks = 0;
		hours = 0;
		minutes = 0;
    	seconds = 0;
		clearInterval(ticker);
	}
})

if (localStorage.getItem('time') !== null) {
	var clockTimer = parseInt(localStorage.getItem('time'));
	ticks = clockTimer;
}

getReady();


// таблица -- результат
var counter = 1;
var valueTab = buttonClick.addEventListener('click', function(e) {
	var t = document.getElementById('t');

	if(buttonClick.innerHTML == "START" && fild.value !== ''){
		var row = t.insertRow();

		/*var target = e.target;
		if(target.tagName = 'button'){
		row.insertCell().innerHTML = counter;
		counter++;
		}*/ 
		var str = document.querySelectorAll('#t');
		//var tds = t.getElementsByTagName("tr");
			//if(tds = this.nodeName){
				//tds = tds.nextSibling;
				row.insertCell().innerHTML = counter;
				counter++;
			//}

		row.insertCell().innerHTML = fild.value;
		var now = new Date();
		/*function zero(n){
				return (n<10 ? '0' + n : n)
			}*/
		var timeNow = (now.getHours())+':'+(now.getMinutes())+':'+(now.getSeconds());
			row.insertCell().innerHTML = timeNow;
			var timeSeco = new Date();
			/*function zeroOn(n){
				if(n<10){
					return '0' + (0 + n + seconds) 
				}else{
					return (n<=9 ? '0' + n : n)
				}
				return  n
			}*/
			var minq = (now.getHours() + hours) +':'+(now.getMinutes() + minutes) +':'+(now.getSeconds() + seconds);
			row.insertCell().innerHTML = minq; //4
			//row.insertCell().innerHTML = "";
			row.insertCell().innerHTML = h4.textContent;

			row.insertCell().innerHTML = '<input type="button" value="INFO" id="info" />' ;
		
			row.insertCell().innerHTML = '<input type="button" value="DELETE" class="del" />';

			var del = document.getElementsByClassName('del');
			for (var i = 0; i < del.length; i++) {
				del[i].addEventListener('click', function() {
			     var trq = this.parentNode.parentNode;
			     trq.remove();
			     localStorage.setItem("item",document.getElementsByTagName('table')[0].innerHTML)
			   })
			}
		fild.value = "";
		localStorage.setItem('item', document.getElementsByTagName('table')[0].innerHTML)
	}
})
window.addEventListener('load', function(){
if(localStorage.getItem('item'))
document.getElementsByTagName('table')[0].innerHTML = localStorage.getItem('item')});



