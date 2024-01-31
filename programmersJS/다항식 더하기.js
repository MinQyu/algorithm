function solution(polynomial) {
    let x = 0;
    let n = 0;
    polynomial = polynomial.split(" + ");
    polynomial.forEach(e => {
        if (e.includes('x')) {
            parseInt(e) ? x += parseInt(e) : x += 1;
        } else {
            n += parseInt(e);
        }
    });
    const xp = x ? (x === 1 ? 'x' : x.toString() + 'x') : '';
    const plus = x && n ? " + " : '';
    const np = n ? n.toString() : '';
    return xp + plus + np;
}