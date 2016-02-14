var leader = {
   name: "Василий Иванович",
   age: 35
};

json = JSON.stringify(leader);
console.log(json);
jsonParse = JSON.parse(json);
console.log(jsonParse.name);
console.log(jsonParse.age);
