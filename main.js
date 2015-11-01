/**
 * @param {string} s
 * @return {string}
 */
 function expandStr(innerB, outterB, indexC, s){
     var max = 0;
     if(outterB === 0){
         return 0;
     }
     max = innerB - 1;
     for(i = Math.max(innerB,1)  ; i <= outterB; i++){
         if (s[indexC - i] === s[indexC + i]){
             max ++;
         }else if(s[indexC - i] !== s[indexC + i] ){
             return max;
         }
     }
     return max;
 }
 
 
var longestPalindrome = function(s) {
    var tmpStr = "";
    
    var strLength = s.length;
    if (strLength === 0 || s === null){
        return "";
    }else if(strLength === 1){
        return s;
    }else if(strLength > 1){
        //start to insert the "signs";
        var str2 = [2 * strLength + 1];
        for (i = 0; i < (strLength) ; i ++){
            str2[2 * i]  = '#';
            str2[2 * i + 1] = s[i];
        }//end for i
        str2[2* strLength + 1] = '#';
        // start main algorithm
        
        var p = []; // the dynamic best value storage
        var c = 0, crange = 0;
        
        p[0] = 0;
        p[1] = 1;
        
        for (j = 2; j < 2 * strLength + 1; j++){
            var tmp = 0;
            if(j < (c + crange) && j > c && (2 * c - j) >= 0 ){
                tmp = expandStr(Math.min((c+crange-j),p[2*c-j]),Math.min( 2 * strLength  - j, j ),j,str2);
            }else{
                    tmp = expandStr(1, Math.min( 2 * strLength - j, j ),j,str2);
            }
            p[j] = tmp;
            if(tmp >= crange){
                crange = tmp;
                c = j;
            }
        }//end for j. the main loop

        for (i = c - crange; i <= c + crange; i++){

            if(str2[i] !=='#' && str2[i] !== null && str2[i] !== undefined){
                tmpStr += str2[i];
            }

        }
        return tmpStr;
        // end of main algorithm
    }//end if initial branch
    return tmpstr;
};
