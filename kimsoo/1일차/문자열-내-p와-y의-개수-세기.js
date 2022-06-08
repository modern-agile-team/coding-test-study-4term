function solution(s){
    var ss = s.toUpperCase();
    var P = 0;
    var Y = 0;
    
    for(var i = 0; i < s.length; i++){
        if(ss[i] == 'P') P++;
        else if(ss[i] == 'Y') Y++;
    }
    
    return P == Y ? true : false;
}