// Добавление карты на страницу в map
DG.then(function () {
    var map = DG.map("map", {
        center: [59.934, 30.311],
        //zoom: 100,
        fullscreenControl: false,
        maxBounds: [  //Максимальное отдадение от карты
            [59.54, 29.92], 
            [60.309665, 30.757732],
        ],
        minZoom: 10
    });

    // Группы маркеров
    var markers = DG.featureGroup();
    var group, myIcon_O, myIcon_F1,myIcon_F2,myIcon_F3,myIcon_F4;

    myIcon_O = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo_Osnova_G.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
        
    });
    myIcon_F1 = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo_F1_O.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
        
    }); myIcon_F2 = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo_F2_B.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
        
    }); myIcon_F3 = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo_F3_Y.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
        
    });
    myIcon_F4 = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo_F4_P.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
        
    });

    // Добавление объектов


    //----------------------------------------------
    //---------------------ОСНОВНОЙ------------------------
    var marker_Bib_move_O = DG.marker([59.923721, 30.297219], {icon: myIcon_O}).addTo(markers);
    var marker_Bib_move_F1 = DG.marker([59.944576, 30.358772], {icon: myIcon_F1}).addTo(markers);
    var marker_Bib_move_F2 = DG.marker([59.928812, 30.338811], {icon: myIcon_F2}).addTo(markers);
    


    var marker_O0_Krukov = DG.marker([59.923721, 30.297219],  {icon: myIcon_O}).addTo(markers).bindPopup('Крюков кан., д. 14 ');
    var marker_O1_Oficerskaya = DG.marker([59.924826, 30.287706], {icon: myIcon_O}).addTo(markers).bindPopup('Офицерская ул., д. 39');
    var marker_O2_Sadovay = DG.marker([59.917651, 30.288631], {icon: myIcon_O}).addTo(markers).bindPopup('Садовая ул., д. 104 ');
    var marker_O3_Masterskaya = DG.marker([59.922548, 30.289224], {icon: myIcon_O}).addTo(markers).bindPopup('Мастерская ул., д. 10  ');
    var marker_O4_Grajdanskay = DG.marker([59.927026, 30.309436], {icon: myIcon_O}).addTo(markers).bindPopup('Гражданская ул., д. 26 ');
    var marker_O5_Grivcova = DG.marker([59.930710, 30.314916], {icon: myIcon_O}).addTo(markers).bindPopup('Демидов пер. (пер. Гривцова), д. 8  ');
    var marker_O6_BolMorskaya = DG.marker([59.931526, 30.303373], {icon: myIcon_O}).addTo(markers).bindPopup('Герцена ул. (Большая Морская), д. 53-8 ');
    var marker_O7_Kirochnaya = DG.marker([59.939762, 30.385730], {icon: myIcon_O}).addTo(markers).bindPopup('Салтыкова-Щедрина ул. (Кирочная), д. 61 ');
    var marker_O8_Biblio = DG.marker([59.933433, 30.310873], {icon: myIcon_O}).addTo(markers).bindPopup('Герцена ул. (Большая Морская), д. 33 ');
// ----------------------------------------------------------
// ---------------------Филиал №1 ---------------------------------
var marker_F1_1_Cherneshevskaya = DG.marker([59.944576, 30.358772],  {icon: myIcon_F1}).addTo(markers).bindPopup('пр. Чернышевского, д. 17   ');
var marker_F1_2_Liteyniy = DG.marker([59.943629, 30.348046], {icon: myIcon_F1}).addTo(markers).bindPopup('Литейный пр., д. 19 ');
var marker_F1_3_Mayakovskaya = DG.marker([59.940294, 30.355690], {icon: myIcon_F1}).addTo(markers).bindPopup('ул. Маяковского, д. 27 ');
//------------------------------------------------------------
//----------------------Филиал №2--------------------------------
var marker_F2_1_Fontanka = DG.marker([59.928812, 30.338811],  {icon: myIcon_F2}).addTo(markers).bindPopup('наб. реки Фонтанки, д. 62 ');
var marker_F2_2_Marata = DG.marker([59.920487, 30.343042], {icon: myIcon_F2}).addTo(markers).bindPopup('ул. Марата, д. 72   ');
//------------------------------------------------------------
//----------------------Филиал №3--------------------------------
var marker_F3_1_Sovet = DG.marker([ 59.933541, 30.366758],  {icon: myIcon_F3}).addTo(markers).bindPopup('ул. 3-я Советская, д. 8, л. А   ');
//------------------------------------------------------------
//------------------------------------------------------------
//----------------------Филиал №4--------------------------------
var marker_F4_1_Novgor = DG.marker([59.933000, 30.384517],  {icon: myIcon_F4}).addTo(markers).bindPopup('ул. Новгородская, д. 5, л. А  ');
//------------------------------------------------------------
//----------------анимация----------------
var infoframe = document.getElementById("info");
var infobox = document.getElementById("infobox");
const id_0=document.getElementById("id_0");
var id_1=document.getElementById("id_1");
var id_2=document.getElementById("id_2");
var id_3=document.getElementById("id_3");
var id_4=document.getElementById("id_4");
var id_5=document.getElementById("id_5");
var id_6=document.getElementById("id_6");
var id_7=document.getElementById("id_7");
var id_8=document.getElementById("id_8");
var id_9=document.getElementById("id_9");
var id_10=document.getElementById("id_10");
var id_11=document.getElementById("id_11");
var id_12=document.getElementById("id_12");
var id_13=document.getElementById("id_13");
var id_14=document.getElementById("id_14");
var id_15=document.getElementById("id_15");








