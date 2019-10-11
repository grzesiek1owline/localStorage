console.log('START');

let userFavList = [];
let listName = 'Favorities';

function checkFav(){
  let temp = localStorage.getItem(listName);
  if (temp !== null) {
    userFavList = JSON.parse(temp);
  }
}

checkFav();

console.log(userFavList);

function clickFav(){

  let exist = false;

  //*== 1. Check if the item is on the list (userFavList)
  let id = this.dataset.id;
  let tab = userFavList;
  for (let i=0; i<tab.length; i++) {
    if(tab[i]['id'] === id) {
      document.querySelector('button[data-id="'+ id +'"]').style.backgroundColor = "yellow";
      tab.splice(i, 1);
      exist = true;
    }
  }
  //*==== 2. If not exist
  if(!exist) {
    this.style.backgroundColor = "red";
    let dataset = {...this.dataset}
    tab.push(dataset);
  }

  updateFav(listName, tab);
  userFavList = tab;
}

function checkAddedFav(){
  let tab = userFavList;
  for (let i=0; i<tab.length; i++) {
    let el = tab[i]['id'];
    document.querySelector('button[data-id="'+ el +'"]').style.backgroundColor = "red";
  }
}

checkAddedFav();

function updateFav(name,object){
  localStorage.setItem(name, JSON.stringify(object));
}

document.querySelectorAll('.js-add-favorities').forEach(btn => btn.addEventListener('click', clickFav));
