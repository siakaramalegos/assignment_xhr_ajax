// // Get a list of users in JSON form
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("GET", "http://reqres.in/api/users", true);
// xhr.send();


// // Create a post
// var xhr = new XMLHttpRequest();
// xhr.addEventListener( "load", function(){
//     console.log( this.responseText );
// });
// xhr.open("POST", "http://reqres.in/api/posts", true);
// xhr.send("title=Foo&body=Bar&userId=1");




// Build JQuery's $.ajax using XHR
var $ = {

  // In the options, url, method, and async are required
  ajax: function(options){
    var headers = options.headers; // object
    var data;

    // Instantiate the XHR object
    var xhr = new XMLHttpRequest();

    // Set up callbacks - these should take an event argument
    xhr.addEventListener( "load", options.success);
    xhr.addEventListener( "load", options.complete);
    xhr.addEventListener( "error", options.error);

    // Convert data to something that can be sent
    if ( options.data ) {
      // TODO
      data = ''
    }

    xhr.open(options.method, options.url, options.async);
    xhr.send(data);
  }

};




// Use the $.ajax built above
function completeFunction(event){
  console.log( this.responseText );
}

function successFunction(event){
  console.log('Success');
}

function errorFunction(event){
  console.log('Uh oh. Error.');
}

var options1 = {
  url: "http://reqres.in/api/users",
  method: 'GET',
  async: true,
  complete: completeFunction,
  success: successFunction,
  error: errorFunction
};

$.ajax(options1);