var stop01=true;
var stop12=true;
var stop23=true;
var stop34=true;
var stop45=true;
var stop56=true;
var stop67=true;
var stop78=true;
//-----
var F1_stop01=true;
var F1_stop12=true;
//----
var F2_stop01=true;
//----
function start_all(){ 
 stop01=true;
 stop12=true;
 stop23=true;
 stop34=true;
 stop45=true;
 stop56=true;
 stop67=true;
 stop78=true;
marker_Bib_move_O.removeFrom(map);
marker_Bib_move_O.setLatLng([59.923721, 30.297219]);
marker_Bib_move_O.addTo(map);

}
function F1_start_all(){
       F1_stop01=true;
       F1_stop12=true;
//----
    marker_Bib_move_O.removeFrom(map);
    marker_Bib_move_O.setLatLng([59.944576, 30.358772])
    marker_Bib_move_O.addTo(map);


}
function F2_start_all(){
    F2_stop01=true;

    marker_Bib_move_O.removeFrom(map);
    marker_Bib_move_O.setLatLng([59.928812, 30.338811])
    marker_Bib_move_O.addTo(map); 
}


function stop_all(){
    marker_Bib_move_O.setLatLng([59.923721, 30.297219])

    markers.addTo(map); // добавляем все маркеры на карты  
    markers.removeFrom(map); 
     stop01=false;
     stop12=false;
     stop23=false;
     stop34=false;
     stop45=false;
     stop56=false;
     stop67=false;
     stop78=false;  
     clearInterval(move_O0_to_O1); 
     clearInterval(move_O1_to_O2);
     clearInterval(move_O2_to_O3); 
     clearInterval(move_O3_to_O4); 
     clearInterval(move_O4_to_O5);
     clearInterval(move_O5_to_O6); 
     clearInterval(move_O6_to_O7); 
     clearInterval(move_O7_to_O8);
     clearTimeout(m0001);
     clearTimeout(m0102);
     clearTimeout(m0203);
     clearTimeout(m0304);
     clearTimeout(m0405);
     clearTimeout(m0506);
     clearTimeout(m0607);
     clearTimeout(m0708);
     

     marker_Bib_move_O.removeFrom(map);


     
}

function F1_stop_all(){
    F1_stop12=false;
    F1_stop01=false;

    markers.addTo(map); // добавляем все маркеры на карты  
    markers.removeFrom(map);
    clearTimeout(m1011);
    clearTimeout(m1213); 
    clearInterval(move_10_to_11); 
     clearInterval(move_12_to_13);
    

}
function F2_stop_all(){
    F2_stop01=false;
    markers.addTo(map); // добавляем все маркеры на карты  
    markers.removeFrom(map); 
    clearTimeout(m2021);
    clearInterval(move_20_to_21); 
    


}
function F3_4_stop_all(){
    markers.addTo(map); // добавляем все маркеры на карты  
    markers.removeFrom(map); 
    clearTimeout(m10);
    clearTimeout(m20);
     clearTimeout(m30);
     clearTimeout(m40); 
     clearTimeout(showAllMarkers);
}
//console.log(marker_O0_Krukov.getLatLng().lat);
function STOP(){
    stop_all();
    F1_stop_all();
    F2_stop_all();
    F3_4_stop_all();
    markers.removeFrom(map); 
}
function m0001(){



    //change_in_frame.body.style.backgroundColor="#ff0000";
  // document.getElementById("info").contentWindow.document.getElementById("id_0");
    //console.log("m0001");
    //marker_O0_Krukov.addTo(map);
    markers.addTo(map);
    markers.removeFrom(map); 
    marker_Bib_move_O.setLatLng([59.923721, 30.297219])
    marker_Bib_move_O.addTo(map);
    setInterval(move_O0_to_O1, 20);

}

