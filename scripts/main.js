var clickBtnSearch = function() {
  var _path = $("#searchBox").val();
  var result = getValue(_path);
  $('#resultSpan').empty();
  $('#resultSpan').append(JSON.stringify(result));
}
///Get value from json by provided path
var getValue = function(_path){
  var val="";

  var sample_array=_path.split(".");
  
  
  var obj={
          person: 
              {name: 
                  {
                      first: 'FirstName', 
                      middleInitial: 'I', 
                      lastName: 'LastName'
                  }
          }
      }
      if(sample_array && sample_array.length>0){
        for(var i=0;i<sample_array.length;i++){
          obj = findValue(obj,sample_array[i]);
          
        }
        if(obj){
          return obj;
        }else{
          return "Data not found.";
        }
        
      }else{
        return "Data not found."
      }
      
}

var findValue = function(data,key){
  
  return data[key]
}

