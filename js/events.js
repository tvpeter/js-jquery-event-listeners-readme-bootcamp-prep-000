//define functions here

$(document).ready(function(){

// call functions here
frameIt();

getIt();
pressIt();

});

function getIt()
{
  $('p:first-child').on('click', function(){
    return alert('Hey!');
  });
}

function frameIt()
{
return $("img:first").on("load", function(){
    $(this).addClass("tasty");
  });
    
}

function pressIt()
{
  $("form").on('keydown', function(key){
    
 if( $('input:first').val().key === 71)
 {
   alert ("GKEY HAS BEEN PRESSED");
 }
    
  });
}

function submitIt()
{
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.");
    return;
  })
}