function move_O0_to_O1() {
// (1)      59.923721, 30.297219  отсюда маркер идет 
// (2)      59.924826, 30.287706 из этих вычитать (сюда маркер идет)
// формала (2)-(1)
//console.log("ONEmove_O0_to_O1");
var delx01=59.924826 - 59.923721;
var dely01=30.287706 - 30.297219;

  if( stop01==true) {
    

     var newLat01 = marker_Bib_move_O.getLatLng().lat+delx01/100,
         newLng01 = marker_Bib_move_O.getLatLng().lng+dely01/100;
   
         marker_Bib_move_O.setLatLng([newLat01, newLng01]);


if (marker_Bib_move_O.getLatLng().lng<30.287706){
  
    clearTimeout(m0001);
    clearInterval(move_O0_to_O1) 
   // console.log("move_O0_to_O1");

   marker_Bib_move_O.setLatLng([59.924826, 30.287706])

   if (marker_Bib_move_O.getLatLng().lng==30.287706 && marker_Bib_move_O.getLatLng().lat==59.924826){
    console.log("stop01");
    stop01=false;
    setTimeout(m0102, 1000);
    clearTimeout(m0001);
    clearInterval(move_O0_to_O1) 
    
   }
}
}
else{
    return; 
}

}
function m0102(){

    setInterval(move_O1_to_O2, 20);
    return 0;
}
//-----------------------------------------------------
function move_O1_to_O2() {
// (1)     59.924826, 30.287706 отсюда маркер идет 
// (2)     59.917651, 30.288631 из этих вычитать (сюда маркер идет)
// формала (2)-(1)
if( stop12==true) {

       var delx12=59.917651 - 59.924826;
       var dely12=30.288631 - 30.287706;
        
    
        var newLat12 = marker_Bib_move_O.getLatLng().lat+delx12/100,
        newLng12 = marker_Bib_move_O.getLatLng().lng+dely12/100;
       
        marker_Bib_move_O.setLatLng([newLat12, newLng12]);
    
    
    if (marker_Bib_move_O.getLatLng().lat<59.917651 ){

         
        marker_Bib_move_O.setLatLng([59.917651, 30.288631]);
     //console.log("move_O1_to_O2");
     if (marker_Bib_move_O.getLatLng().lng==30.288631 && marker_Bib_move_O.getLatLng().lat==59.917651){
        console.log("stop12");
        stop12=false;
        clearTimeout(m0102);
        clearInterval(move_O1_to_O2) 
      setTimeout(m0203, 1000);
     return;
       

     }

    }
}
else{
    return; 
}
    }
//-----------------------------------------------------
function m0203(){
    //console.log("m0203");
    setInterval(move_O2_to_O3, 20);
    return;
}
    function move_O2_to_O3() {
        //59.917651, 30.288631
        //59.922548, 30.289224
        if( stop23==true) { 
            var delx23=59.922548 - 59.917651;
            var dely23=30.289224 - 30.288631;
            
        
             var newLat23 = marker_Bib_move_O.getLatLng().lat+delx23/100,
                 newLng23 = marker_Bib_move_O.getLatLng().lng+dely23/100;
           
                 marker_Bib_move_O.setLatLng([newLat23, newLng23]);
        
        
        if (marker_Bib_move_O.getLatLng().lat>59.922548 ){
         

            marker_Bib_move_O.setLatLng([59.922548, 30.289224]);

          if (marker_Bib_move_O.getLatLng().lng==30.289224 && marker_Bib_move_O.getLatLng().lat==59.922548){
            console.log("stop23");
            stop23=false;
            clearTimeout(m0203);
            clearInterval(move_O2_to_O3) 
            setTimeout(m20, 1000);
        
          marker_O3_Masterskaya.addTo(map);
          return;

           
    
         }
        

        }
        else{
            return; 
        }
    }
        }
        function m20(){
            marker_F2_1_Fontanka.addTo(map);
            setTimeout(m10,1000);
            return;


        }
        function m10(){
            marker_F1_1_Cherneshevskaya.addTo(map);
            setTimeout(m0304,1000);
            return;


        }
