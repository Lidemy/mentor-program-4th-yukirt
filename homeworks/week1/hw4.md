## 跟你朋友介紹 Git

Git 為一種版本管理工具，還記得之前寫論文時，檔案夾裡面常常會長成這樣子：
```
論文v1.doc
論文final.doc
論文口試final.doc
論文校稿口試final.doc
論文校稿口試final_v1.doc
```
會發現到最後自己都不知道哪一個到底是最終版，或是每個版本之間的不一樣是什麼，但是 Git 可以幫忙你只剩一個檔案，並且幫你記錄每一個修改的不同，唯一的缺點就是 Git 邏輯對初學者有一點複雜，雖然有好看的第三方 GUI 軟體可以使用，但還是需要花點時間去搞懂它的原理，如果只是想單純管理版本那這樣的功能對一般人就很足夠了，但 Git 的強大是在於它可以讓一群人一起使用，而不會讓檔案亂掉，如果檔案像是：
```
分組報告.ppt
組員A個人報告.doc
組員B個人報告.doc
```
當 A 或 B 在改動自己的個人檔案時並不會衝突，因為總是自己改自己的，但是如果剛好一起修改到分組報告時，就可能會有修改的衝突發生，假設遠端的分支是 master，只要 A 和 B 都在本地端複製並新開分支，在做完自己的部分後上傳並且發 PR，這樣兩個人都知道互相對分組報告在做什麼，並且可以一起討論改動是否合理與合適。 