from aiohttp import web
import socketio
import ssl
from OpenSSL import crypto, SSL
from socket import gethostname
from pprint import pprint
from time import gmtime, mktime
ROOM = 'room'
sio = socketio.AsyncServer(cors_allowed_origins='*',verify_ssl=False)
app = web.Application()
sio.attach(app)

@sio.event
async def connect(sid, environ):
    print('Connected', sid)
    await sio.emit('ready', room=ROOM, skip_sid=sid)
    sio.enter_room(sid, ROOM)

@sio.event
def disconnect(sid):
    sio.leave_room(sid, ROOM)
    print('Disconnected', sid)

@sio.event
async def data(sid, data):
    print('Message from {}: {}'.format(sid, data))
    await sio.emit('data', data, room=ROOM, skip_sid=sid)

if __name__ == '__main__':
    # ssl_context = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
    # ssl_context.load_cert_chain()
    web.run_app(app, port=7800)
