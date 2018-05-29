
Array.prototype.isDual = function(){
  
    let y = Array.from(this);

    if(y.length%2!=0)
        return 0;
    else{
        let i = 2, sum = y[0]+y[1];
        while(i<y.length){
            if(sum!=y[i]+y[i+1])
                return 0;
            i+= 2;
        }

        return 1;
    }
    
}
