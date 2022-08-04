console.log("Start");

function isPrime(){
    let n = document.getElementById("i1").value;
    console.log(n);
    let b = false;
    if(!isNaN(n)){
        for(let i=2;i<n/2;i++){
            if(n % i == 0){
                b = false;
                break;
            }else{
                b = true;
            }
        }
    }
    
    if(b){
        document.getElementById("p2").innerHTML = "Yes!, it's Prime";
    }else{
        document.getElementById("p2").innerHTML = "No!";
    }
}

function isOE(){
    let m = document.getElementById("i2").value;
    console.log(m);
    if(!isNaN(m)){
        if(m % 2 == 0){
            document.getElementById("p3").innerHTML = "Even";
        }else{
            document.getElementById("p3").innerHTML = "Odd";
        }
    }
}
