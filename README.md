# 02_JS_practice

2024 前期「JavaScript 演習」リポジトリ 

<h5>JS クイズは JS_Quiz ファイル、授業内容は study ファイルに入っています。</h5>

---

- 4 月 15 日 -0415 ファイル

---

### 0415

<h4>オブジェクトとクラス</h4>

**JavaScript クイズ**

<JS_Quiz/JavaScriptQuiz.html>

**授業内容**

<study/object.html> <br>
<study/ramen.html>

<h3>やったこと</h3>

ちいかわ問題の自分なりの考え

class の chiikawa にオブジェクトの story などを入れて

関数 contents に戻り値でコードを書く
div の中に push なんたらでいれる
あとは ramen.html と同じ

**クラスの定義**

インスタンス化とは
クラスからオブジェクトを生成する処理

## 例

      //   コンストラクタ
      class InstantNoodle {
        //処理などを書く
        constructor(ramen, taste) {
          this.name = ramen;
          this.soup = taste;
        }
        descript() {
          return `<p>${this.name}は、${this.soup}味です。</p>`;
        }
      }

          const ramens = [];

      ramens.push(new InstantNoodle("出前一丁", "醤油"));
      ramens.push(new InstantNoodle("サッポロ一番塩", "塩"));
      console.log(ramens);

      ramens.forEach((ramen) => {
        document.body.insertAdjacentHTML("beforeend", ramen.descript());
      });

      配列に入れてあとから全部出せる

> ramen.html から

---

**テンプレートリテラル**
${変数}は、${変数２}です。

**オブジェクトの復習**

this は変数の中でわざわざ変数名を書かなくてもいいやつ的な
