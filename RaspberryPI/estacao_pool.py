# -*- coding: utf-8 -*-
#Imports
import pigpio
import DHT22
from time import sleep
import json
import os
import sys
from time import sleep
from datetime import date, datetime
import time
import csv
#Instancia pi e o sensor
pi = pigpio.pi()
dht22= DHT22.sensor(pi, 17)
#Cria arquivo CSV cujo nome é a data do dia

def lerDHT22():
    #Puxa dados novo
    dht22.trigger()
    umidade = '%.2f' %(dht22.humidity())
    temperatura = '%.2f' %(dht22.temperature())
    return (umidade, temperatura)

while True:
    print(lerDHT22())
    #with open('dadoslocal.csv', 'w') as f:
    #    writer = csv.writer(f, delimiter = ',')
    #    umidade, temperatura = lerDHT22()
    #    dados = [umidade, temperatura]
    #    writer.writerow(dados)
    #Poola informaçoes e salva no CSV

    #Espera 15 minutos
