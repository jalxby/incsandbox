function nbYear(p0, percent, aug, p) {
    console.log(arguments)
    percent = percent/100
    let n=0;
    do{
        p0 = (p0+aug)+p0*percent;
        p0 = Math.round(p0)
        n++
    } while(((p0+aug)+p0*percent) < p)

    if(p0 <= p){
        n++
    }

    return n;
}