//-----------------------------------------------------
function m0304(){
    marker_O3_Masterskaya.removeFrom(map);
    marker_Bib_move_O.addTo(map); // добавляем все маркеры на карты  
    marker_Bib_move_O.removeFrom(map); 
    marker_Bib_move_O.setLatLng([59.922548, 30.289224]);

    marker_Bib_move_O.addTo(map);
    setInterval(move_O3_to_O4, 20);
    return;
}

        function move_O3_to_O4() {
         
            //59.922548, 30.289224
            //59.927026, 30.309436
            if( stop34==true) { 
                var delx34=59.927026 - 59.922548;
                var dely34=30.309436 - 30.289224;
                
            
                 var newLat34 = marker_Bib_move_O.getLatLng().lat+delx34/100,
                     newLng34 = marker_Bib_move_O.getLatLng().lng+dely34/100;
               
                     marker_Bib_move_O.setLatLng([newLat34, newLng34]);
            
            
            if (marker_Bib_move_O.getLatLng().lng>30.309436){

                marker_Bib_move_O.setLatLng([59.927026, 30.309436]);
                if (marker_Bib_move_O.getLatLng().lng==30.309436 && marker_Bib_move_O.getLatLng().lat==59.927026){
                    console.log("stop34");
                    stop34=false;
                    clearTimeout(m0304);
                    clearInterval(move_O3_to_O4) 
                    setTimeout(m0405, 1000);
                  return;
            
                 }
            }
                    }
                    else{
                        return; 
                    }
        }
//-----------------------------------------------------
function m0405(){
    
    setInterval(move_O4_to_O5, 20);
    return;
}
            function move_O4_to_O5() {
                //59.927026, 30.309436
                //59.930710, 30.314916
                if( stop45==true) { 

                    var delx=59.930710 - 59.927026;
                    var dely=30.314916 - 30.309436;
                    
                
                     var newLat = marker_Bib_move_O.getLatLng().lat+delx/100,
                         newLng = marker_Bib_move_O.getLatLng().lng+dely/100;
                   
                         marker_Bib_move_O.setLatLng([newLat, newLng]);
                
                
              
                if (marker_Bib_move_O.getLatLng().lat>59.930710){
                    
                    marker_Bib_move_O.setLatLng([59.930710, 30.314916]);
                    if (marker_Bib_move_O.getLatLng().lng==30.314916 && marker_Bib_move_O.getLatLng().lat==59.930710){
                        console.log("stop45");
                        stop45=false;
                        clearTimeout(m0405);
                        clearInterval(move_O4_to_O5) 
                       setTimeout(m1011, 1000);
                    
                        marker_O5_Grivcova.addTo(map)
                        return;
                
                     }
                }
                        }
                        else{
                         return; 
                        }
            }

         //-----------------ФИЛИАЛ №1----------------------
function m1011(){
    marker_F1_1_Cherneshevskaya.removeFrom(map);
    marker_Bib_move_F1.addTo(map); // добавляем все маркеры на карты  
    marker_Bib_move_F1.removeFrom(map); 
    marker_Bib_move_F1.addTo(map);
    marker_Bib_move_F1.setLatLng([59.944576, 30.358772]);
    setInterval(move_10_to_11, 20);
    return;

}
                        function move_10_to_11() {
                            //59.944576, 30.358772
                            //59.943629, 30.348046
                            if( F1_stop01==true) { 

                                var delx=59.943629 - 59.944576;
                                var dely=30.348046 - 30.358772;
                                
                            
                                 var F1_newLat01 = marker_Bib_move_F1.getLatLng().lat+delx/100,
                                     F1_newLng01 = marker_Bib_move_F1.getLatLng().lng+dely/100;
                               
                                     marker_Bib_move_F1.setLatLng([F1_newLat01, F1_newLng01]);
                            
                            
                            if (marker_Bib_move_F1.getLatLng().lng<30.348046){
                                marker_Bib_move_F1.setLatLng([59.943629, 30.348046]);

                                 if (marker_Bib_move_F1.getLatLng().lng==30.348046 && marker_Bib_move_F1.getLatLng().lat==59.943629){
                                    console.log("T_stop01");
                                    F1_stop01=false;
                                    
                                    clearTimeout(m1011);
                                    clearInterval(move_10_to_11); 
                                    setTimeout(m0506, 1000);

                                    marker_F1_2_Liteyniy.addTo(map);
                                    
    
                                   return;
                            
                                 }
                            }
                                    }
                                   
                        }
