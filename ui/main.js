var button= document.getElementById('counter');
var counter=0;
button.onclick= function(){
  
  var request= new XMLHttpRequest();
  
  request.onreadystatechange= function(){
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status=200){
              var counter=request.responseText;
              var span= document.getElementById('count');
              span.innerhtml= counter.toString();
          }
      }
  };
  request.open('GET', 'http://aniketpatel1997.imad.hasura-app.io/counter', true);
  request.send(NULL);
};
