
function getgrade(){
    let marks=prompt('Enter your marks!');
    let result;
    let getresult=document.getElementById('gradearea');
    if(marks>100 || marks<0){
        result='Invalid marks was provided!';
    }
    else if(marks>79){  
        result="Grade A";
    }
    else if(marks>60){
        result="Grade B";
    }
    else if(marks>49){
        result="Grade C"
    }
    else if(marks>40){
        result= "Grade D";
    }
    else{
        result='Grade E'
    }


    getresult.innerText=result;
}