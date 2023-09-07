/** ES5 function default value */
function getLocation(city, country, continent) {
  //식별자 앞에 아무것도 없으면 var랑 같음
  if (typeof country === "undefined") {
    country = "Italy";
  }
  if (typeof continent === "undefined") {
    continent = "Europe";
  }
  console.log(continent, country, city);
}

getLocation("Milano");
getLocation("Paris", "France");
console.log("\n");

/** ES6 function default value */
function getLocation2(city, country = "Italy", continent = "Europe") {
  console.log(continent, country, city);
}

getLocation2("Milano");
getLocation2("Paris", "France");
