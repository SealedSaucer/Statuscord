import asyncio
import json
import websockets
import time
import requests

TOKEN = "Add your token here"
GATEWAY = "wss://gateway.discord.gg/?v=10&encoding=json"

headers = {"Authorization": TOKEN}
r = requests.get("https://discord.com/api/v10/users/@me", headers=headers)
if r.status_code != 200:
    print("Invalid token!")
    exit()

user = r.json()

async def heartbeat(ws, interval):
    while True:
        await asyncio.sleep(interval / 1000)
        try:
            await ws.send(json.dumps({
                "op": 1,
                "d": None
            }))
        except:
            break

async def set_playing(ws):
    await ws.send(json.dumps({
        "op": 3,
        "d": {
            "since": None,
            "activities": [{
                "name": "Cyberpunk 2077", # Edit this to change the game name
                "type": 0
            }],
            "status": "online",
            "afk": False
        }
    }))
    print("Playing status set!")

async def set_listening(ws):
    start_time = int(time.time() * 1000)

    await ws.send(json.dumps({
        "op": 3,
        "d": {
            "since": None,
            "activities": [{
                "name": "Spotify",
                "type": 2,
                "details": "I Wonder", # Edit this to change the song name
                "state": "Kanye West", # Edit this to change the artist name
                "timestamps": {
                    "start": start_time
                }
            }],
            "status": "online",
            "afk": False
        }
    }))
    print("Listening status set!")

async def set_streaming(ws):
    await ws.send(json.dumps({
        "op": 3,
        "d": {
            "since": None,
            "activities": [{
                "name": "Minecraft", # Edit this to change the stream name
                "type": 1,
                "url": "https://twitch.tv/example" # Edit this to change the stream link
            }],
            "status": "online",
            "afk": False
        }
    }))
    print("Streaming status set!")

async def main():
    choice = input(
        "\nChoose status:\n\n"
        "1 = Playing\n"
        "2 = Listening\n"
        "3 = Streaming\n\n"
        "> "
    ).strip()

    try:
        async with websockets.connect(GATEWAY) as ws:
            print("Connected!")

            hello = json.loads(await ws.recv())
            interval = hello["d"]["heartbeat_interval"]

            asyncio.create_task(heartbeat(ws, interval))

            await ws.send(json.dumps({
                "op": 2,
                "d": {
                    "token": TOKEN,
                    "properties": {
                        "$os": "windows",
                        "$browser": "chrome",
                        "$device": "pc"
                    },
                    "presence": {
                        "status": "online",
                        "afk": False,
                        "activities": []
                    }
                }
            }))

            async for message in ws:
                data = json.loads(message)

                if data.get("t") == "READY":
                    print(f"Logged in as {user['username']} ({user['id']})!")

                    if choice == "1":
                        await set_playing(ws)
                    elif choice == "2":
                        await set_listening(ws)
                    elif choice == "3":
                        await set_streaming(ws)
                    else:
                        print("Invalid choice!")

                if data.get("op") == 11:
                    continue

    except Exception as e:
        print("Error: ", e)

asyncio.run(main())
