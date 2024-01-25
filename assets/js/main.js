


var map = L.map("map").setView([25.04102, 121.61145], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
map.attributionControl.addAttribution('&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>');






L.marker([25.04102, 121.61145])
    
    .addTo(map)
    .bindPopup("<strong>中央研究院人文社會科學館</strong><br>台北市南港區研究院路二段128號").openPopup();
    













L.polygon([[25.0410149, 121.6109568],[25.0409351, 121.6109846],[25.0408678, 121.6110085],[25.0408019, 121.6110475],[25.0408769, 121.6118288],[25.0409575, 121.611823],[25.0410955, 121.6118006],[25.0412114, 121.6117509],[25.041324, 121.6116895],[25.0410149, 121.6109568]], {color: '#ff6b6b'})
    
    .addTo(map);
    


