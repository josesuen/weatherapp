# -*- coding: utf-8 -*-
#Imports
import pigpio
import DHT22
from time import sleep
import json
import os
import sys
import AWSIoTPythonSDK
sys.path.insert(0, os.path.dirname(AWSIoTPythonSDK.__file__))
# Now the import statement should work
from AWSIoTPythonSDK.MQTTLib import AWSIoTMQTTClient
from time import sleep
from datetime import date, datetime
import time

#Instancia pi e o sensor
pi = pigpio.pi()
dht22= DHT22.sensor(pi, 17)

# AWS IoT certificate based connection
myMQTTClient = AWSIoTMQTTClient("123afhlss456")
myMQTTClient.configureEndpoint("a5heecikdv9va.iot.us-west-2.amazonaws.com", 8883)
myMQTTClient.configureCredentials("/Documents/climatempo/VeriSign-Class 3-Public-Primary-Certification-Authority-G5.pem", "/home/pi/Documents/climatempo?1be1fea1e9-private.pem.key", "/home/pi/Documents/climatempo?1be1fea1e9-certificate.pem.crt")
myMQTTClient.configureOfflinePublishQueueing(-1)  # Infinite offline Publish queueing
myMQTTClient.configureDrainingFrequency(2)  # Draining: 2 Hz
myMQTTClient.configureConnectDisconnectTimeout(10)  # 10 sec
myMQTTClient.configureMQTTOperationTimeout(5)  # 5 sec
#connect

myMQTTClient.connect()
def lerDHT22():
    #Puxa dados novo
    dht22.trigger()
    umidade = '%.2f' %(dht22.humidity())
    temperatura = '%.2f' %(dht22.temperature())
    return (umidade, temperatura)

while True:
    umidade, temperatura = lerDHT22()
    print("Umidade é de:" + umidade + "%" )
    print("Temperatura é de" + temperatura + "C")
    payload = json.dumps({"idestacao": 1, "timestamp": time.time(), "Temperatura = ": temperatura, "Umidade" : umidade})
    myMQTTClient.publish("estacao1", payload, 0)
    sleep(2)
