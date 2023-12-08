#!/bin/sh
# launcher.sh
# navigate to home directory, then to this directory, then execute python script, then back home

cd /
cd /var/www/html/Python/ECPHPython/example/
sudo python DFRobot_PH_EC.py & sudo python DataGrabber.py & sudo python newcode.py
cd/
