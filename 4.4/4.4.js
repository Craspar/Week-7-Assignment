var x = prompt("Please enter a number:");

const arr = []

if(x==""){

    document.write("<h2><b>You have to enter a number!</b></h2>")

}

else{
    
for(var z = 0; z < 20 ; z++ ){

    if( z<2 ){

        arr[z] = x;

    }

    else{

        arr[z] = parseInt(arr[z-2]) + parseInt(arr[z-1]);
    
    }

}

document.write("<p><b>This is your output: </b>" + arr + "</p>");

}


