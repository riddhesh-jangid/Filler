/*window.addEventListener('load',function(){
  document.getElementById("bb").addEventListener("click", function(){
   globalpos++;
}); 
});

window.addEventListener('load',function(){
  document.getElementById("unb").addEventListener("click", function(){
  chrome.storage.sync.get("username", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["username"] +'" ; '; 
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});

window.addEventListener('load',function(){
  document.getElementById("nb").addEventListener("click", function(){
  chrome.storage.sync.get("name", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["name"] +'" ; ';
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});

window.addEventListener('load',function(){
  document.getElementById("eb").addEventListener("click", function(){
  chrome.storage.sync.get("email", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["email"] +'" ; ';
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});

window.addEventListener('load',function(){
  document.getElementById("nob").addEventListener("click", function(){
  chrome.storage.sync.get("number", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["number"] +'" ; ';
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});

window.addEventListener('load',function(){
  document.getElementById("cb").addEventListener("click", function(){
  chrome.storage.sync.get("college", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["college"] +'" ; ';
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});

window.addEventListener('load',function(){
  document.getElementById("ab").addEventListener("click", function(){
  chrome.storage.sync.get("address", (items) => {
   var script = ' document.getElementsByTagName("input")['+globalpos+'].value = "'+ items["address"] +'" ; ';
   globalpos++;
   chrome.tabs.executeScript({
    code: script
   });
  });
}); 
});*/


window.addEventListener('load',function(){
  document.getElementById("set").addEventListener("click", function(){
 
  var x= document.getElementsByClassName("takepattern");
  var token=x[0].value;
  var pattern= x[1].value;
  var size=pattern.length;   
  var i=0;
  while(i<size)
  {
   //
   //
    if(i==0)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[0].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

  else if(i==1)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[1].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }
    
    else if(i==2)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[2].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==3)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[3].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==4)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[4].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }
    
    else if(i==5)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="n")
           {
              chrome.storage.sync.get("na"+token+"me", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["na"+token+"me"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[5].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==6)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[6].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==7)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[7].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }
    else if(i==8)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[8].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }
    else if(i==9)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[9].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==10)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[10].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==11)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[11].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }

    else if(i==12)
     {
         if(pattern[i]=="u")
           {
              chrome.storage.sync.get("user"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["user"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="f")
           {
              chrome.storage.sync.get("first"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["first"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="l")
           {
              chrome.storage.sync.get("last"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["last"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="e")
           {
              chrome.storage.sync.get("em"+token+"ail", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["em"+token+"ail"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="x")
           {
              chrome.storage.sync.get("num"+token+"ber", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["num"+token+"ber"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="c")
           {
              chrome.storage.sync.get("col"+token+"lege", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["col"+token+"lege"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="a")
           {
              chrome.storage.sync.get("add"+token+"ress", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["add"+token+"ress"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="d")
           {
              chrome.storage.sync.get("ad"+token+"har", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["ad"+token+"har"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="y")
           {
              chrome.storage.sync.get("fath"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["fath"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="z")
           {
              chrome.storage.sync.get("moth"+token+"name", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["moth"+token+"name"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="j")
           {
              chrome.storage.sync.get("d"+token+"ob", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["d"+token+"ob"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
        else if(pattern[i]=="p")
           {
              chrome.storage.sync.get("pass"+token+"word", (items) => {
                 var script = ' document.getElementsByTagName("input")[12].value = "'+ items["pass"+token+"word"] +'" ; ';
                chrome.tabs.executeScript({
                code: script
               });
              });
           }
     }


   i++; 
 }

}); 
});

window.addEventListener('load',function(){
  document.getElementById("edit").addEventListener("click", function(){
    var x = document.getElementsByClassName("takeinput");
    for(var i=0;i<x.length;i++)
    {
      x[i].style.display="block";
    }
}); 
});

window.addEventListener('load',function(){
  document.getElementById("bthelp").addEventListener("click", function(){
    var x = document.getElementById("help");
      x.style.display="block";
}); 
});


window.addEventListener('load',function(){
  document.getElementById("btnsave").addEventListener("click", function(){
    var x = document.getElementsByClassName("takeinput");
    for(var i=0;i<x.length;i++)
    {
      x[i].style.display="none";
    }
  var items = {};
  var token = document.getElementsByClassName("takeinput")[0].value;
  items["user"+token+"name"] = document.getElementsByClassName("takeinput")[1].value;
  chrome.storage.sync.set(items);
  items["first"+token+"name"] = document.getElementsByClassName("takeinput")[2].value;
  chrome.storage.sync.set(items);
  items["last"+token+"name"] = document.getElementsByClassName("takeinput")[3].value;
  chrome.storage.sync.set(items);
  items["na"+token+"me"] = document.getElementsByClassName("takeinput")[2].value+" "+document.getElementsByClassName("takeinput")[3].value;
  chrome.storage.sync.set(items);
  items["em"+token+"ail"] = document.getElementsByClassName("takeinput")[4].value;
  chrome.storage.sync.set(items);
  items["num"+token+"ber"] = document.getElementsByClassName("takeinput")[5].value;
  chrome.storage.sync.set(items);
  items["col"+token+"lege"] = document.getElementsByClassName("takeinput")[6].value;
  chrome.storage.sync.set(items);
  items["add"+token+"ress"] = document.getElementsByClassName("takeinput")[7].value;
  chrome.storage.sync.set(items);
  items["ad"+token+"har"] = document.getElementsByClassName("takeinput")[8].value;
  chrome.storage.sync.set(items);
  items["fath"+token+"name"] = document.getElementsByClassName("takeinput")[9].value;
  chrome.storage.sync.set(items);
  items["moth"+token+"name"] = document.getElementsByClassName("takeinput")[10].value;
  chrome.storage.sync.set(items);
  items["d"+token+"ob"] = document.getElementsByClassName("takeinput")[11].value;
  chrome.storage.sync.set(items);
  items["pass"+token+"word"] = document.getElementsByClassName("takeinput")[12].value;
  chrome.storage.sync.set(items);
}); 
});


