#!/usr/bin/env python3
import sys
import Adafruit_DHT
from time import sleep
import datetime
        
def main():
    while True:
        humidity, temperature = Adafruit_DHT.read_retry(11, 4)
        date = datetime.datetime.now()
        time = date.strftime("%H:%M:%S")
        today = "%s.%s.%s" %(date.day, date.month, date.year)
        print(humidity)
        print(temperature)
        print(time, today)
        DataJson = open("/var/www/html/web/JsonData.json","w")
        DataJson.write('{"temperature":%d,"humidity":%d,"datetime":" %s, %s"}' % (temperature, humidity, time ,today))
        DataJson.close()
        #sleep(5)
                   
if __name__ == "__main__":
    main()


    
