var leader = {
   name: "Василий Иванович"
};

var soldier = {
   name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

toJSON = function(){
   return {name: this.name}
};

leader.toJSON = toJSON;
soldier.toJSON = toJSON;
console.log(JSON.stringify(team));