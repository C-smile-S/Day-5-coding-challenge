// var a = Date.parse("march 21, 1998");
// var b = new Date()
// console.log(b);


// var binary = ;
// alert(parseInt(binary, 2))
//Not yet fully understood parseInt yet but

//Challenge 1
 function personDays(age) {
    var now = new Date();
    var begin= new Date();
    begin.setFullYear((now.getFullYear()-age))
    var diff = now - begin;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return day ;
    }

		console.log(personDays(22));

		//challenge 2


let deci = (b) => parseInt(b, 2);

document.write(deci(1100110));