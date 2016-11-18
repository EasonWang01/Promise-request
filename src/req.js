const http = require('http');

exports.post = function(option,data) {
  if(typeof document === 'object'){
    return new Promise(function(r,j){
      let endpoint;
      let header;
      if(typeof option !== 'object'){
        endpoint = option;
      } else {
        endpoint = option.host +':'+ option.port + option.path
      }
      if(typeof option.header !== 'undefined'){
        header = option.header;
      }else{
        header = {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'x-www-form-urlencoded'
       }
      }

      fetch(endpoint,{
            method: 'POST',
             body: data,
             headers: header,
        })
        .then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else {
                var error = new Error(response.statusText)
                error.response = response;
                throw error;
            }
        })
        .then((data) => {
          r(data);
        })
        .catch(function(error) {
            console.log('request failed', error);
            return error.response.json();
        })
      })
  } else {
   return new Promise(function(r,j){
     var post_options = {
           host: option.host,
           port: option.port,
           path: option.path,
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded',
           }
       };
       if(typeof option.header !== 'undefined'){
         post_options.headers = option.header;
       }
       var post_req = http.request(post_options, function(res) {
           res.setEncoding('utf8');
           res.on('data', function (chunk) {
             r(chunk);
           });
       });
       post_req.write(data);
       post_req.end();
   })
 }
}

 exports.get = function(option,data) {
   if(typeof document === 'object'){
     return new Promise(function(r,j){
       let endpoint;
       if(typeof option !== 'object'){
         endpoint = option;
       } else {
         endpoint = option.host +':'+ option.port + option.path
       }
       fetch(endpoint,{
             method: 'GET',
         })
         .then((response) => {
             if (response.status >= 200 && response.status < 300) {
                 return response.json();
             } else {
                 var error = new Error(response.statusText)
                 error.response = response;
                 throw error;
             }
         })
         .then((data) => {
           r(data);
         })
         .catch(function(error) {
             console.log('request failed', error);
             return error.response.json();
         })
       })
   } else {
    return new Promise(function(r,j){
      var post_options = {
            host: option.host,
            port: option.port,
            path: option.path,
        };
        if(typeof option.header !== 'undefined'){
          post_options.headers = option.header;
        }

        var post_req = http.request(post_options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
              r(chunk);
            });
        });
        post_req.write(data);
        post_req.end();
    })
  }

  }
