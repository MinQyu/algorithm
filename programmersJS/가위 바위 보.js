function solution(rsp) {
    const r = '0', s = '2', p = '5';
    const win = (e) => {
        if(e === r) return p;
        if(e === s) return r;
        if(e === p) return s;
    }
    return rsp.split('').map(e => win(e)).join('');
}
