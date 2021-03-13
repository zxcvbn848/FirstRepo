# 1-Python Flask 網站後端開發 - 網站基礎架構總覽、Flask 快速開始
# 網路使用者->網站前端(HTML/CSS/JavaScript)--(HTTP通訊協定)-->網站後端(Python/Flask)--(資料庫通訊協定)-->資料庫(MongoDB/MySQL)
# 資料庫(MongoDB/MySQL)->網站後端(Python/Flask)--(資料庫通訊協定)-->網站前端(HTML/CSS/JavaScript)--(HTTP通訊協定)-->網路使用者
    # 程式語言-Python
    # 網站框架-Flask
    # 資料庫系統：MongoDB
    # 使用雲端服務：AWS(Amazon Web Services)

# Flask: 輕量級、可擴展的網路框架
    # 精簡的核心
    # 彈性的擴充功能
    # 活躍的社群

# In Terminal:
pip install Flask
# ======
# In app.py:
from flask import Flask # 載入 Flask
app=Flask(__name__) # 建立 Application 物件

# 建立網站首頁的回應方式
@app.route("/")
def index(): # 用來回應網站首頁連線的函式
    return "Hello Flask" # 回傳網站首頁的內容

# 啟動網站伺服器
app.run()
# ======
# 測試網站：
# In Termimal:
# Running on http://127.0.0.1:5000/ (ctrl + click)
# F5 重新整理：增加一筆新的 Server message (127.0.0.1 - - [27/Feb/2021 19:50:03] "GET / HTTP/1.1" 200 -)
# ctrl + c: 停止 Server
# ============================
# 2-Python Flask 網站後端開發 - 網址 URL 的組成與運作方式
# URL(Web Address): 可以連線到特定網站服務的地址
# 網址的組成: 通訊協定://主機名稱:埠號/路徑?要求字串
    # 通訊協定(Protocol)
    # 主機名稱(Hostname)
    # 埠號(Port): Default 443
    # 路徑(Path)
    # 要求字串(Query String)
# Example: 
    # Google 首頁：https://google.com/
        # 通訊協定：https
        # 主機名稱：google.com
        # 埠號：https Default 443
        # 路徑：/
        # 要求字串：無
    # Google 搜尋結果：https://google.com/search?q=test
        # 通訊協定：https
        # 主機名稱：google.com
        # 埠號：https Default 443
        # 路徑：/search
        # 要求字串：q=test
    # Python 課程網頁：https://training.pada-x.com/python-start.htm
        # 通訊協定：https
        # 主機名稱：training.pada-x.com
        # 埠號：https Default 443
        # 路徑：/python-start.htm
        # 要求字串：無
    # 開發中，本機測試網址：http://127.0.0.1:5000/ 
        # 通訊協定：https
        # 主機名稱：127.0.0.1
        # 埠號：自訂 5000
        # 路徑：/
        # 要求字串：無

# 網址的運作
# 後端程式與網路環境設置，決定網站的網址
    # 通訊協定：透過後端以及網路環境決定使用 http or https
    # 主機名稱：購置網域、設定 DNS 紀錄、應用 AWS 雲端服務決定主機名稱
    # 埠號：透過後端程式或設定檔決定
    # 路徑：透過後端程式或設定檔決定
    # 要求字串：透過後端程式決定
# 自訂埠號實務練習
    # 完成 Flask 快速開始
    # 改變網址的埠號

# ======
# In app.py:
# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
# ============================
# 3-Python Flask 網站後端開發 - 路由基礎 Route
# 路由(Route)：決定網址路徑和處理函式的對應關係
# 通訊協定://主機名稱:埠號/路徑?要求字串
    # http://127.0.0.1/
    # http://127.0.0.1/getData
# 前端輸入不同路徑時，後端程式要決定對應的處理函式

# 基本路由設定：透過函式的裝飾器設定路由
@app.route("路徑")
def 處理函式名稱(參數名稱):
    處理函式的程式區塊
