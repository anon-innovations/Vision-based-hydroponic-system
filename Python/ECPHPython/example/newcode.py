import cv2
import numpy as np

cap = cv2.VideoCapture(0)

while True:
    _, frame = cap.read()
    
    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

                # Green color
    low_green = np.array([65,60,60])
    high_green = np.array([80,255,255])
    green_mask = cv2.inRange(hsv_frame, low_green, high_green)
    green = cv2.bitwise_and(frame, frame, mask=green_mask)
        
    GREEN_MIN = np.array([65,60,60], np.uint8)
    GREEN_MAX = np.array([80,255,255], np.uint8)
        
    dst = cv2.inRange(green, GREEN_MIN, GREEN_MAX)
    no_green = cv2.countNonZero(dst)
    print('The plantation growth: ' + str(no_green))
        
    DataJson = open("/var/www/html/web/JsonGrowth.json","w")
    DataJson.write('{"Growth":%d}' % (no_green))
    DataJson.close()
    sleep(5) 
    cv2.imshow('camera',green)

    key = cv2.waitKey(0)
        if key == 27:
        break


