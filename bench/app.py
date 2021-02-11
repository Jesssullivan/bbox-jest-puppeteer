from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return app.send_static_file('remote_index.html')



@app.route('/<filex>/')
def filex(filex):
    return app.send_static_file(filex)
