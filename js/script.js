
/**********************************
  CONFIGURE JSON CALL
**********************************/


for (i = 0; i < 100; i++) {
  // The API feed
  let getStuff = 'https://pokeapi.co/api/v2/pokemon/' + i;

  // Do stuff with returned data
  let doStuff = function (data) {

    // How big is array?    
    console.log(getStuff);
    console.log(data.id);
    console.log(data.name);
    console.log(data.sprites);

    //   Template
    const template = `<div class="card">
    <img class="cardimg" src="${data.sprites.front_default}">
    <h1 class="id"> ID #${data.id} </h1>
    <div class="types">
<h2> ${data.types[0].type.name} </h2>
<h2> ${data.types[1].type.name} </h2></div>
    <h1 class="name"> ${data.name} </h1>
   </div>`;  

    $('#app').append(template);
  };

  /************************************
       GET JSON FROM API
     ************************************/
  $.getJSON(getStuff, doStuff);

  /************************************
                                  SHOW (DISPLAY ON PAGE)
                                ************************************/
  let showStuff = function (data) {
  };}