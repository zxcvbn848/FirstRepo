# 1-Python Flask 網站後端開發 - 網站基礎架構總覽、Flask 快速開始
"""
from flask import Flask # 載入 Flask
app=Flask(__name__) # 建立 Application 物件

# 建立網站首頁的回應方式
@app.route("/")
def index(): # 用來回應網站首頁連線的函式
    return "Hello Flask" # 回傳網站首頁的內容

# 啟動網站伺服器
app.run() 
"""
# ============================
# 2-Python Flask 網站後端開發 - 網址 URL 的組成與運作方式
"""
from flask import Flask # 載入 Flask
app=Flask(__name__) # 建立 Application 物件

# 建立網站首頁的回應方式
@app.route("/")
def index(): # 用來回應網站首頁連線的函式
    return "Hello Flask" # 回傳網站首頁的內容

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 3-Python Flask 網站後端開發 - 路由基礎 Route
"""
from flask import Flask # 載入 Flask
app=Flask(__name__) # 建立 Application 物件

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): # 用來回應路徑 / 的函式
    return "Hello Flask" # 回傳網站首頁的內容

# 建立路徑 /data 對應的處理函式
@app.route('/data')
def handleData():
    return "My Data"

# 建立動態路由: 建立路徑 /user/使用者名稱 對應的處理函式
@app.route('/user/<username>')
def handleUser(username):
    if username == "璟翔" or username == "銘賢":
        return "你好 " + username
    else:
        return "Hello " + username

app.run(port=3000)
"""
# ============================
# 4-Python Flask 網站後端開發 - 靜態檔案處理 Static Files
"""
from flask import Flask # 載入 Flask
# 建立 Application 物件，設定靜態檔案的路徑處理
app=Flask(
    __name__,
    # 自訂路徑：
    static_folder="static", # 靜態檔案的資料夾名稱(可任意調整，資料夾名稱也需跟著變動；預設為 static)
    static_url_path="/Zack" # 靜態檔案對應的網址路徑(可任意調整，也可只用 / ；預設為 static)  
) 
# 預設路徑：本機名稱/static/檔案名稱
# 自訂路徑：所有在 static 資料夾底下的檔案，都對應到網址路徑 /Zack/檔案路徑

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): # 用來回應路徑 / 的函式
    return "Hello Flask" # 回傳網站首頁的內容

# 建立路徑 /data 對應的處理函式
@app.route('/data')
def handleData():
    return "My Data"

# 建立動態路由: 建立路徑 /user/使用者名稱 對應的處理函式
@app.route('/user/<username>')
def handleUser(username):
    if username == "璟翔":
        return "你好 " + username
    else:
        return "Hello " + username

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 5-Python Flask 網站後端開發 - 請求物件基礎 HTTP Request
"""
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): 
# Request 基本資訊：取得當前請求的各種基礎資訊
    # print("請求方法", request.method) # 請求方法 GET
    # print("通訊協定", request.scheme) # 通訊協定 http
    # print("主機名稱", request.host) # 主機名稱 127.0.0.1:3000
    # print("路徑", request.path) # 路徑 /
    # print("完整的網址", request.url) # 完整的網址 http://127.0.0.1:3000/
# Request Headers：取得當前請求的標頭(附加資訊)
    # print("瀏覽器和作業系統", request.headers.get("user-agent")) # 瀏覽器和作業系統 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
    # print("語言偏好", request.headers.get("accept-language")) # 語言偏好 zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7
    # print("引薦網址", request.headers.get("referrer")) # 引薦網址 None
# 根據使用者語言偏好，回傳不同語言版本的內容：
    lang = request.headers.get("accept-language")
    print("語言偏好", lang) # 語言偏好 zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6
    if lang.startswith("en"):  
        return "Hello Flask" 
    elif lang.startswith("ja"):
        return "いらっしゃいませ"
    else:
        return "您好，歡迎光臨"

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 6-Python Flask 網站後端開發 - 要求字串處理 Query String
"""
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): 
    lang = request.headers.get("accept-language")
    print("語言偏好", lang) # 語言偏好 zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6
    if lang.startswith("en"):  
        return "Hello Flask" 
    elif lang.startswith("ja"):
        return "いらっしゃいませ"
    else:
        return "您好，歡迎光臨"

