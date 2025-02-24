function sumArray(a) {
    let mainresult = 0;
    for (let i = 0; i < a.length; i++) {
        
          mainresult += a[i];
    }
    return mainresult;
}

a=[1,2,3,4,5,6,7,8]
let finalsum = sumArray(a)
console.log(finalsum);

