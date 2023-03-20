function checkSpeed(){
    let currentspeed=70;
    let result;
    let speed=parseInt(document.getElementById('speed').value);
points= (speed-currentspeed)/5;
    if(speed==''){
        result='Inavalid speed';
    }
    else if(speed<=currentspeed){
        result='Ok.';
    }
    else if(points<=12){
        result= 'Speed points '+points.toFixed(0);
    }
    else{
        result= "License suspended";
    }
    document.getElementById('getpoints').innerText=result
}