# 建立路徑 /getSum 對應的處理函式
@app.route("/getSum")
# 利用要求字串 (Query String) 提供彈性 /getSum?max=最大數字
# 單參數：
# def getSum(): # 1 + 2 + 3 + ... + max
#     maxNumber = request.args.get("max", 100) # 資料為 String, default value = 100
#     maxNumber = int(maxNumber) # 轉換成 Integer 
#     result = 0
#     for n in range(1, maxNumber + 1):
#         result += n
#     return "結果： " + str(result)
# 利用要求字串 (Query String) 提供彈性 /getSum?min=最小數字&max=最大數字
# 多參數：
def getSum(): # min + (min + 2) + (min + 3) + ... + max
    maxNumber = request.args.get("max", 100) # 資料為 String, default value = 100
    maxNumber = int(maxNumber) # 轉換成 Integer 
    minNumber = request.args.get("min", 1)
    minNumber = int(minNumber)
    # 以下運算 min + (min + 2) + (min + 3) + ... + max 總和的迴圈邏輯
    result = 0
    for n in range(minNumber, maxNumber + 1):
        result += n
    # 把結果回應給前端
    return "結果： " + str(result)

# http://127.0.0.1:3000/getSum?min=5&max=10
# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 7-Python Flask 網站後端開發 - 回應與導向 Response & Redirect
"""
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import redirect # 載入 redirect 函式
import json
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
def index():   
    lang = request.headers.get("accept-language")
    print("語言偏好", lang) # 語言偏好 zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7,ja;q=0.6
# 回應 JSON 格式字串
    if lang.startswith("en"):
        # 重新導向並設定對應的路由及回應內容
        return redirect("/en/") 
    elif lang.startswith("ja"):
        return redirect("/ja/")
    else:
        return redirect("/zh/")
# 重新導向
    # return redirect("/en/") # 直接導向 http://127.0.0.1:3000/en/
    # return redirect("https://google.com/") # 直接導向 https://google.com/

# 建立路徑 /en/ 對應的處理函式
@app.route("/en/")
def index_english():
    return json.dumps({
        "status": "ok",
        "text": "Hello Flask" 
    })

# 建立路徑 /zh/ 對應的處理函式
@app.route("/zh/")
def index_chinese():
    return json.dumps({
        "狀態": "ok",
        "文字": "您好，歡迎光臨"
    }, ensure_ascii = False) # 指示不要用 ASCII 編碼處理中文

# 建立路徑 /ja/ 對應的處理函式
@app.route("/ja/")
def index_japanese():
    return json.dumps({
        "状態": "ok",
        "挨拶": "いらっしゃいませ"
    }, ensure_ascii = False) # 指示不要用 ASCII 編碼處理日文

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 8-Python Flask 網站後端開發 - 樣板引擎 Template Engine
"""
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import render_template # 載入 render_template 函式
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): 
    return render_template("index", name = "Zack") # 從 templates 資料夾往內層尋找檔案

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 9-Python Flask 網站前後端互動 - 超連結與圖片
"""
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import render_template # 載入 render_template 函式
# 因不知為何 /Zack 下的 CSS 檔案無法被讀取，故先改回 /static
# 圖片網址為：http://127.0.0.1:3000/static/18000.png
app=Flask(__name__, static_folder="static", static_url_path="/static") 

# 處理路徑 / 的對應函式
@app.route("/")
def index():
    return render_template("index.html")

# 處理路徑 /page 的對應函式
@app.route("/page")
def page():
    return render_template("page.html")

# 處理路徑 /RWD 的對應函式
# 測試回傳 WK1 作業。CSS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS
@app.route("/RWD")
def RWD():
    return render_template("WK1-RWD.html")

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
"""
# ============================
# 10-Python Flask 網站前後端互動 - 表單 Form
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import render_template # 載入 render_template 函式
app=Flask(__name__, static_folder="static", static_url_path="/static") 

# 處理路徑 / 的對應函式
@app.route("/")
def index():
    return render_template("index.html")

# 處理路徑 /page 的對應函式
@app.route("/page")
def page():
    return render_template("page.html")

# 處理路徑 /RWD 的對應函式
# 測試回傳 WK1 作業。CSS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS
@app.route("/RWD")
def RWD():
    return render_template("WK1-RWD.html")

# 處理路徑 /show 的對應函式
@app.route("/show")
def show():
# get("參數名稱", "預設值") 中的參數名稱：需對應 index.html 中,
# <input type="text" name="參數名稱" /> 中的參數名稱
    name = request.args.get("n", "")
    return "歡迎光臨，" + name

@app.route("/calculate")
def calculate():
    maxNumber = request.args.get("max", "")
    maxNumber = int(maxNumber)
    result = 0
    for n in range(1, maxNumber + 1):
        result += n
    return render_template("result.html", data = result)
 
# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
# ============================
