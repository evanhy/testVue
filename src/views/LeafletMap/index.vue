<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import statesData from "@/views/LeafletMap/us-states";

defineOptions({
    name: 'LeafletMap',
})
const mapLeaflet = ref(null)

onMounted(() => {
    const map = L.map(mapLeaflet.value, {
        center: [30.196313, 120.213224], // 地图中心
        zoom: 14,   //缩放比列
        // zoomControl: false, //禁用 + - 按钮
        // doubleClickZoom: false,  // 禁用双击放大
        attributionControl: false  // 移除右下角leaflet标识
    });

    // 加载底图
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map)

    // 绘制圆形
    // color : 圆形边框颜色
    // fillColor : 圆形填充色
    // fillOpacity : 填充色透明度
    // radius : 半径
    const circle = L.circle([30.196313, 120.213224], {
        color: "red",
        fillColor: "pink",
        fillOpacity: 0.3,
        radius: 1200,
    }).addTo(map);

    // 多边形 对应数组中的点
    const polygon = L.polygon(
        [
            [30.239705, 120.181681],
            [30.220720, 120.275236],
            [30.157956, 120.258413],
            [30.144151, 120.165716],
        ],
        {
            color: "#873324",
        }
    ).addTo(map);

    // Popup 标记
    // 在options 新增 draggable: true 就可以拖拽，draggable 默认为false
    L.marker([30.196313, 120.213224], {
        draggable: true
    }).addTo(map)
        .bindPopup('我是一个Popup')

    const popup = L.popup();

    // 自己设置经纬度展示信息
    popup
        .setLatLng([30.206628, 120.206400])
        .setContent("I am a standalone popup.")
        .openOn(map);

    // 点击事件
    map.on("click", (e) => {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    });

    // ------------- GeoJSON 互动式地图 https://leafletjs.com/examples/choropleth/ S
    let geojson = L.geoJson(statesData).addTo(map);

    function getColor(d) {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
                d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                        d > 50 ? '#FD8D3C' :
                            d > 20 ? '#FEB24C' :
                                d > 10 ? '#FED976' :
                                    '#FFEDA0';
    }

    function style(feature) {
        return {
            fillColor: getColor(feature.properties.density),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

    L.geoJson(statesData, {style: style}).addTo(map);

    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 5,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.7
        });

        layer.bringToFront();
        info.update(layer.feature.properties);
    }


    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        info.update();
    }

    function zoomToFeature(e) {
        map.fitBounds(e.target.getBounds());
    }

    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: onEachFeature
    }).addTo(map);
    // ---------- 右下 + 右上图例 ------------
    const info = L.control();

    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

// method that we will use to update the control based on feature properties passed
    info.update = function (props) {
        this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
            '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
            : 'Hover over a state');
    };

    info.addTo(map);

    const legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {

        const div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 10, 20, 50, 100, 200, 500, 1000],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (let i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(map);
    // ------------- GeoJSON 互动式地图 https://leafletjs.com/examples/choropleth/ E
//     todo: 待完善
})


</script>
<template>
    <div id="map" ref="mapLeaflet"></div>
</template>
<style scoped>
#map {
    height: 100vh;
    width: 100vw;
}

.info {
    padding: 6px 8px;
    font: 14px/16px Arial, Helvetica, sans-serif;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.info h4 {
    margin: 0 0 5px;
    color: #777;
}

.legend {
    line-height: 18px;
    color: #555;
}

::v-deep(.legend) i {
    width: 18px;
    height: 18px;
    float: left;
    margin-right: 8px;
    opacity: 0.7;
}
</style>