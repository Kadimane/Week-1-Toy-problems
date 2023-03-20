function getnhif(amt){
    //NHIF deductions control flow
    let nhif=0;
    if(amt<=5999){
        nhif=150;}     	  	
    else if(amt>=5999 && amt<= 7999){
        nhif=300;
        }
    else if(amt>=7999 && amt<=11999){
        nhif=400;
        }
    else if(amt>=12000 && amt<=14999){
        nhif=500;
        } 	  	
    else if(amt>=15000 && amt<=19999){
        nhif=600;
        } 	  	
    else if(amt>=20000 && amt<=24999){
        nhif=750;
        } 	  	
    else if(amt>=25000 && amt<=29999){
        nhif=850;
        } 	  	
    else if(amt>=29999 && amt<=34999){
        nhif=900;
        } 	  	
    else if(amt>=34999 && amt<=39999){
        nhif=950;
        }
    else if(amt>=39999 && amt<=44999){
        nhif=1000;
    }
    else if(amt>=44999 && amt<=49999){
        nhif=1100;
    }
    else if(amt>=49999 && amt<= 59999){
        nhif=1200;
    }
    else if(amt>=59999 && amt<= 69999){
        nhif=1300;
    }
    else if(amt>=69999 && amt<= 79999){
        nhif=1400;
    }
    else if(amt>=79999&& amt<= 89999){
        nhif=1500;
    }
    else if(amt>= 89999 && amt<= 99999){
        nhif=1600;
    }
    else if(amt>=99999){
        nhif=1700;
    }
    return nhif;
//end function
}
// get payee deduction
function payee(amount){
    let pay=0;
    if(amount<=24000){
        pay=(amount*0.1);
    }
    else if(amount<=32333){
        pay=amount*2.5;
    }
    else{
        pay=amount*0.3;
    }
    return pay;
}
function calculateSalary(){
    //cast value to interger
    let gross=parseInt(document.getElementById("salary").value);
    const nssf=200;
    const taxrelief=2400;
   total=gross-(getnhif(gross)+nssf+payee(gross));
   //Dom manipulation
   document.getElementById('netsalary').innerHTML="Net Salart Pay is: "+total

    
}