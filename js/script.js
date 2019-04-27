// REF: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/

/**********************************
  CONFIGURE JSON CALL
**********************************/


for (i = 0; i < 26; i++) {
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
                        <h1> ID #${data.id} </h1>
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