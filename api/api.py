import time
import sqlite3
from flask import g
from flask import Flask

app = Flask(__name__)




# example:
# @app.route('/time')
# def get_current_time():
#     return {'time': time.time()}
