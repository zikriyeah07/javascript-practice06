function takeNum(a,b){
    if (a>b) {
        console.log(`${a} is greater`);
        
    }
    else if (a<b) {
        console.log(`${b} is greater`)
        
    }
    else if (a==b){
        console.log(`Both ${a} & ${b} are equal`)
    }
    else{
        console.log(`Error`)
    }
}

let a = 13;
let b = `13`;
takeNum(a,b);