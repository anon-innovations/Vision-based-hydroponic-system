function setTemperature() {
    fetch('http://your_IP/web/JsonData.json')
        .then(function(response){
            return response.json()
        })
        .then(function (data) {

            console.log(JSON.stringify(data));
            let SensorData = JSON.stringify(data);
            let object = JSON.parse(SensorData);
            let temperature = object.temperature;
            let humidity = object.humidity;
            let datetime = object.datetime;
            document.getElementById('temp').innerHTML =  [temperature].join('') + ' °C';
            document.getElementById('humidity').innerHTML = [humidity].join('') + '%';
            document.getElementById('datetime').innerHTML = [datetime].join('');
            setTimeout(updateClock, 10000);
    })
}
setTemperature();

