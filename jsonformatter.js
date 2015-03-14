window.addEventListener('load',function(event){
  var formatjson = document.getElementById("formatjson");
  formatjson.addEventListener('click',function(event){
    event.preventDefault();
    //clearing everything
    document.getElementById("result").style.display = "none";
    document.getElementById("valid").style.display = "none";
    document.getElementById("invalid").style.display = "none";
    document.getElementById("compactjson").innerHTML="<h3>Compact JSON</h3><div id='resultcompactjson'></div>";
    document.getElementById("stringifiedjson").innerHTML="<h3>Stringified JSON</h3><div id='resultstringifiedjson'></div>";

    var inputjson = document.getElementById("inputjson").value;
    //checking validity of json
    var isValid = false;
    try{
      var result = JSON.parse(inputjson);
      if(result && typeof result === "object" && result !== null)
        isValid = true;
    }
    catch(e){
      console.log("Exception:"+e);
      document.getElementById("result").style.display = "block";
      document.getElementById("invalid").style.display = "block";
    }

    if(isValid){
      document.getElementById("result").style.display = "block";
      document.getElementById("valid").style.display = "block";
      document.getElementById("compactjson").style.display = "block";
      document.getElementById("stringifiedjson").style.display = "block";
    }
    else{
      document.getElementById("result").style.display = "block";
      document.getElementById("invalid").style.display = "block";
      document.getElementById("compactjson").style.display = "none";
      document.getElementById("stringifiedjson").style.display = "none";
    }

    if(isValid){

      console.log(JSON.stringify(JSON.parse(inputjson)));

      //printing compact json
      var compactjson = document.getElementById("resultcompactjson");
      compactjson.innerHTML += JSON.stringify(JSON.parse(inputjson));

      //printing stringified json
      var stringifiedjson = document.getElementById("resultstringifiedjson");
      tempjson = JSON.stringify(JSON.parse(inputjson));
      resultjson = tempjson.replace(/"/g,'\\"');
      stringifiedjson.innerHTML += resultjson;
    }
  });
});
