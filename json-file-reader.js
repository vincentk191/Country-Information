const fs = require('fs');

let jsonData = '';

const convertToJs = (fileName, callback) => {

   fs.readFile(fileName, function(err,data){
      if(err){
         throw err;
      }

      jsonData = JSON.parse(data);
      callback(jsonData);
   });



};

module.exports = {
   convertToJs: convertToJs,
}