//-----------------------------------------------------   
function m0506(){
    marker_O5_Grivcova.removeFrom(map);
    marker_Bib_move_O.addTo(map); // добавляем все маркеры на карты  
    marker_Bib_move_O.removeFrom(map); 
    marker_Bib_move_O.addTo(map);
    marker_Bib_move_O.setLatLng([59.930710, 30.314916 ]);
    setInterval(move_O5_to_O6, 20);
    return;
} 

                function move_O5_to_O6() {
                    //59.930710, 30.314916
                    //59.931526, 30.303373
                    if( stop56==true) { 

                        var delx=59.931526 - 59.930710;
                        var dely=30.303373 - 30.314916;
                        
                    
                         var newLat = marker_Bib_move_O.getLatLng().lat+delx/100,
                             newLng = marker_Bib_move_O.getLatLng().lng+dely/100;
                       
                             marker_Bib_move_O.setLatLng([newLat, newLng]);
                    

                    if (marker_Bib_move_O.getLatLng().lng<30.303373){
                        marker_Bib_move_O.setLatLng([59.931526, 30.303373]);
                        if (marker_Bib_move_O.getLatLng().lng==30.303373 && marker_Bib_move_O.getLatLng().lat==59.931526){
                            console.log("stop56");
                            stop56=false;
                            clearTimeout(m0506);
                            clearInterval(move_O5_to_O6) 
                           setTimeout(m0607, 1000);
                        
                           return;
                    
                         }
                    }
                            }
                            else{
                                return; 
                            }
                }
//-----------------------------------------------------
function m0607(){
    
    setInterval(move_O6_to_O7, 20);
    return;

}
                    function move_O6_to_O7() {
                     //59.931526, 30.303373                  
                     //59.939762, 30.385730
                     if( stop67==true) { 

                            var delx67=59.939762 - 59.931526;
                            var dely67=30.385730 - 30.303373;
                            
                        
                             var newLat67 = marker_Bib_move_O.getLatLng().lat+delx67/100,
                                 newLng67 = marker_Bib_move_O.getLatLng().lng+dely67/100;
                           
                                 marker_Bib_move_O.setLatLng([newLat67, newLng67]);
                        
                        
                        if (marker_Bib_move_O.getLatLng().lng>30.385730){
                            marker_Bib_move_O.setLatLng([59.939762, 30.385730]);
                        

                               if (marker_Bib_move_O.getLatLng().lng==30.385730 && marker_Bib_move_O.getLatLng().lat==59.939762){
                                console.log("stop67");
                                stop67=false;
                                clearTimeout(m0607);
                                clearInterval(move_O6_to_O7); 
                               setTimeout(m1213, 1000);
                               marker_O7_Kirochnaya.addTo(map);

                               return;
                        
                             }
                        }
                                }
                                
                    }
   
   
         //-----------------ФИЛИАЛ №1----------------------

    //----------------------------------------------------                    
    function m1213(){
        marker_F1_2_Liteyniy.removeFrom(map);
        marker_Bib_move_F1.addTo(map); // добавляем все маркеры на карты  
        marker_Bib_move_F1.removeFrom(map); 
        marker_Bib_move_F1.addTo(map);
        marker_Bib_move_F1.setLatLng([59.943629, 30.348046]);
        setInterval(move_12_to_13, 20);
        return;

    }
                            function move_12_to_13() {
                                //59.943629, 30.348046
                                //59.940294, 30.355690
                                if( F1_stop12==true) { 
    
                                    var delx=59.940294 - 59.943629;
                                    var dely=30.355690 - 30.348046;
                                    
                                
                                     var F1_newLat12 = marker_Bib_move_F1.getLatLng().lat+delx/100,
                                         F1_newLng12 = marker_Bib_move_F1.getLatLng().lng+dely/100;
                                   
                                         marker_Bib_move_F1.setLatLng([F1_newLat12, F1_newLng12]);
                                
                                
                                if (marker_Bib_move_F1.getLatLng().lat<59.940294){
                                    marker_Bib_move_F1.setLatLng([59.940294, 30.355690]);
                                       // marker_Bib_move.removeFrom(map); // удаляем  мркер с карты 
    
                                     if (marker_Bib_move_F1.getLatLng().lng==30.355690 && marker_Bib_move_F1.getLatLng().lat==59.940294){
                                        console.log("T_stop12");
                                        F1_stop12=false;
                                        clearTimeout(m1213);
                                        clearInterval(move_12_to_13); 
                                        setTimeout(m0708,1000)
                                        marker_F1_3_Mayakovskaya.addTo(map);
                                       return;
                                
                                     }
                                }
                                        }
                                       
                            }        
                    




                        
                        
