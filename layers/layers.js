var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CityofLiterature_60Min_1 = new ol.format.GeoJSON();
var features_CityofLiterature_60Min_1 = format_CityofLiterature_60Min_1.readFeatures(json_CityofLiterature_60Min_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityofLiterature_60Min_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityofLiterature_60Min_1.addFeatures(features_CityofLiterature_60Min_1);
var lyr_CityofLiterature_60Min_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityofLiterature_60Min_1, 
                style: style_CityofLiterature_60Min_1,
                interactive: true,
                title: '<img src="styles/legend/CityofLiterature_60Min_1.png" /> City of Literature_60Min'
            });
var format_CityofMusic_60Min_2 = new ol.format.GeoJSON();
var features_CityofMusic_60Min_2 = format_CityofMusic_60Min_2.readFeatures(json_CityofMusic_60Min_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CityofMusic_60Min_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CityofMusic_60Min_2.addFeatures(features_CityofMusic_60Min_2);
var lyr_CityofMusic_60Min_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CityofMusic_60Min_2, 
                style: style_CityofMusic_60Min_2,
                interactive: true,
                title: '<img src="styles/legend/CityofMusic_60Min_2.png" /> City of Music_60Min'
            });
var format_HambacherSchloss_60Min_3 = new ol.format.GeoJSON();
var features_HambacherSchloss_60Min_3 = format_HambacherSchloss_60Min_3.readFeatures(json_HambacherSchloss_60Min_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HambacherSchloss_60Min_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HambacherSchloss_60Min_3.addFeatures(features_HambacherSchloss_60Min_3);
var lyr_HambacherSchloss_60Min_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HambacherSchloss_60Min_3, 
                style: style_HambacherSchloss_60Min_3,
                interactive: true,
                title: '<img src="styles/legend/HambacherSchloss_60Min_3.png" /> Hambacher Schloss_60Min'
            });
var format_KlosterLorch_60Min_4 = new ol.format.GeoJSON();
var features_KlosterLorch_60Min_4 = format_KlosterLorch_60Min_4.readFeatures(json_KlosterLorch_60Min_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlosterLorch_60Min_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlosterLorch_60Min_4.addFeatures(features_KlosterLorch_60Min_4);
var lyr_KlosterLorch_60Min_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KlosterLorch_60Min_4, 
                style: style_KlosterLorch_60Min_4,
                interactive: true,
                title: '<img src="styles/legend/KlosterLorch_60Min_4.png" /> Kloster Lorch_60Min'
            });
var format_Saline_DW_60Min_5 = new ol.format.GeoJSON();
var features_Saline_DW_60Min_5 = format_Saline_DW_60Min_5.readFeatures(json_Saline_DW_60Min_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Saline_DW_60Min_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saline_DW_60Min_5.addFeatures(features_Saline_DW_60Min_5);
var lyr_Saline_DW_60Min_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Saline_DW_60Min_5, 
                style: style_Saline_DW_60Min_5,
                interactive: true,
                title: '<img src="styles/legend/Saline_DW_60Min_5.png" /> Saline_DÜW_60Min'
            });
var format_SchlossSchwetzingen_60Min_6 = new ol.format.GeoJSON();
var features_SchlossSchwetzingen_60Min_6 = format_SchlossSchwetzingen_60Min_6.readFeatures(json_SchlossSchwetzingen_60Min_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchlossSchwetzingen_60Min_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchlossSchwetzingen_60Min_6.addFeatures(features_SchlossSchwetzingen_60Min_6);
var lyr_SchlossSchwetzingen_60Min_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SchlossSchwetzingen_60Min_6, 
                style: style_SchlossSchwetzingen_60Min_6,
                interactive: true,
                title: '<img src="styles/legend/SchlossSchwetzingen_60Min_6.png" /> Schloss Schwetzingen_60Min'
            });
var format_SpeyererDom_60Min_7 = new ol.format.GeoJSON();
var features_SpeyererDom_60Min_7 = format_SpeyererDom_60Min_7.readFeatures(json_SpeyererDom_60Min_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SpeyererDom_60Min_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SpeyererDom_60Min_7.addFeatures(features_SpeyererDom_60Min_7);
var lyr_SpeyererDom_60Min_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SpeyererDom_60Min_7, 
                style: style_SpeyererDom_60Min_7,
                interactive: true,
                title: '<img src="styles/legend/SpeyererDom_60Min_7.png" /> Speyerer Dom_60Min'
            });
