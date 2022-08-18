import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value; //入力の値を変数として受け取る
  document.getElementById("add-text").value = ""; //入力を初期化する　残さない

  //divの作成　jsで、htmlを作成する。 class名　list-rowを指定
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの作成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから消す
    const deleteTarget = deleteButton.parentNode; //親要素を取得
    document.getElementById("incomplete-list").removeChild(deleteTarget);
    console.log(deleteTarget);
  });

  //divの作成　jsで、htmlを作成する。 class名　list-rowを指定--------------------------------
  const div2 = document.createElement("div");
  div2.className = "list-row";

  //liタグの作成
  const li2 = document.createElement("li");
  li2.innerText = inputText;
  //戻るボタンの作成

  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    alert("return");
  });
  div2.appendChile(li2);
  div2.appendChild(returnButton);
  //-------------------------------------------------------------------------------------

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加　ここで初めて使える
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd()); //クリックされたら関数を呼ぶ