//-----------------------------------------------------
function m0708(){
    marker_O7_Kirochnaya.removeFrom(map);
    marker_Bib_move_O.addTo(map); // добавляем все маркеры на карты  
    marker_Bib_move_O.removeFrom(map); 
    marker_Bib_move_O.addTo(map);
    marker_Bib_move_O.setLatLng([59.939762, 30.385730]);
    setInterval(move_O7_to_O8, 20);
    return;

}
                        function move_O7_to_O8() {
                            //59.939762, 30.385730
                            //59.933433, 30.310873
                            if( stop78==true) { 

                                var delx=59.933433 - 59.939762;
                                var dely=30.310873 - 30.385730;
                                
                            
                                 var newLat = marker_Bib_move_O.getLatLng().lat+delx/100,
                                     newLng = marker_Bib_move_O.getLatLng().lng+dely/100;
                               
                                     marker_Bib_move_O.setLatLng([newLat, newLng]);
                            
                            
                            if (marker_Bib_move_O.getLatLng().lng<30.310873){
                                marker_Bib_move_O.setLatLng([59.933433, 30.310873]);
                                   // marker_Bib_move.removeFrom(map); // удаляем  мркер с карты 

                                 if (marker_Bib_move_O.getLatLng().lng==30.310873 && marker_Bib_move_O.getLatLng().lat==59.933433){
                                    console.log("stop78");
                                    stop78=false;
                                    clearTimeout(m0708);
                                    clearInterval(move_O7_to_O8); 
                                   marker_O8_Biblio.addTo(map);
                                   setTimeout(m2021,1000 );
    
                                   return;
                            
                                 }
                            }
                                    }
                                   
                        }
//----------------------------------------------

 //-----------------ФИЛИАЛ №2----------------------
//-----------------ФИЛИАЛ №2----------------------
function m2021(){
    marker_F2_1_Fontanka.removeFrom(map);
    marker_Bib_move_F2.addTo(map); // добавляем все маркеры на карты  
    marker_Bib_move_F2.removeFrom(map); 
    marker_Bib_move_F2.addTo(map);
    marker_Bib_move_F2.setLatLng([59.928812, 30.338811]);
       setInterval(move_20_to_21, 20);
       return;

}
                        function move_20_to_21() {
                            //59.928812, 30.338811
                            //59.920487, 30.343042
                            if( F2_stop01==true) { 

                                var delx=59.920487 - 59.928812;
                                var dely=30.343042 - 30.338811;
                                
                            
                                 var F2_newLat01 = marker_Bib_move_F2.getLatLng().lat+delx/100,
                                     F2_newLng01 = marker_Bib_move_F2.getLatLng().lng+dely/100;
                               
                                     marker_Bib_move_F2.setLatLng([F2_newLat01, F2_newLng01]);
                            
                            
                            if (marker_Bib_move_F2.getLatLng().lng>30.343042){
                                marker_Bib_move_F2.setLatLng([59.920487, 30.343042]);
                                   // marker_Bib_move.removeFrom(map); // удаляем  мркер с карты 

                                 if (marker_Bib_move_F2.getLatLng().lng==30.343042 && marker_Bib_move_F2.getLatLng().lat==59.920487){
                                    console.log("F2_stop01");
                                    F2_stop01=false;
                                    
                                    clearTimeout(m2021);
                                    clearInterval(move_20_to_21); 
                                    setTimeout(m30, 1000);
                                    marker_F2_2_Marata.addTo(map);
                                    
    
                                   return;
                            
                                 }
                            }
                                    }
                        }
    //---------------------------------------------------- 
    function m30(){
marker_F3_1_Sovet.addTo(map);
setTimeout(m40, 1000);
return;


    }
                 function m40(){
                    marker_F4_1_Novgor.addTo(map);
                    setTimeout(showAllMarkers,1000); 
                        return;

 
    }                                                           
