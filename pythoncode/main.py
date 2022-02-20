from flask import Flask, render_template, request, session, redirect
import requests






discord_login_url = "https://discord.com/api/oauth2/authorize?client_id=910623293751562281&redirect_uri=http%3A%2F%2F127.0.0.1%3A5000%2Flogin&response_type=code&scope=identify%20email%20guilds"


def get_access_token(code):
    payload = {
        "client_id": "910623293751562281",
        "client_secret": "4tq84WAqhtIt7yKY5jRrBNeXGI5N4Vzj",
        "grant_type": "authorization_code",
        "code": code,
        "redirect_uri": "http://127.0.0.1:5000/login",
        "scope": "identify%20email%20guilds"
        }

    access_token = requests.post(url="https://discord.com/api/oauth2/token", data=payload).json()
    return access_token.get("access_token")


def get_user_json(access_token):
    url = "https://discord.com/api/users/@me"
    headers = {"Authorization": f"Bearer {access_token}"}
    return requests.get(url=url, headers=headers).json()


app = Flask(__name__)
app.config["SECRET_KEY"] = "test123"


@app.route("/")
def home():
    return render_template("index.html", discord_url=discord_login_url)


@app.route("/login")
def login():
    code = request.args.get("code")

    at = get_access_token(code)
    session["token"] = at
    user = get_user_json(at)
    return redirect(f"http://localhost:3000/account?id={user.get('id')}")


if __name__ == "__main__":
    app.run()
