
## Jest + Puppeteer environment for web UI evaluation

#### *take a look through `./bench/environment/` to see how this works, a work in progress!*

| ***Demo:*** |
|---|
| [![Demo](https://img.youtube.com/vi/E1WcZ2yOC10/0.jpg)](https://www.youtube.com/watch?v=E1WcZ2yOC10) |

*todo: need to add a demoable task queue to demo from this repo!*

#### *setup:*
```
# node:
npm install

# flask:
python3 -m venv merlinapi_venv
source merlinapi_venv/bin/activate
pip3 install -r requirements.txt  
```

#### *start annotator:*
```
# permiss:
chmod +x tests-up

# launch test app:
./tests-up
```

#### *run tests:*
```
npm run-script test
```
