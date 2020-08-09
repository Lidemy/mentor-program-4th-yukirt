## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <b> 粗體表強調
2. <i> 斜體文字，中文較少使用，在英文通常表引用
3. <u> 底線，通常表特殊名詞，像是地名或人名
 
## 請問什麼是盒模型（box modal）
盒模型的基本向內依序為 border、padding、box，外部則是 margin，因此在算實際 box 大小時須將 border、padding、box 相加才是實際上的大小，同時也要注意上下左右的值。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
- inline 表可以將元素在同一行裡面呈現
- block 表區塊元素，可以將元素以列呈現
- inline-block 表可以將元素以 inline 方式呈現，但又可以保有 block 的屬性，就像是可以用行排列的 block

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
- static 為預設值，為瀏覽器自動排版
- relative 可以以 static 為基準值，上下左右都可以加參數微調
- absolute 像是絕對位置，會以上面最近的可定位元素為基準，上下左右都可以加參數微調
- fixed 以瀏覽器視窗作為定位點，亦即當視窗上下或左右滑動時，元素還是會固定在視窗的固定位置
