function solution(array, commands) {  
    let ar = [];
    for(let com_el of commands){
        let el = array.slice(com_el[0] - 1,com_el[1]).sort(function(a, b){return a - b});        
        el = el[com_el[2] - 1];
        ar.push(el);        
    }        
    return ar; 
}
