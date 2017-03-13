function shuffleArray(array) {
	 let m = array.length, t, i;
	 // While there remain elements to shuffle…
	 while (m) {
	 // Pick a remaining element…
	 i = Math.floor(Math.random() * m--);
	 // And swap it with the current element.
	 t = array[m];
	 array[m] = array[i];
	 array[i] = t;
	 }
	 return array;
}



quiz_element = document.getElementById("quiz");

function setQuiz(a) { // quiz template // a er notað til þess að vita hvaða spurningu er verið að nota
	if (a==spurningar.length)
	{
		quiz_element.innerHTML = "Wrong Answers = "+wrong_count+", Correct Answers = "+correct_count
	}
	else {
		kid_element = quiz_element.children

		// Display Spurning
		kid_element[0].innerHTML = ""
		kid_element[0].appendChild(document.createTextNode(spurningar[a].spurning));

		// fyrir alla moguleika í svar moguleika
		kid_element[1].innerHTML = ""
		for (var i =  0; i <= spurningar[a].svarMoguleikar.length-1; i++) {
			kid_element[1].innerHTML += "<button style='width:150px'>"+spurningar[a].svarMoguleikar[i] + "</button>";
			// breika eftir hvert 2 svarmoguleika
			if (i%2==1)
			{	
				kid_element[1].innerHTML += "<br>"
			}
			
		}
		kid_element[3].innerHTML = ""
		//kid_element[3].innerHTML += "correct answere = "+spurningar[a].svarMoguleikar[spurningar[a].rettSvar];

	}
	

}



var spurningar = [
	{
		spurning: "hver leikur Iron man?",
		svarMoguleikar: ["Leonardo Dicaprio", "Ropert Downie JR", "Michael Fastbender"],
		rettSvar: 1		
	},
	{
		spurning: "hvad er 5*5?",
		svarMoguleikar: ["22", "25", "3", "13"],
		rettSvar: 1
	}
]
// ná í div Elementið þar sem við ætlum að setja quizið


shuffleArray(spurningar)


a = 0
correct_count = 0
wrong_count = 0
isActive = true


setQuiz(a)


buttons = document.getElementById("buttons")

buttons.addEventListener("click", function(event) {
	if (event.target.nodeName == "BUTTON")
		if (isActive){ // passar svo það er ekki svarað tvisvar
			isActive=false
			if (event.target.textContent==spurningar[a].svarMoguleikar[spurningar[a].rettSvar])
			{
				event.target.style.backgroundColor = "blue"
				correct_count+=1
			}
			else
			{
				event.target.style.backgroundColor = "red"
				wrong_count+=1
			}

			setTimeout(function () { // stoppar ý 500 millisecondr
				console.log("Stopped for 10 seconds")
				a+=1
				setQuiz(a)
				isActive=true
		    }, 500);
		}
		
})

