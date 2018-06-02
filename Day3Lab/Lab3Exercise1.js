let dns  = require('dns');
let convertDns = function(domainName, callback){
    return dns.resolve4(domainName, callback);
}

convertDns('www.mum.edu', (error, data)=>console.log(data));