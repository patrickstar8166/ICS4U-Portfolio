function dateTime(){
	let x = new Date();
	let date = ('0' + (x.getMonth()+1)).slice(-2) + '/' + ('0' + x.getDate()).slice(-2) + '/'+ x.getFullYear();
	
	let hour = x.getHours();
  	let minute = x.getMinutes();
  	let second = x.getSeconds();
  	let ampm = hour >= 12 ? 'PM' : 'AM';
    
    hour %= 12;
  	if (hour == 0) hour = 12;

    let time = hour + ':' + ('0' + minute).slice(-2) + ':' + ('0' + second).slice(-2) + ' ' + ampm;

	document.getElementById("datetime").innerHTML = time + ',  ' + date;
}

function head(){
    setInterval(dateTime, 1000);
    let inner = `
        <div class="back"></div>
        <div class="front">
            <ul id="navbar">
                <li class="navelem" id="logo"><a href="index.html"><i class="fa fa-code" style="font-size:2em;"></i></a></li>
                <li class="navelem" id="clock"><a href="javascript:void(0)" id="datetime"></a></li>
                <li class="navelem" style="margin-right:40px;"><a href="about.html"><i class="icon fa fa-user-o"></i> About Me</a></li>
                <li class="navelem"><a href="bibliography.html"><i class="icon fa fa-book"></i> Bibliography</a></li>
                <li class="dropdown navelem">
                    <a href="javascript:void(0)" class="tutorials"><i class="icon fa fa-file-code-o"></i> Java <nobr>Tutorials <i class="fa fa-caret-down"></i></nobr></a>
                    <div class="dropdown-content"> 
                        <a href="oop.html">Intro to OOP</a>
                        <a href="inheritance.html">OOP: Inheritance</a>
                        <a href="arrays.html">Arrays</a>
                        <a href="arraylist.html">ArrayLists</a>
                        <a href="searchsort.html">Searching & Sorting</a>
                        <a href="recursion.html">Recursion</a>
                    </div>
                </li>
                <li class="navelem"><a href="index.html"><i class="icon fa fa-home"></i> Home</a></li>
            </ul>
        </div>`;
    document.getElementById("header").innerHTML = inner;
}

function foot(){
    let inner = `
    	<div class="back"></div>
    	<div class="front">
	        <h3 class="footelem" style="text-align:left; margin:1.6% 0% 0% 1%;">ICS4U Portfolio</h3>
	        <h4 class="footelem" style="text-align:center; margin-top:1.7%;">@2023 by Patrick Bian</h4>
	        <a class="footelem" href="mailto:patrick.bian@student.tdsb.on.ca" target="_blank" style="text-align:right; margin:1.7% 2% 0% 0%; color:white"><i class="fa fa-envelope"></i> Email Me</a>
	    </div>`   
    document.getElementById("footer").innerHTML = inner;
}