//----------------------------------------
//----------------------------------------

    document.getElementById("hide_All").onclick = hideAllMarkers; //спрятать все геометки
    document.getElementById("show_All").onclick = showAllMarkers; //показать все геометки
    document.getElementById("show_move_markers").onclick = show_move_markers; //показать 2 геометки
    document.getElementById("show_F1").onclick = show_F1; //Показать движение филиала №3
    document.getElementById("show_F1_1").onclick = show_F1_1; //Показать движение филиала №3
    document.getElementById("show_F1_2").onclick = show_F1_2; //Показать движение филиала №3
    document.getElementById("show_F1_3").onclick = show_F1_3; //Показать движение филиала №3
    document.getElementById("show_F2").onclick = show_F2; //Показать движение филиала №3
    document.getElementById("show_F2_1").onclick = show_F2_1; //Показать движение филиала №3
    document.getElementById("show_F2_2").onclick = show_F2_2; //Показать движение филиала №3
    document.getElementById("show_F3").onclick = show_F3; //Показать движение филиала №3
    document.getElementById("show_F4").onclick = show_F4; //Показать движение филиала №3

  
    //централизация маркеров
    // group = DG.featureGroup([marker1, marker2, marker3, marker4, marker5, marker6]);
    // group.addTo(map);
    // group.on("click", function (e) {                //
    //     map.setView([e.latlng.lat, e.latlng.lng]);  // Централизация при клике на маркер 
    // });                                             //
    //----------------------------------------


    
    function hideAllMarkers() {
        markers.addTo(map);
        markers.removeFrom(map);
        STOP();
        DG.then(function () {
            DG.popup({
                maxWidth: 1,
                sprawling: false,
                autoPan: false
            })
                .setLatLng([20.092001, 30.032001]) // это костыль!!! без него  PopUp от предыдущего маркера  не исчезает 
                .setContent('') // :)
                 .openOn(map);
        })
        
    }

    function show_move_markers() {
        DG.then(function () {
            DG.popup({
                maxWidth: 1,
                sprawling: false,
                autoPan: false
            })
                .setLatLng([20.092001, 30.032001]) // это костыль!!! без него  PopUp от предыдущего маркера  не исчезает 
                .setContent('') // :)
                 .openOn(map);
        })
        
        STOP();

        start_all();
        F1_start_all();
        F2_start_all();
        m0001();
        //setTimeout(m0001, 100);

        
    }

    
   

    function show_F1() {
        STOP();

        DG.then(function () {
            DG.popup({
                maxWidth: 1,
                sprawling: false,
                autoPan: false
            })
                .setLatLng([20.092001, 30.032001]) // это костыль!!! без него  PopUp от предыдущего маркера  не исчезает 
                .setContent('Пасхалка в коде ))))') // :)
                 .openOn(map);
        })
        map.setView([59.943629, 30.348046]);
       marker_F1_1_Cherneshevskaya.addTo(map);
       marker_F1_2_Liteyniy.addTo(map);
       marker_F1_3_Mayakovskaya.addTo(map);
        

         map.fitBounds(marker_F1_1_Cherneshevskaya.getBounds());
         map.fitBounds(marker_F1_2_Liteyniy.getBounds());
         map.fitBounds(marker_F1_3_Mayakovskaya.getBounds());
       
        group = DG.featureGroup([marker_F1_1_Cherneshevskaya,marker_F1_2_Liteyniy, marker_F1_3_Mayakovskaya]);
         group.addTo(map);
       
        
       

        // функция выпадающее меню для группы из трех
    }

    function show_F1_1() {
        STOP();
        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
            
                .setLatLng([ 59.944576, 30.358772])
                .setContent('пр. Чернышевского, д. 17 ')
                .openOn(map);
                map.setView([ 59.944576, 30.358772]);
                

        })
    
       
       //infoframe.src = "   ";
      marker_F1_1_Cherneshevskaya.addTo(map);
      
    }
    function show_F1_2() {
        STOP();
        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
            
                .setLatLng([59.943629, 30.348046])
                .setContent('Литейный пр., д. 19  ')
                .openOn(map);
                map.setView([59.943629, 30.348046]);
                

        })
    
       
       //infoframe.src = "   ";
      marker_F1_2_Liteyniy.addTo(map);
      
    }

    function show_F1_3() {
        STOP();
        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
            
                .setLatLng([59.940294, 30.355690])
                .setContent('СПб ГБУК "Центральная городская детская библиотека им. А.С. Пушкина". Филиал 2')
                .openOn(map);
                map.setView([59.940294, 30.355690]);
                

        })
    
       
       //infoframe.src = "   ";
      marker_F1_3_Mayakovskaya.addTo(map);
      
    }
    function show_F2() {
        STOP();
        DG.then(function () {
            DG.popup({
                maxWidth: 1,
                sprawling: false,
                autoPan: false
            })
                .setLatLng([20.092001, 30.032001]) // это костыль!!! без него  PopUp от предыдущего маркера  не исчезает 
                .setContent('Пасхалка в коде ))))') // :)
                 .openOn(map);
        })
        
        map.setView([59.928812, 30.338811]);

        marker_F2_1_Fontanka.addTo(map);
        marker_F2_2_Marata.addTo(map);
    }

    function show_F2_1() {
        STOP();

        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
                .setLatLng([59.928812, 30.338811])
                .setContent('наб. реки Фонтанки, д. 62  ')
                .openOn(map);
                map.setView([59.928812, 30.338811]);
        })
       marker_F2_1_Fontanka.addTo(map);
    }
    function show_F2_2() {
        STOP();

        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
                .setLatLng([59.920487, 30.343042])
                .setContent('ул. Марата, д. 72  ')
                .openOn(map);
                map.setView([59.920487, 30.343042]);
        })
       STOP();
       marker_F2_2_Marata.addTo(map);
    }
    function show_F3() {
        STOP();

        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
                .setLatLng([59.933541, 30.366758])
                .setContent('ул. 3-я Советская, д. 8, л. А')
                .openOn(map);
                map.setView([59.933541, 30.366758]);
        })
       marker_F3_1_Sovet.addTo(map);
    }
    function show_F4() {
        STOP();

        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
                .setLatLng([59.933000, 30.384517])
                .setContent('ул. Новгородская, д. 5, л. А   ')
                .openOn(map);
                map.setView([59.933000, 30.384517]);
        })
       marker_F4_1_Novgor.addTo(map);
    }
    

    function showAllMarkers() {
      STOP();

        markers.removeFrom(map);
        markers.addTo(map);
        map.fitBounds(markers.getBounds());
        // group = DG.featureGroup([marker1, marker2, marker3, marker4, marker5]);
        // group.addTo(map);
        
        // Функция показывает все маркеры на карте
    }
 
 

    //----------------------------------------

    // Прорисовка группы маркеров на карте
    markers.addTo(map);
    // Центровка карты по группе маркеров
    map.fitBounds(markers.getBounds());


    // Обработка событий маркеров и смена в iframe


    marker_O0_Krukov.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/KrukovFrame.html";
    });
    
    marker_O1_Oficerskaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/OficerFrame.html";//Офицерская ул., д. 39
    });

    marker_O2_Sadovay.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/SadovayaFrame.html";//Садовая ул., д. 104
    });

    marker_O3_Masterskaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/MasterskayaFrame.html";//Мастерская ул., д. 10
    });

    marker_O4_Grajdanskay.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/GrazdanskayaFrame.html";//Гражданская ул., д. 26 
    });

    marker_O5_Grivcova.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/DemidovFrame.html";//Демидов пер. (пер. Гривцова), д. 8  
    });

    marker_O6_BolMorskaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/Gercen2Frame.html";//Герцена ул. (Большая Морская), д. 53-8 
    });

    marker_O7_Kirochnaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/SaltikovaFrame.html";//Салтыкова-Щедрина ул. (Кирочная), д. 61
    });

 

    marker_F1_1_Cherneshevskaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/ChernishevskayaFrame.html";//пр. Чернышевского, д. 17
    });

    marker_F1_2_Liteyniy.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/LiteyniyFrame.html";//Литейный пр., д. 19
    });

    marker_F1_3_Mayakovskaya.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/MayakovskayaFrame.html";//ул. Маяковского, д. 27
    });

    marker_F2_1_Fontanka.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/FontankaFrame.html";//наб. реки Фонтанки, д. 62
    });

    marker_F2_2_Marata.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/MarataFrame.html";//ул. Марата, д. 72
    });

    marker_F3_1_Sovet.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/SovetskayaFrame.html";//ул. 3-я Советская, д. 8, л. А
    });

    marker_F4_1_Novgor.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "Frame/NovgorodskayaFrame.html";//ул. Новгородская, д. 5, л. А
    });
});
//----------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//выпадающее меню
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};


//---------------------------------------------------------------
