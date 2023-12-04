# twoGisMAPlib
Интерактивная карта написанная для СПб ГБУК Центральная городская детская библиотека им. А. С. Пушкина.
На карте можно посмотреть историю библиотеки и ее филиалов.
Карта написана с использованием технологий HTML, CSS и JavaScript, что позволяет ей работать в любом современном браузере.

•	Основной HTML файл (map.html)
•	СSS файл (style.css)
•	JavaScript файл (bibaddress.js)
•	Необходимое количество HTML файлов для Iframe (cgdbf.html; cgdbf1.html; cgdbf2.html; cgdbf3.html; cgdbf4.html; defaut.html)
 
**Страница с картой**

![image](https://github.com/RomanNoyanov/twoGisMAPlib/assets/67968329/8b401a24-fb08-40a3-b53d-6624f31ee42a)

**Карта**
1.Подключение API 2GIS
Для добавления карты на страницу необходимо: 
подключение API  в HTML файле
```
<head>
       <script src="https://maps.api.2gis.ru/2.0/loader.js"></script>
</head>
```

•	добавление в <body> блока  <div> c id=”map”
 ```
<div id="map"></div>
```


2.Переходим в JavaScript 
Воспользуемся функцией DG.then, в которую поместим код инициализации карты:
```
DG.then(function () {
    var map = DG.map("map", {
        center: [59.934, 30.311],
        fullscreenControl: false,
        maxBounds: [
            [59.54, 29.92],
            [61.25, 32.65],
        ],
        minZoom: 10,
    });
```

Опишем каждую строку:

•	**center: [59.934, 30.311]** – указание центра карты при ее отображении;
•	**fullscreenControl: false** –Удаление элемента управления “На весь экран”
•	**maxBounds: [[59.54, 29.92], [61.25, 32.65], ]** – координаты с ограничением просматриваемой пользователем области
•	**minZoom:10** – ограничение масштаба карты при взаимодействие с картой пользователем

**Метки и Popup**

Пример отображения маркера и работы PopUp

 ![image](https://github.com/RomanNoyanov/twoGisMAPlib/assets/67968329/b1027d55-a92c-4adc-bbad-846f36df8663)



3.Инициализация группы маркеров.
```
// Группы маркеров
    var markers = DG.featureGroup();
    var group;
```

Инициализация иконки:
```
var myIcon = DG.icon({  // инициализация иконки 
        iconUrl: "img/logo.png", // ссылка на файл с иконкой 
        iconSize: [48, 48], // размер иконки 
    });
```

После создания карты можно отобразить на ней маркер, добавив строки:
```
var marker1 = DG.marker([59.93353, 30.3107],  
{icon: myIcon}).addTo(markers).bindPopup('СПб ГБУК "Центральная городская детская библиотека им. А.С. Пушкина"');
```


Опишем каждую строку:
•	**DG.marker([59.93353, 30.3107] **– координаты расположения маркера.
•	**{icon: myIcon})** – иконка отображения маркера, ее инициализация описана выше.
•	**addTo(markers)** – добавление маркера при взаимодействии с ним 
•	**bindPopup('СПб ГБУК "Центральная городская детская библиотека им. А.С. Пушкина"')** – описание текста PopUp 


Добавление созданных маркеров в группу  и централизация маркера при нажатии на него 
```
group = DG.featureGroup([marker1, marker2, marker3, marker4, marker5]);
    group.addTo(map);
    group.on("click", function (e) {
        map.setView([e.latlng.lat, e.latlng.lng]);
    });
```



Взаимодействие с iframe
HTML код
```
<div id="infobox">
                <iframe id="info" name="info" scrolling="no" frameborder="no" src="default.html" hspase="5">

                </iframe>
            </div>
```

При нажатии на маркер происходит смена страницы в ifram.
В JavaScript прописываем данную функцию и необходимое количество аналогичных функций с измененной ссылкой на html файл   
 ```
marker1.on("click", function (e) {
        infobox.style.visibility = "visible";
        infoframe.src = "cgdb.html"; // ссылка на html файл 
    });
```



**Выпадающее меню**

Пример отображения выпадающего меню

 ![image](https://github.com/RomanNoyanov/twoGisMAPlib/assets/67968329/dae0719a-fb8d-403d-8dd2-bcb80fe3b76c)




В HTML коде создаем маркированный список с кнопками.
```
<div class='ad-menu'>
    <nav>
        <ul class="topmenu">
            <li>
                <a><input id="show_All" class="buttonMenu" type="button" value="Показать все маркеры" /></a>
                <ul class="submenu">
                    <li>
                        <a><input id="marker1_show"  class="buttonMenu" type="button" value="ЦГБД" /></a>
                    </li>
                    <li>
                        <a><input id="marker2_show" class="buttonMenu" type="button" value="Филиал 1" /></a>
                    </li>
                    <li>
                        <a><input id="marker3_show" class="buttonMenu" type="button" value="Филиал 2" /></a>
                    </li>
                    <li>
                        <a><input id="marker4_show" class="buttonMenu" type="button" value="Филиал 3" /></a>
                    </li>
                    <li>
                        <a><input id="marker5_show" class="buttonMenu" type="button" value="Филиал 4" /></a>
                    </li>
                </ul>
            </li>
            <li>
                <a><input id="show_two_markers" class="buttonMenu" type="button" value="Показать 2 маркера" /></a>
               
    <ul class="submenu">
                    <li>
                        <a><input id="show_first_marker" class="buttonMenu" type="button" value="ЦГБД" /></a>
                    </li>
                    <li>
                        <a><input id="show_second_marker" class="buttonMenu" type="button" value="Филиал 1" /></a>
                    </li>
                </ul>
            </li>

            <li>
                <a><input id="show_three_markers" class="buttonMenu" type="button" value="Показать 3 маркера" /></a>
            
                <ul class="submenu">
                    <li>
                        <a><input id="show_third_marker" class="buttonMenu" type="button" value="Филиал 2" /></a>
                    </li>
                    <li>
                        <a><input id="show_fourth_marker" class="buttonMenu" type="button" value="Филиал 3" /></a>
                    </li>
                    <li>
                        <a><input id="show_five_marker" class="buttonMenu" type="button" value="Филиал 4" /></a>
                    </li>
                </ul>
            </li>
            <li>
                <a><input id="hide_All" class="buttonMenu" type="button" value="Спрятать все маркеры" /></a>
            </li>
        </ul>
    </nav>
    
    </div>
```



В JavaScrip инициализируем кнопки из созданного списка.
```
document.getElementById("hide_All").onclick = hideAllMarkers; 
//спрятать все геометки
    document.getElementById("show_All").onclick = showAllMarkers; 
//показать все геометки
    document.getElementById("show_two_markers").onclick = show_two_markers; 
//показать 2 геометки
    document.getElementById("show_three_markers").onclick = show_three_markers; 
//спрятать 3 геометки
    document.getElementById("marker1_show").onclick = marker1_show;
 //Показать 1 маркер
    document.getElementById("marker2_show").onclick = marker2_show; 
//Показать 2 маркер
    document.getElementById("marker3_show").onclick = marker3_show;
 //Показать 3 маркер
    document.getElementById("marker4_show").onclick = marker4_show;
 //Показать 4 маркер
    document.getElementById("marker5_show").onclick = marker5_show; 
//Показать 5 маркер
    document.getElementById("show_first_marker").onclick = show_first_marker; 
//Показать 1 маркер в выпадающем меню
    document.getElementById("show_second_marker").onclick = show_second_marker; 
//Показать 2 маркер в выпадающем меню
    document.getElementById("show_third_marker").onclick = show_third_marker; 
//Показать 3 маркер в выпадающем меню
    document.getElementById("show_fourth_marker").onclick = show_fourth_marker; 
//Показать 4 маркер в выпадающем меню
    document.getElementById("show_five_marker").onclick = show_five_marker; 
//Показать 5 маркер в выпадающем меню
```

Приведен пример нескольких функций для меню, все остальные функции пишутся по аналогии.
Функция которая показывает только два маркера.
```
function show_two_markers() {
        markers.addTo(map); // добавляем все маркеры на карты 
        markers.removeFrom(map); // удаляем все мркеры с карты 
        marker1.addTo(map); // добавляем маркер marker1 на карту 
        marker2.addTo(map);// добавляем маркер marker2 на карту 
        map.fitBounds(marker1.getBounds());
        map.fitBounds(marker2.getBounds());
        group = DG.featureGroup([marker1, marker2]);
        group.addTo(map);
```


Функция которая выводит popup, показывает один маркер на карте и изменяет iframe 
```
function marker1_show() {
        DG.then(function () {
            DG.popup({
                maxWidth: 350,
                sprawling: true
            })
                .setLatLng([59.93353, 30.3107])
                .setContent('СПб ГБУК "Центральная городская детская библиотека им. А.С. Пушкина"')
                .openOn(map);
                map.setView([59.93353, 30.3107]);
        })
        
        infobox.style.visibility = "visible";
        infoframe.src = "cgdb.html";
        markers.addTo(map);
        markers.removeFrom(map);
        marker1.addTo(map);
        map.fitBounds(marker1.getBounds());
        group = DG.featureGroup([marker1]);
        group.addTo(map);
        
    }
```
Опишем каждую строку:
•	DG.then(function () – функция отображения PopUp
o	 DG.popup({ - параметры PopUp
	maxWidth: 350 – максимальная ширина Popup 
	 sprawling: true –растягивание Popup по контенту внутри
o	 .setLatLng([59.93353, 30.3107]) – координаты расположения Popup 
o	 .setContent('СПб ГБУК "Центральная городская детская библиотека им. А.С. Пушкина"') - описание текста PopUp
o	 .openOn(map); - открытие PopUp на map
o	  map.setView([59.93353, 30.3107]); - централизация PopUp на середине карты
•	infobox.style.visibility = "visible"; - отображение iframe  
•	 infoframe.src = "cgdb.html"; - ссылка на html файл для изменения iframe 
•	   markers.addTo(map); - добавление всех маркеров на карту 
•	markers.removeFrom(map);- удаление предыдущих маркеров с карты 
•	marker1.addTo(map); - добавление маркера на карту 


**Адаптивная верстка**
Для адаптации сайт к любому разрешению экрана, подключили Flexbox Grid.
```
<head>
 <link rel="stylesheet" 
href="https://unpkg.com/flexboxgrid2@7.2.1/flexboxgrid2.min.css" />
</head>
```
Адаптивные модификаторы позволяют указывать различные размеры столбцов, смещения, выравнивание и распределение при ширине окна просмотра xs, sm, md и lg.
 ```
<div class="cards">

        <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
            <div id="map"></div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
            <div id="infobox">
                <iframe id="info" name="info" scrolling="no" frameborder="no" 
                    src="default.html" hspase="5">

                </iframe>
            </div>
        </div>
```
Пример работы сайта на экране размера lg

 ![image](https://github.com/RomanNoyanov/twoGisMAPlib/assets/67968329/20429f4d-a2f6-420e-b80f-597c5f12c4ef)





Пример работы сайта на экране размером sm

![image](https://github.com/RomanNoyanov/twoGisMAPlib/assets/67968329/16684801-1482-400d-ae50-ef651538777f)







**Ссылки на источники:**

https://api.2gis.ru/doc/maps/ru/quickstart/ - документация API 2GIS

http://flexboxgrid.com/ - документация FlexBox Grid

 

