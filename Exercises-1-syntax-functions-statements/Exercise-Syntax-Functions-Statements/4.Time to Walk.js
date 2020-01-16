function solve(steps, footprint, speed) {

    let s=0;
    let rest=0;
    let time=0;

    s = steps*footprint;
    rest = Math.floor(s/500);
    time = s/speed/1000*60;

    let totalTimeSec = Math.ceil((time+rest)*60);

    let result = new Date(null, null, null, null, null, totalTimeSec);
    
    return result.toTimeString().split(' ')[0];
    

}

console.log(solve(4000, 0.60, 5));