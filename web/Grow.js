function setGrow() {
    fetch('http://your_IP/web/JsonGrowth.json')
        .then(function(response){
            return response.json()
        })
        .then(function (data) {

            console.log(JSON.stringify(data));
            let SensorData = JSON.stringify(data);
            let object = JSON.parse(SensorData);
            let growth = object.Growth;
            document.getElementById('growth').innerHTML = [growth].join('') + '%';
            setTimeout(updateClock, 10000);
    });
}
setGrow();

