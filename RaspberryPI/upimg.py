import boto3
from picamera import PiCamera
from time import sleep
from datetime import date, datetime
import time

s3=boto3.client('s3')
camera = PiCamera()
tempo = str(time.time())
camera.start_preview()
sleep(5)
filename = tempo + "img.jpg"
camera.capture('/home/pi/Documents/climatempo/imagens/' + filename)
s3.upload_file('/home/pi/Documents/climatempo/imagens/' + filename, "dadosestacoes", "estacao1/"+ filename)
camera.stop_preview()