var format_TechnikMuseumSinsheim_60Min_8 = new ol.format.GeoJSON();
var features_TechnikMuseumSinsheim_60Min_8 = format_TechnikMuseumSinsheim_60Min_8.readFeatures(json_TechnikMuseumSinsheim_60Min_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TechnikMuseumSinsheim_60Min_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TechnikMuseumSinsheim_60Min_8.addFeatures(features_TechnikMuseumSinsheim_60Min_8);
var lyr_TechnikMuseumSinsheim_60Min_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TechnikMuseumSinsheim_60Min_8, 
                style: style_TechnikMuseumSinsheim_60Min_8,
                interactive: true,
                title: '<img src="styles/legend/TechnikMuseumSinsheim_60Min_8.png" /> Technik Museum Sinsheim_60Min'
            });
var format_Metropolregion_RichtigeProjektion_9 = new ol.format.GeoJSON();
var features_Metropolregion_RichtigeProjektion_9 = format_Metropolregion_RichtigeProjektion_9.readFeatures(json_Metropolregion_RichtigeProjektion_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Metropolregion_RichtigeProjektion_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metropolregion_RichtigeProjektion_9.addFeatures(features_Metropolregion_RichtigeProjektion_9);
var lyr_Metropolregion_RichtigeProjektion_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Metropolregion_RichtigeProjektion_9, 
                style: style_Metropolregion_RichtigeProjektion_9,
                interactive: true,
                title: '<img src="styles/legend/Metropolregion_RichtigeProjektion_9.png" /> Metropolregion_RichtigeProjektion'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CityofLiterature_60Min_1.setVisible(true);lyr_CityofMusic_60Min_2.setVisible(true);lyr_HambacherSchloss_60Min_3.setVisible(true);lyr_KlosterLorch_60Min_4.setVisible(true);lyr_Saline_DW_60Min_5.setVisible(true);lyr_SchlossSchwetzingen_60Min_6.setVisible(true);lyr_SpeyererDom_60Min_7.setVisible(true);lyr_TechnikMuseumSinsheim_60Min_8.setVisible(true);lyr_Metropolregion_RichtigeProjektion_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CityofLiterature_60Min_1,lyr_CityofMusic_60Min_2,lyr_HambacherSchloss_60Min_3,lyr_KlosterLorch_60Min_4,lyr_Saline_DW_60Min_5,lyr_SchlossSchwetzingen_60Min_6,lyr_SpeyererDom_60Min_7,lyr_TechnikMuseumSinsheim_60Min_8,lyr_Metropolregion_RichtigeProjektion_9];
lyr_CityofLiterature_60Min_1.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_CityofMusic_60Min_2.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_HambacherSchloss_60Min_3.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_KlosterLorch_60Min_4.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_Saline_DW_60Min_5.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_SchlossSchwetzingen_60Min_6.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_SpeyererDom_60Min_7.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_TechnikMuseumSinsheim_60Min_8.set('fieldAliases', {'id': 'id', 'prop_is_on': 'prop_is_on', 'Dauer': 'Dauer', 'EWZ': 'EWZ', 'Einwohner_': 'Einwohner_', });
lyr_Metropolregion_RichtigeProjektion_9.set('fieldAliases', {'USE': 'USE', 'RS': 'RS', 'RS_ALT': 'RS_ALT', 'GEN': 'GEN', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', });
lyr_CityofLiterature_60Min_1.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_CityofMusic_60Min_2.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_HambacherSchloss_60Min_3.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_KlosterLorch_60Min_4.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_Saline_DW_60Min_5.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_SchlossSchwetzingen_60Min_6.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_SpeyererDom_60Min_7.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_TechnikMuseumSinsheim_60Min_8.set('fieldImages', {'id': '', 'prop_is_on': '', 'Dauer': '', 'EWZ': '', 'Einwohner_': '', });
lyr_Metropolregion_RichtigeProjektion_9.set('fieldImages', {'USE': '', 'RS': '', 'RS_ALT': '', 'GEN': '', 'SHAPE_LENG': '', 'SHAPE_AREA': '', });
lyr_CityofLiterature_60Min_1.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_CityofMusic_60Min_2.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_HambacherSchloss_60Min_3.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_KlosterLorch_60Min_4.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_Saline_DW_60Min_5.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_SchlossSchwetzingen_60Min_6.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_SpeyererDom_60Min_7.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_TechnikMuseumSinsheim_60Min_8.set('fieldLabels', {'id': 'no label', 'prop_is_on': 'no label', 'Dauer': 'no label', 'EWZ': 'no label', 'Einwohner_': 'no label', });
lyr_Metropolregion_RichtigeProjektion_9.set('fieldLabels', {'USE': 'no label', 'RS': 'no label', 'RS_ALT': 'no label', 'GEN': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', });
lyr_Metropolregion_RichtigeProjektion_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});