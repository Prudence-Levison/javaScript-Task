function convertFahrToCelsuis(temperature){
    let inputtype = Object.prototype.toString.call(temperature);
    let paramtype = inputtype.split(" ");
    // Remove "]" from paramtype[1]
        paramtype[1] = paramtype[1].substring(0, paramtype[1].length - 1);
        if (inputtype ==="[object Number]" || (inputtype == "[object String]" && !isNaN (temperature))){
            return ((temperature-32)* 5/9).toFixed(4);
        }
        else{
        return `${JSON.stringify(temperature)}is not valid number but a/an ${paramtype[1]} `;
        }
    }
    


    function checkYuGiOh(n){
        var arr = [];
        if (isNaN(n)) {
            return `${n} is not a valid number.`;
        };
        if (!(parseInt(n) > 0)) {
            return `${n} is a negative  number.`;
        }
        for (let i = 1; i <= n; i++) {
            let lres = [];
            if (i % 2 === 0) {
                lres.push('yu');
            }
            if (i % 3 === 0) {
                lres.push('gi');
            }
            if (i % 5 === 0) {
                lres.push('oh');
            }
           if(lres.length > 0)
               arr.push(lres.join("-"));
            else
                  arr.push(i);
        }
        return arr;
    } 
