from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def start_page():
    return render_template('whack-a-mole.html')


if __name__ == '__main__':
    app.run()


