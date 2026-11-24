ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([11.477933, 3.364147, 13.008207, 4.095477]);
var wms_layers = [];


        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Directionroad_1 = new ol.format.GeoJSON();
var features_Directionroad_1 = format_Directionroad_1.readFeatures(json_Directionroad_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Directionroad_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Directionroad_1.addFeatures(features_Directionroad_1);
var lyr_Directionroad_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Directionroad_1, 
                style: style_Directionroad_1,
                popuplayertitle: 'Direction road',
                interactive: true,
                title: '<img src="styles/legend/Directionroad_1.png" /> Direction road'
            });
var format_Base_2 = new ol.format.GeoJSON();
var features_Base_2 = format_Base_2.readFeatures(json_Base_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Base_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Base_2.addFeatures(features_Base_2);
var lyr_Base_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Base_2, 
                style: style_Base_2,
                popuplayertitle: 'Base',
                interactive: true,
    title: 'Base<br />\
    <img src="styles/legend/Base_2_0.png" /> Yaounde HO<br />\
    <img src="styles/legend/Base_2_1.png" /> Field Base<br />' });
var format_MainLocality_3 = new ol.format.GeoJSON();
var features_MainLocality_3 = format_MainLocality_3.readFeatures(json_MainLocality_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MainLocality_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainLocality_3.addFeatures(features_MainLocality_3);
var lyr_MainLocality_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainLocality_3, 
                style: style_MainLocality_3,
                popuplayertitle: 'Main Locality',
                interactive: true,
                title: '<img src="styles/legend/MainLocality_3.png" /> Main Locality'
            });

lyr_EsriSatellite_0.setVisible(true);lyr_Directionroad_1.setVisible(true);lyr_Base_2.setVisible(true);lyr_MainLocality_3.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_Directionroad_1,lyr_Base_2,lyr_MainLocality_3];
lyr_Directionroad_1.set('fieldAliases', {'Id': 'Id', });
lyr_Base_2.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_MainLocality_3.set('fieldAliases', {'type_': 'type_', 'nom_lieu': 'nom_lieu', 'Directives': 'Directives', });
lyr_Directionroad_1.set('fieldImages', {'Id': 'Range', });
lyr_Base_2.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', });
lyr_MainLocality_3.set('fieldImages', {'type_': 'TextEdit', 'nom_lieu': 'TextEdit', 'Directives': 'TextEdit', });
lyr_Directionroad_1.set('fieldLabels', {'Id': 'no label', });
lyr_Base_2.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_MainLocality_3.set('fieldLabels', {'type_': 'no label', 'nom_lieu': 'no label', 'Directives': 'no label', });
lyr_MainLocality_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});