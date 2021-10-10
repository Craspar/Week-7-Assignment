var x = prompt("Please enter a line of text, separating words with a space:");

var y = x.split(" ");

if(x==""){

    document.write("<h2>You have to enter a line of text!</h2>");

}

else{

document.write("<p><b>This is your text in alphabetical order: </b>" + y.sort() + "</p>");

}
