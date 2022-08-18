import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value; //入力の値を変数として受け取る
  document.getElementById("add-text").value = ""; //入力を初期化する　残さない
  createIncompleteList(inputText);
};

//未完了のリストから中身を消す（完了でも、削除委でもどっちにしろ消すから一般化）
const deleteFromInompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //divの作成　jsで、htmlを作成する。 class名　list-rowを指定
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの作成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタンの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから消す
    deleteFromInompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //todoの課髪をtextとして取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグの作成
    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタンの作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    //戻るボタンクリック時の機能
    returnButton.addEventListener("click", () => {
      //押された戻るボタンの親タグを完了リストから消す
      const returnTarget = returnButton.parentNode;
      document.getElementById("complete-list").removeChild(returnTarget);

      //todoの課髪をtextとして取得 テキストの取得
      const backtext = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(backtext);
    });

    //divタグの子要素に各要素を指定
    div.appendChild(li);
    div.appendChild(returnButton);
    console.log(addTarget);
    //htmlに反映
    document.getElementById("complete-list").appendChild(div);
  });

  //削除ボタンの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから消す
    deleteFromInompleteList(completeButton.parentNode);
  });

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
