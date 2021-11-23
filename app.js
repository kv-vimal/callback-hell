/** @format */

var img = document.createElement("img");

img.src = "https://static.toiimg.com/photo/70659282.cms";
img.alt = "Happy IndependenceDay";
img.setAttribute("Class", "img-fluid");

//Call back hell example
setTimeout(() => {
	//10
	document.getElementById("showCount").innerText = 10;
	setTimeout(() => {
		//9
		document.getElementById("showCount").innerText = 9;
		setTimeout(() => {
			//8
			document.getElementById("showCount").innerText = 8;
			setTimeout(() => {
				//7
				document.getElementById("showCount").innerText = 7;
				setTimeout(() => {
					//6
					document.getElementById("showCount").innerText = 6;
					setTimeout(() => {
						//5
						document.getElementById("showCount").innerText = 5;
						setTimeout(() => {
							//4
							document.getElementById("showCount").innerText = 4;
							setTimeout(() => {
								//3
								document.getElementById("showCount").innerText = 3;
								setTimeout(() => {
									//2
									document.getElementById("showCount").innerText = 2;
									setTimeout(() => {
										//1
										document.getElementById("showCount").innerText = 1;
										setTimeout(() => {
											document.getElementById("imgDiv").append(img);

											document.getElementById("counterDiv").innerHTML = "";
										}, 1000);
									}, 1000);
								}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);
