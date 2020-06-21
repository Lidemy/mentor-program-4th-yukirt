``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 定義 function 為 `isValid`，輸入值為 `arr`，預想輸入型態為 Aray
2. 建立 `for` 迴圈設定變數 `i` 為零，檢查 `i` 是否 `< arr.length (陣列元素個數)`，是則繼續執行，執行單一迴圈完會讓 `i = i + 1`，開始進入第一圈迴圈
3. 判斷輸入值 `arr[i]` 是否小於零，如為是則直接返回 `invalid` 字串並離開此程式
4. 建立 `for` 迴圈設定變數 `i` 初始值為 `2`，檢查 `i` 是否 `< arr.length (陣列元素個數)`，是則繼續執行，執行單一迴圈完會讓 `i = i + 1` ，開始進入第一圈迴圈
5. 判斷如果 `arr[i] !== arr[i-1] + arr[i-2]` 為真，則直接返回 `invalid` 字串並離開此程式
6. 如前面兩個迴圈皆無觸發 `return`，在最後會回傳 `valid` 字串並結束此程式
