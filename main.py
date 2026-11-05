from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()

@app.get("/")
async def root():
    return {"Message":"Hello World"}

@app.get("/hello/{items}")
async def rehello(items: str):
    return {"Message":f"{items} is good for health!"}