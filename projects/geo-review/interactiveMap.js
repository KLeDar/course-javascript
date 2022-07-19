export default class InteractiveMap {
    constructor(mapId, onClick) {
        this.mapId = mapId;
        this.onClick = onClick;
    }

    async init() {
        await this.injectYMapsScript();
        await this.loadYMaps();
        this.initMap();
    }

    injectYMapsScript() {
        return new Promise((resolve) => {
            const ymapsScript = document.createElement('script');

            let src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
            let api = ''
            if (api) {
                src = src.concat(`&apikey=${api}`);
            }
            ymapsScript.src = src;
            document.body.appendChild(ymapsScript);
            ymapsScript.addEventListener('load', resolve);
        });
    }

    loadYMaps() {
        return new Promise((resolve) => ymaps.ready(resolve));
    }

    initMap() {
        this.clusterer = new ymaps.Clusterer({
              groupByCoordinates: true,
              clusterDisableClickZoom: true,
              clusterOpenBalloonOnClick: false,
        });
        this.clusterer.events.add('click', (e) => {
              const coords = e.get('target').geometry.getCoordinates();
              this.onClick(coords);
        });
        this.map = new ymaps.Map(this.mapId, {
                center: [56.830266, 60.633984],
                zoom: 11.5
        });
        this.map.events.add('click', (e) => this.onClick(e.get('coords')));
        this.map.geoObjects.add(this.clusterer);
    }

    openBalloon(coords, content) {
        this.map.balloon.open(coords, content);
    }

    setBalloonContent(content) {
        this.map.balloon.setData(content);
    }

    closeBalloon() {
        this.map.balloon.close();
    }

    createPlacemark(coords) {
        const placemark = new ymaps.Placemark(coords);
        placemark.events.add('click', (e) => {
              const coords = e.get('target').geometry.getCoordinates();
              this.onClick(coords);
        });
        this.clusterer.add(placemark);
    }
}