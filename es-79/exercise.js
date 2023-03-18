const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveData(key, obj){
  if (typeof localStorage !== "undefined") {
    const obj_JSON = JSON.stringify(obj);
    localStorage.setItem(key, obj_JSON);
  } else {
    console.log("LocalStorage non è disponibile nel tuo browser");
  }
}

/*function getData(key){
  const jsonData = localStorage.getItem(key);
  const data = JSON.parse(jsonData);
  return data
}*/
saveData("user", user)
/*console.log(getData("user"));*/