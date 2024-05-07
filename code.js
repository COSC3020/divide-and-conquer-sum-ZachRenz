let sum = 0;
function divideAndConquerSum(x) {
    sum = 0;
    if (x.length == 0) return 0;
    if (x.length == 1) return x[0];
    if (x.length == 2) return (x[0]+x[1]);
    sum = slicef(x)
    return sum;
}

function slicef(x = []) { 
    x.length;
    if (x.length == 1) return x[0];
    if (x.length == 0) return 0;

    let mid1 = Math.floor(x.length/3); 
    let mid2 = Math.floor((2 * x.length)/3);

    let lowSlice = x.slice(0, mid1);
    let midSlice = x.slice(mid1, mid2);
    let highSlice = x.slice(mid2, x.length);

    return slicef(lowSlice) + slicef(midSlice) + slicef(highSlice); // Ali torabi helped me with this last line of code, and it fixed the code. 
}


// slice
