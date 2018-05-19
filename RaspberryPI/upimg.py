import tinys3
from picamera import PiCamera
from time import sleep
from datetime import date, datetime
import time

camera = PiCamera()
conn = tinys3.Connection("AKIAIJ6CZ47E4BJYFZDA","xXM3RMdo3b+alGmDkK+LdtVMYX9ohFeMKnW3/r4f")
camera.start_preview()
sleep(5)
tempo = time.time()
camera.capture('/home/pi/Documents/climatempo/imagens/image%s.jpg' % time)
f = open('/home/pi/Documents/climatempo/imagens/image%s.jpg' % time,'rb')
conn.upload('image%s.jpg' % time,f, "dadosestacoes/estacao1")
camera.stop_preview()

# Specifying a default bucket

# So we could skip the bucket parameter on every request
#f = open('cam.jpg','rb')
#conn.upload('cam.jpg',f, "dadosestacoes/estacao1")
