function checkSpeed(){
    //required speed limit
    let currentspeed=70;
    let result;
    //get speed value
    let speed=parseInt(document.getElementById('speed').value);
points= (speed-currentspeed)/5;
//Check invalid inputs
    if(speed==''){
        result='Inavalid speed';
    }
    //
    else if(speed<=currentspeed){
        result='Ok.';
    }
    //if points below 12
    else if(points<=12){
        result= 'Speed points '+points.toFixed(0);
    }
    else{
       // if  points exceed 12
        result= "License suspended";
    }
    //DOM manipulation
    document.getElementById('getpoints').innerText=result
}