# 範例：
# 路徑 /
@app.route("/")
def index():
    return "Home Page"
# 路徑 /data
@app.route("/data")
def getData():
    return "Data Here"

# 動態路由設定：一次支援擁有相同字首的路徑
# 語法：
@app.route("/固定字首/<參數名稱>"")
def 處理函式名稱(參數名稱):
    處理函式的程式區塊
# 範例：
# 根據使用者名稱回應不同訊息
@app.route("/user/<name>")
def getUser(name):
    return "Hello" + name 

# ======
# In app.py:
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
# ============================
# 4-Python Flask 網站後端開發 - 靜態檔案處理 Static Files
# 靜態檔案(Static Files)：不執行程式，直接把檔案送到前端
# 常見的Static Files：
    # 圖片檔案
    # 影片檔案
    # HTML、CSS、JavaScript程式檔
# 直接將「檔案名稱」對應到「網址路徑」

# Static Files路徑設定：建立 static 資料夾和網址路徑
# 程式不需要做任何更動
# 操作方式如下:
    # 建立 static 資料夾
    # 將檔案放入 static 資料夾
    # 啟動伺服器
    # 前端使用 /static/檔案名稱 連線，取得檔案

# 自訂路徑：在程式中設定靜態檔案路徑
# 程式中建立 Application 物件時，透過參數指定
Flask(
      __name__,
      static_folder="資料夾名稱",
      static_url_path="對應的網址路徑")

# 建立 static 資料夾：
# 放入「靜態檔案」
# ======
# In app.py:
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
# ============================
# 5-Python Flask 網站後端開發 - 請求物件基礎 HTTP Request
# HTTP request：前端透過網址連線到後端的正式稱呼
# 前端的立場：主動「發出請求」給後端伺服器，並且附帶上相關資訊
# 後端的立場：被動從前端「接收請求」，並且取得其中附帶的相關資訊

# 接收請求：後端如何接收請求
# Flask 接收請求的流程
    # 前端發送請求
    # Flask 套件協助我們處理網路連線底層：負責接收請求，並且將相關資訊封裝在 request 物件之中
    # 根據路由，決定要怎麼處理請求

# Request 物件：透過這個物件，取得請求相關資訊
# 使用方式：
    # 載入 request 物件
    # 在路由對應的函式中直接使用 request 取得物件
    # 進一步取得相關資訊

# Request 基本資訊：取得當前請求的各種基礎資訊
# 使用 Request 物件的各種屬性
    # method 請求方法
    # scheme 通訊協定
    # host 主機名稱
    # path 路徑
    # url 完整網址

# Request Headers：取得當前請求的標頭(附加資訊)
# 使用 request 物件的 headers 屬性。常見標頭如下
    # user-agent
    # accept-language
    # referrer
# ======
# In app.py:
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
# Request 基本資訊：取得當前請求的各種基礎資訊
def index(): 
    print("請求方法", request.method) # 請求方法 GET
    print("通訊協定", request.scheme) # 通訊協定 http
    print("主機名稱", request.host) # 主機名稱 127.0.0.1:3000
    print("路徑", request.path) # 路徑 /
    print("完整的網址", request.url) # 完整的網址 http://127.0.0.1:3000/
# Request Headers：取得當前請求的標頭(附加資訊)
    print("瀏覽器和作業系統", request.headers.get("user-agent")) # 瀏覽器和作業系統 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36
    print("語言偏好", request.headers.get("accept-language")) # 語言偏好 zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7
    print("引薦網址", request.headers.get("referrer")) # 引薦網址 None
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
# ============================
# 6-Python Flask 網站後端開發 - 要求字串處理 Query String
# 網址的一部份：通訊協定://主機名稱:埠號/路徑?要求字串
    # 通訊協定(Protocol)
    # 主機名稱(Hostname)
    # 埠號(Port): Default 443
    # 路徑(Path)
    # 「要求字串(Query String)」

# 要求字串的格式：必須按照特定格式撰寫
    # 格式說明：參數名稱=資料&參數名稱=資料&...
    # Example 1: https://www.google.com/search?q=test
    # Example 2: https://tw.search.yahoo.com/search?p=test&fr=yfp-search-sb

# 要求字串的操作：
# 1.前端送出：透過網址，送出包含要求字串的請求
    # 使用自己開發的測試伺服器
        # http://127.0.0.1:3000/getSum?max=10
        # http://127.0.0.1:3000/getSum?max=5
    # 相同的路徑，提供不同的要求字串
# 2.後端接收：在路由的處理函式中，取得要求字串的資料
    # 前端送出的網址
        # http://127.0.0.1:3000/getSum?max=10
        # http://127.0.0.1:3000/getSum?max=5
    # 後端接收的程式
        @app.route("/getSum")
        def getSum():
            data = request.args.get("max", None); # get(參數名稱, default)
            return data

# 接收要求字串語法詳解：透過請求物件(request)取得要求字串的資料
    # 程式語法：
        request.args.get("參數名稱", 預設值)
    # 後端接收的程式 Example：
        @app.route("/getSum")
        def getSum():
            data = request.args.get("max", None)
            return data
# ======
# In app.py:
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
# 利用要求字串 (Query String) 提供彈性 /getSum?max=最大數字
@app.route("/getSum")
# 單參數：
def getSum(): # 1 + 2 + 3 + ... + max
    maxNumber = request.args.get("max", 100) # 資料為 String, default value = 100
    maxNumber = int(maxNumber) # 轉換成 Integer 
    result = 0
    for n in range(1, maxNumber + 1):
        result += n
    return "結果： " + str(result)
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
# ============================
# 7-Python Flask 網站後端開發 - 回應與導向 Response & Redirect
# Shortcut: shift + tab 刪減 tab
# 回應前端的方式
# 1.直接回應字串：將字串透過網路，傳送到前端
    # 在路由的處理函式中，回傳想要回應的字串
    @app.route("/")
    def index():
        return 字串
# 2.回應 JSON 格式字串：將字典轉換成 JSON 格式字串，傳送到前端
    # 透過 json.dumps() 將字典型態的資料轉換成 JSON 格式字串
    @app.route("/")
    def index():
        return json.dumps(字典)
"""
# In day11.py, D:\ProgrammLearningSelf_202008~\one-hundred:
# json 模組主要四個函式:
# dump - 將Python對象按照JSON格式序列化到文件中
# dumps - 將Python對象處理成JSON格式的字符串
# load - 將文件中的JSON數據反序列化成對象
# loads - 將字符串的内容反序列化成Python對象
# 序列化(serialization): 將數據或對象轉換為可以「存儲或傳輸」的形式
# 反序列化(deserialization): 從一系列字節中提取數據結構
"""
# 3.重新導向：將使用者導向到另外一個網址路徑
    # 透過 redirect() 將使用者導向到特定網址路徑
    @app.route("/")
    def index():
        return redirect(網址路徑)
# ======
# In app.py:
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
    return redirect("/en/") # 直接導向 http://127.0.0.1:3000/en/
    return redirect("https://google.com/") # 直接導向 https://google.com/

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
# ============================
# 8-Python Flask 網站後端開發 - 樣板引擎 Template Engine
# 回應前端的方式：後端程式會根據情況，決定要如何回應前端
    # 直接回應字串
    # 回應 JSON 格式字串
    # 重新導向
    # 使用「樣板引擎」

# 使用樣板引擎：根據樣板檔案，產生字串，傳送到前端
    # 方便撰寫複雜的前端程式
    # 方便在回應中，動態的帶入資料

# 建立樣板檔案：最基本的樣板檔案就是純文字檔
    # 樣板檔案必須建立在專案的 templates 子資料夾底下
    # 例如，在樣板檔案中加入以下內容
        您好，歡迎光臨

# 使用樣板檔案：取得樣板檔案中的文字，傳送到前端
    # 透過 render_template() 根據樣板檔案的內容產生文字串
        @app.route("/")
        def index():
            return render_template(檔案路徑)

# 樣板引擎
# 1.建立樣板檔案定義資料欄位：在樣板檔案中定義動態處理的欄位
    # 利用 {{資料欄位名稱}} 定義欄位
    # 例如，在樣板檔案中加入以下欄位
        您好，{{name}}，歡迎光臨

# 2.使用樣板檔案帶入資料欄位：使用樣板檔案時，帶入資料
    # 透過 render_template 參數帶入資料
        @app.route("/")
        def index():
            return render_template(
                檔案路徑,
                資料欄位名稱 = 資料
            )

# ======
# 建立 templates 資料夾：
    # 建立 index 檔案：
        <h3>您好，{{ name }}，歡迎光臨</h3>
        這是樣板檔案的內容
# 樣板檔案字串內容可寫成「前端資料格式」(如：HTML 格式)，將字串直接變成前端
# ======
# In app.py:
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import render_template # 載入 render_template 函式
app=Flask(__name__, static_folder="static", static_url_path="/Zack") 

# 建立路徑 / 對應的處理函式
@app.route("/")
def index(): 
    return render_template("index", name = "Zack") # 從 templates 資料夾往內層尋找檔案
        """
        您好，Zack，歡迎光臨
        這是樣板檔案的內容
        """

# 啟動網站伺服器，可透過 port 參數指定埠號
app.run(port=3000)
# ============================
# 9-Python Flask 網站前後端互動 - 超連結與圖片
# HTML 網頁：網站前端的最基礎部分
    """
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>網頁標題</title>
        </head>
        <body>
            這是網頁主畫面中的內容
        </body>
    </html>
    """

# 前後端的關係：前端的 HTML 程式就是後端回應的字串
    # 網站前端 --(發出 Request 請求) --> 網站後端
    # 網站後端 --(回應 HTML 格式碼) --> 網站前端

# 前後端互動(網址)：網址是前後端互動的核心觀念
    # 使用者必須事先知道網址，然後把網址親手打到瀏覽器的網址列上
    # 非常不方便
# 前後端互動(超連結)：可以讓使用者輕易上手的互動介面
    # 基礎仍然是網址的概念，但提供良好的互動介面，讓一般使用者能輕易上手。
    # 簡單易用
    <a href="網址">可點擊的內容</a>
# 前後端互動(圖片)：在網頁中顯示圖片
    # 利用以下 HTML 顯示圖片
        <img src="圖片網址"/>
# ======
# Create index.html, in templates folder
# In index.html:
"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一個網頁</title>
</head>
<body>
    <h3>網頁的主畫面</h3>
<!-- 相對路徑：如果超連結的完整網址路徑(自己網站中的不同網頁)跟此 HTML 一樣，則可忽略一樣的路徑 http://127.0.0.1:3000 -->
    <!-- <a href="http://127.0.0.1:3000/page">連結到網頁</a> -->
    <a href="/page">連結到網頁</a>
<!-- <br/> 換行 -->
    <br/> 
    <a href="/RWD">連結到 RWD </a>
    <br/>
<!-- <img src="圖片網址"/> -->
<!-- 圖片網址為：http://127.0.0.1:3000/static/18000.png -->
<!-- 一樣可忽略本機網址 -->
    <!-- <img src="http://127.0.0.1:3000/static/18000.png"/> -->
    <img src="/static/18000.png"/>
</body>
</html>
"""
# ======
# Create page.html, in templates folder
# In page.html:
"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第二個網頁</title>
</head>
<body>
    <h3>第二個網頁</h3>
    歡迎來到我的第二個網頁
</body>
</html>
"""
# ======
# 先將 WK1-RWD.css 放入 static 資料夾中

# In WK1-RWD.html, in templates folder:
    <title>WK1-RWD</title>
# {{ url_for() }} 在 flask 的模組下連接 HTML 和 CSS
    <link href="{{ url_for('static', filename='WK1-RWD.css') }}" rel="stylesheet" type="text/css" media="all">
# ======
# In app.py:
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
# ======
# 觀察 http://127.0.0.1:3000 的開發人員工具 (F12)
# Network -> All
# F5 重新整理
# 在紀錄欄位裡出現 127.0.0.1 和 18000.png 共 2 次紀錄，代表前後端共互動 2 次
# ============================
# 10-Python Flask 網站前後端互動 - 表單 Form
# 前後端互動(表單)：使用者可輸入資料，並請傳送到後端的介面
    # 網址：最核心的部分
    # 超連結：簡易的點擊介面
    # 表單：可傳送額外資料，可設定更多連線細節的介面

# 前端 HTML 程式 ----------------------------> 後端 Python 程式  
            # 發出請求到「網址路徑?data=使用者的輸入」                                         
                                            @app.route("網址路徑")  
<form action="網址路徑">                     def handle():    
    <input type="text" name="data" />           input = request.args.get("data", "")
    <button>點擊送出表單</button>                return "給前端的回應"
</form>                                         

# <form></form> 本身無外觀
# ======
# In index.html, in templates folder:
"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一個網頁</title>
</head>
<body>
    <h3>網頁的主畫面</h3>
    <form action="/calculate">
        數字 <input type="text" name="max" />
        <button>計算結果</button>
    </form>
    <hr/>
    <form action="/show">
        姓名 <input type="text" name="n" />
        <button>點擊送出表單</button>
<!-- 在前端 input 框中輸入 Zack 後，點擊 -> 網址轉至：http://127.0.0.1:3000/show?n=Zack -->
    </form>
<!-- <hr/> 水平線 -->
    <hr/>
    <a href="/page">連結到網頁</a>
    <br/> 
    <a href="/RWD">連結到 RWD </a>
    <br/>
    <a href="/AJAX">連結到 AJAX </a>
    <br/> 
    <img src="/static/18000.png" />
</body>
</html>
"""
# ======
# Create result.html, in templates folder:
"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>結果頁面</title>
</head>
<body>
    <h3>計算的結果是</h3>
    <!-- data 為動態資料欄位 -->
    {{ data }}
    <br/>
    <a href="/">回首頁</a>
</body>
</html>
"""
# ======
# In app.py:
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

# 處理路徑 /show 的對應函式
@app.route("/show")
def show():
# get("參數名稱", "預設值") 中的參數名稱：需對應 index.html 中,
# <input type="text" name="參數名稱" /> 中的參數名稱
    name = request.args.get("n", "")
    return "歡迎光臨，" + name

# 處理路徑 /calculate 的對應函式
@app.route("/calculate")
def calculate():
    maxNumber = request.args.get("max", "")
    maxNumber = int(maxNumber)
    result = 0
    for n in range(1, maxNumber + 1):
        result += n
    return render_template("result.html", data = result)

# 處理路徑 /RWD 的對應函式
# 測試回傳 WK1 作業。CSS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS
@app.route("/RWD")
def RWD():
    return render_template("WK1-RWD.html")

# 處理路徑 /AJAX 的對應函式
# 測試回傳 WK3 作業。CSS & JS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS & JS
@app.route("/AJAX")
def AJAX():
    return render_template("WK3_JS-AJAX-Visual.html")

# 啟動網站伺服器，可透過 port 參數指定埠號
# app.run(port=3000)
# 若要上傳至 heroku 則需使用下述方式
if __name__ == "__main__":
    app.run()
# ============================
# 11-Python Flask 網站前後端互動 - 連線方法 GET、POST
# 連線方法 (Method)：前端可用不同的連線方法，連線到同一網址
# 簡單的比喻：
    # 網址：收件地址
    # 方法：普通信件、限時快遞
# 兩種常見的方法：
    # GET、POST
# 其他方法：
    # PUT、DELETE、PATCH

# 透過表單設定連線方法
# 1.使用 GET 方法做前後端互動
# 沒有明確設定的話，代表預設使用 GET 方法
# 前端 HTML 程式 ----------------------------> 後端 Python 程式  
    # 使用 GET 方法，發出請求到「網址路徑?data=使用者的輸入」                                         
                                            @app.route("網址路徑")  
<form action="網址路徑">                     def handle():    
    <input type="text" name="data" />           input = request.args.get("data", "")
    <button>點擊送出表單</button>                return "給前端的回應"
</form>                                         
# 可以明確設定 GET 方法
# 前端 HTML 程式 ----------------------------> 後端 Python 程式  
    # 使用 GET 方法，發出請求到「網址路徑?data=使用者的輸入」                                         
                                            @app.route("網址路徑", methods=["GET"])  
<form action="網址路徑" method="GET">            def handle():    
    <input type="text" name="data" />           input = request.args.get("data", "")
    <button>點擊送出表單</button>                return "給前端的回應"
</form>                                         

# 2.使用 POST 方法做前後端互動
# 前端 HTML 程式 ----------------------------> 後端 Python 程式  
            # 使用 POST 方法，發出請求到「網址路徑」
            # data=使用者的輸入不顯示在網址後面，另外存放                                         
                                            @app.route("網址路徑", methods=["POST"])  
<form action="網址路徑" method="POST">           def handle():    
    <input type="text" name="data" />           input = request.form["data"]
    <button>點擊送出表單</button>                return "給前端的回應"
</form>                                         

# 前後端互動：不同的互動方式，使用的連線方法不同
    # 直接輸入網址：GET
    # 超連結：GET
    # 表單：可設定 GET 或 POST

# POST 方法：輸入字串後不會出現「?參數名稱=資料」，可用來處理機密資訊
# ======
# In app.py:
from flask import Flask # 載入 Flask
from flask import request # 載入 request 物件
from flask import render_template # 載入 render_template 函式
app=Flask(__name__, static_folder="static", static_url_path="/static") 

# 使用 GET 方法，處理路徑 / 的對應函式
@app.route("/")
def index():
    return render_template("index.html")

# 因為前端發送請求到 / 路徑只會用 GET 方法，故不能限定為 POST
"""
# 使用 POST 方法，處理路徑 / 的對應函式
@app.route("/" methods=["POST"])
def index():
    return render_template("index.html") # Method Not Allowed
"""

# 處理路徑 /page 的對應函式
@app.route("/page")
def page():
    return render_template("page.html")

# 處理路徑 /show 的對應函式
@app.route("/show")
def show():
# get("參數名稱", "預設值") 中的參數名稱：需對應 index.html 中,
# <input type="text" name="參數名稱" /> 中的參數名稱
    name = request.args.get("n", "")
    return "歡迎光臨，" + name

# 使用 POST 方法，處理路徑 /calculate 的對應函式
@app.route("/calculate", methods=["POST"])
def calculate():
    # 接收 GET 方法的 Query String
    # maxNumber = request.args.get("max", "")
    # 接收 POST 方法的 Query String
    maxNumber = request.form["max"]
    maxNumber = int(maxNumber)
    result = 0
    for n in range(1, maxNumber + 1):
        result += n
    return render_template("result.html", data = result)

# 處理路徑 /RWD 的對應函式
# 測試回傳 WK1 作業。CSS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS
@app.route("/RWD")
def RWD():
    return render_template("WK1-RWD.html")

# 處理路徑 /AJAX 的對應函式
# 測試回傳 WK3 作業。CSS & JS 檔案需放在 static 資料夾中，並在 HTML 內連結 HTML 和 CSS & JS
@app.route("/AJAX")
def AJAX():
    return render_template("WK3_JS-AJAX-Visual.html")

# 啟動網站伺服器，可透過 port 參數指定埠號
if __name__ == "__main__":
    app.run()
# ======
# 觀察連線方法：
# F12 -> Network -> F5 -> 點擊任一請求 -> Headers -> Request Method
# POST 方法的資料：
# Headers 拉到最底下的 Form Data 欄位，點選 view source
# ============================
