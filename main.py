from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi import WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.frontend("/",directory = "static",fallback= "index.html")

@app.websocket("/ws")
async def ws_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            rcv_msg = await websocket.receive_text()
            await websocket.send_text(f"Server received message saying: {rcv_msg} !")
    except WebSocketDisconnect:
        pass