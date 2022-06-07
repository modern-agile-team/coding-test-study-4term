function solution(s){
    s = s.toUpperCase();
    const p = s.match(/P/g);
    const y = s.match(/Y/g);
    return (p ? p.length : 0) == (y ? y.length : 0);

}