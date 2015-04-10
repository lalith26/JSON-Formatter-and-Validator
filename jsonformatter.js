window.addEventListener('load',function(event){
  var formatjson = document.getElementById("formatjson");
  formatjson.addEventListener('click',function(event){
    event.preventDefault();
    //clearing everything
    document.getElementById("resultcontainer").style.display = "none";
    document.getElementById("valid").style.display = "none";
    document.getElementById("invalid").style.display = "none";
    document.getElementById("errormessage").style.display = "none";
    document.getElementById("compactjson").innerHTML="<h3>Compact JSON</h3><textarea id='resultcompactjson' rows='15' cols='100'></textarea>";
    document.getElementById("stringifiedjson").innerHTML="<h3>Stringified JSON</h3><textarea id='resultstringifiedjson' rows='15' cols='100'></textarea>";
    document.getElementById("beautifiedjson").innerHTML="<h3>Beautified JSON</h3><textarea id='resultbeautifiedjson' rows='15' cols='100'></textarea>";
    document.getElementById("errormessage").innerHTML="<h3>Error</h3><div id='errmsg'></div>";

    var inputjson = document.getElementById("inputjson").value;
    //checking validity of json
    var isValid = false;
    try{
      var result = jsonlint.parse(inputjson);
      if(result){
        isValid = true;
      }
    }
    catch(e){
      console.log("Exception:"+e);
      document.getElementById("resultcontainer").style.display = "block";
      document.getElementById("invalid").style.display = "block";
      document.getElementById("errormessage").style.display = "block";
      var errormessage = document.getElementById("errmsg");
      errormessage.innerHTML += e;
    }

    if(isValid){
      document.getElementById("resultcontainer").style.display = "block";
      document.getElementById("valid").style.display = "block";
      document.getElementById("compactjson").style.display = "block";
      document.getElementById("stringifiedjson").style.display = "block";
      document.getElementById("beautifiedjson").style.display = "block";
    }
    else{
      document.getElementById("resultcontainer").style.display = "block";
      document.getElementById("invalid").style.display = "block";
      document.getElementById("compactjson").style.display = "none";
      document.getElementById("stringifiedjson").style.display = "none";
      document.getElementById("beautifiedjson").style.display = "none";
    }

    if(isValid){

      console.log(JSON.stringify(JSON.parse(inputjson)));

      //printing compact json
      var compactjson = document.getElementById("resultcompactjson");
      compactjson.value = JSON.stringify(JSON.parse(inputjson));

      //printing stringified json
      var stringifiedjson = document.getElementById("resultstringifiedjson");
      var tempjson = JSON.stringify(JSON.parse(inputjson));
      var resultjson = tempjson.replace(/"/g,'\\"');
      stringifiedjson.value = resultjson;

      //printing beautified json
      var beautifiedjson = document.getElementById("resultbeautifiedjson");
      var tempbeautifiedjson = JSON.stringify(JSON.parse(inputjson),null,3);
      //var resultbeautifiedjson = tempbeautifiedjson.replace(/\\n/g,"\"\+\"\\n\"\+\"");
      beautifiedjson.value = tempbeautifiedjson;

    }
  });
});
