const fs = require('fs');
const js = require('../json-file-reader')

const inputCountry = process.argv[2];
const dataBase = './countries.json';
let jsonText;
let countryName = '';
let domain = '';

// fs.readFile(dataBase, function(err,data){
//    if(err){
//       throw err;
//    }
//    jsonData = JSON.parse(data);
//    let countryIndex = inputCountry => {
//
//          for(let i = 0; i < jsonData.length; i++){
//
//                if(jsonData[i].name === inputCountry){
//
//                   countryName = jsonData[i].name;
//                   domain = jsonData[i].topLevelDomain;
//                   console.log(`Country: ${countryName}`);
//                   console.log(`Top Level Domain: ${domain}`);
//                }
//          }
//    };
//    countryIndex(inputCountry);
// });

// My own module

let countryIndex = jsonData => {
      for(let i = 0; i < jsonData.length; i++){
            if(jsonData[i].name === inputCountry){

               countryName = jsonData[i].name;
               domain = jsonData[i].topLevelDomain;
               console.log(`Country: ${countryName}`);
               console.log(`Top Level Domain: ${domain}`);
            }
      }
};

js.convertToJs(dataBase, countryIndex);
