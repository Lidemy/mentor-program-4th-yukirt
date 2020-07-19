## 請以自己的話解釋 API 是什麼
API 就像是一種溝通的方式，依照特定模式（http）並依照指定的動作（method），並帶著指定的開頭資料（header）與後端溝通，便是一般常見的 Web API，其他種類的 API 概念相同，但細節會有不同。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
403 Forbidden：用戶沒有權限執行此次請求，就像是一般用戶想進去網站後台，通常會使用此 status code
401 Unauthorized：需要用戶登入才能進行此請求，就像是還未登入就前往登入後才能使用的 API
504 Gateway Timeout：超過時間限制還是無法獲得回應，後端就會回此 status code 通知前端


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

| Method | Path                      | What does it do?                                                                      |
| :----- | :------------------------ | :------------------------------------------------------------------------------------ |
| GET    | `/restaurants/`           | 獲取所有餐廳的列表                                                                       |
| GET    | `/restaurants/<id>/`      | 單獨獲取某 id 之餐廳資料                                                                 |
| DELETE | `/restaurants/<id>/`      | 刪除某 id 之餐廳資料                                                                     |
| POST   | `/restaurants/`           | 新增餐廳                                                                               |
| PATCH  | `/restaurants/<id>/`      | 更改某 id 之餐廳資料                                                                     |

