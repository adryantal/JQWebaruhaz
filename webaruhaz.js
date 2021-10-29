$(function () {
    const termekTomb = [];
    
    adatbeolvas("termekek.json",termekTomb,function(){megjelenit(termekTomb)});
    
    function adatbeolvas(fajlnev, tomb, myCallback) {
      $.ajax({
        url: fajlnev,
        success: function (result) {
          //console.log(result);
          result.lista.forEach((element) => {
            tomb.push(element); //pakolja be a tombbe a beolvasott json fileban levo lista elemeit
          });
          //console.log(tomb.length);
          //itt teljes a tomb --> itt kell meghivni az adatbetoltest v.egyeb fuggvenyt
          myCallback(tomb);
        },
      });
      //console.log(tomb.length);
      //itt mar ures a tomb
    }

    
    
    function megjelenit(tomb) {
      //$("#article").empty();
      const elem = '<div class="elem"><h3></h3><img src="" alt=""><p></p><span></span></div>'; //létrehozok egy "template-et"   
            
      tomb.forEach((element, index) => { //tomb[index]            
        $("article").append(elem);
        for (let key in element) {   //tomb[index][key]           
            switch(key){
                case "nev": $(".elem h3").eq(index).html(element[key]);                
                case "kep": $(".elem img").eq(index).attr("src", element[key]);  break;
                case "leiras": $(".elem p").eq(index).html(element[key]);  
                case "ar": $(".elem span").eq(index).html(element[key]);           		
                       
                       
            } 
                        
        }  
       
       
      });
    }

   

});