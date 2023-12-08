function setEcph() {
    fetch('http://your_IP/web/JsonECPH.json')
        .then(function(response){
            return response.json()
        })
        .then(function (data) {

            console.log(JSON.stringify(data));
            let SensorData = JSON.stringify(data);
            let object = JSON.parse(SensorData);
            let EC = object.EC;
            let PH = object.PH;
            document.getElementById('ec').innerHTML = [EC].join('') + 'ms/cm';
            document.getElementById('ph').innerHTML = [PH].join('') + '';
            setTimeout(updateClock, 10000);
    });
}
setEcph();
