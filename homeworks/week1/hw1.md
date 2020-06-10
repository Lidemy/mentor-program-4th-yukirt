## 交作業流程

1. 將 `mentor-program-4th-<username>` clone 到本地端
2. 轉至此 repo 的目錄 `cd mentor-program-4th-<username>`
3. 新建一個當週的 branch 並轉至此 branch `git checkout -b week1_homework`
4. 將寫好的檔案加至 git `git add hw1.md`
5. 確認無誤後進行 commit `git commit -m "Finish week 1 homework"`
6. push 上 github `git push`
7. 到 GitHub 網站上發起 PR
8. 複製 PR 網址並上學習系統繳交作業

---
如果作業無誤 PR merge 之後
1. 切換至 master branch `git checkout master`
2. pull 最新的 master `git pull` 
3. 刪除已 merge 的 branch `git branch -d week1_homework`
4. 重複第一部分步驟開始下一週的作業繳交
