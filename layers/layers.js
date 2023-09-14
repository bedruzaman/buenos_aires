var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_REFERENCELAYER_1 = new ol.format.GeoJSON();
var features_REFERENCELAYER_1 = format_REFERENCELAYER_1.readFeatures(json_REFERENCELAYER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REFERENCELAYER_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REFERENCELAYER_1.addFeatures(features_REFERENCELAYER_1);
var lyr_REFERENCELAYER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REFERENCELAYER_1, 
                style: style_REFERENCELAYER_1,
                interactive: false,
                title: '<img src="styles/legend/REFERENCELAYER_1.png" /> REFERENCE LAYER'
            });
var format_S2_UNET_PREDICTION_2 = new ol.format.GeoJSON();
var features_S2_UNET_PREDICTION_2 = format_S2_UNET_PREDICTION_2.readFeatures(json_S2_UNET_PREDICTION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S2_UNET_PREDICTION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S2_UNET_PREDICTION_2.addFeatures(features_S2_UNET_PREDICTION_2);
var lyr_S2_UNET_PREDICTION_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_S2_UNET_PREDICTION_2, 
                style: style_S2_UNET_PREDICTION_2,
                interactive: false,
                title: '<img src="styles/legend/S2_UNET_PREDICTION_2.png" /> S2_UNET_PREDICTION'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_REFERENCELAYER_1.setVisible(true);lyr_S2_UNET_PREDICTION_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_REFERENCELAYER_1,lyr_S2_UNET_PREDICTION_2];
lyr_REFERENCELAYER_1.set('fieldAliases', {'renabap_id': 'renabap_id', 'nombre_barrio': 'nombre_barrio', 'provincia': 'provincia', 'departamento': 'departamento', 'localidad': 'localidad', 'cantidad_familias_aproximada': 'cantidad_familias_aproximada', 'cantidad_viviendas_aproximadas': 'cantidad_viviendas_aproximadas', 'decada_de_creacion': 'decada_de_creacion', 'anio_de_creacion': 'anio_de_creacion', 'energia_electrica': 'energia_electrica', 'efluentes_cloacales': 'efluentes_cloacales', 'agua_corriente': 'agua_corriente', 'cocina': 'cocina', 'calefaccion': 'calefaccion', 'situacion_dominial': 'situacion_dominial', 'clasificacion_barrio': 'clasificacion_barrio', 'superficie_m2': 'superficie_m2', });
lyr_S2_UNET_PREDICTION_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'area': 'area', });
lyr_REFERENCELAYER_1.set('fieldImages', {'renabap_id': '', 'nombre_barrio': '', 'provincia': '', 'departamento': '', 'localidad': '', 'cantidad_familias_aproximada': '', 'cantidad_viviendas_aproximadas': '', 'decada_de_creacion': '', 'anio_de_creacion': '', 'energia_electrica': '', 'efluentes_cloacales': '', 'agua_corriente': '', 'cocina': '', 'calefaccion': '', 'situacion_dominial': '', 'clasificacion_barrio': '', 'superficie_m2': '', });
lyr_S2_UNET_PREDICTION_2.set('fieldImages', {'fid': '', 'DN': '', 'area': '', });
lyr_REFERENCELAYER_1.set('fieldLabels', {'renabap_id': 'no label', 'nombre_barrio': 'no label', 'provincia': 'no label', 'departamento': 'no label', 'localidad': 'no label', 'cantidad_familias_aproximada': 'no label', 'cantidad_viviendas_aproximadas': 'no label', 'decada_de_creacion': 'no label', 'anio_de_creacion': 'no label', 'energia_electrica': 'no label', 'efluentes_cloacales': 'no label', 'agua_corriente': 'no label', 'cocina': 'no label', 'calefaccion': 'no label', 'situacion_dominial': 'no label', 'clasificacion_barrio': 'no label', 'superficie_m2': 'no label', });
lyr_S2_UNET_PREDICTION_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'area': 'no label', });
lyr_S2_UNET_PREDICTION_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});