# お知らせ送付状況管理アプリ

## 概要

お知らせの送付状況を管理するアプリ

- 自治体職員が市民に送るお知らせの送付状況を管理して、効率的な事務処理を行うためのアプリ
- 情報（名前、住所、お知らせ送付日、お知らせ送付回数、市民からの反応の有無)を持ち、それぞれ検索、登録、修正、削除ができる。 

## 作成背景

市役所の固定資産税課の職員として、新しく家が建つと現地調査依頼のお知らせを市民に送付する。市民から反応がないと手続きが進まないので、送付後３週間ほど経っても反応が無いと、再度お知らせを送付する必要があり、その管理を紙ベースで行っている。誰から反応が有って、誰に再度お知らせを送る必要があるのかを簡単に調べられるアプリが有れば良いと感じた為、作成する。
<img width="884" alt="asIsToBe" src="https://github.com/kima-s/Notification-Management-API/assets/130459578/ba174827-cd82-40a7-ba6b-fd536adf888c">

## 使用技術
- バックエンド：Java, Spring Boot, MyBatis
- フロントエンド：React (JavaScript), Chakra UI
- その他
  - MySQL
  - Docker
  - 自動テスト
  - CI (CheckStyle, Discordへの通知, 自動テストを実行)
  - AWSデプロイ（予定）

## アプリケーション概略図
![application-schematic-diagram](https://github.com/kima-s/Notification-Management-API/assets/130459578/9b865a77-2263-4947-8b89-f6076cdf3e9c)

## アプリケーション機能一覧
- お知らせ新規登録機能  
お知らせの送付状況を新規登録できる。
- お知らせ検索機能  
お知らせの送付状況を検索できる。『名前』、『送付後経過日数』、『お知らせ送付回数』、『市民からの反応』の４項目で入力した項目で抽出を行う。何も入力せずに検索した場合、全件表示する。送付後、市民から反応がなく３週間経過したお知らせ送付状況は赤く色づく。
- お知らせ更新機能  
お知らせの送付状況を更新できる。
- お知らせ削除機能  
お知らせの送付状況を削除できる。

## 使用イメージ
### お知らせ新規登録機能
![notification-create-demo](https://github.com/kima-s/Notification-Management-API/assets/130459578/566e410a-1a1f-400c-908d-1940e91d8622)

### お知らせ検索機能
![notification-search-demo](https://github.com/kima-s/Notification-Management-API/assets/130459578/922a1598-eda9-48eb-b6f5-5531b63d701a)

### お知らせ更新機能
![notification-update-demo](https://github.com/kima-s/Notification-Management-API/assets/130459578/a847556e-3d6c-4eb7-a557-9a9802dc4833)

### お知らせ削除機能
![notification-delete-demo](https://github.com/kima-s/Notification-Management-API/assets/130459578/01d01df8-7084-402f-aa75-fb743f0abcc7)

## 画面詳細図
### 検索画面
<img width="1439" alt="screenExplanation" src="https://github.com/kima-s/Notification-Management-API/assets/130459578/a7736821-62d4-4e40-bb7b-05654c8b25e2">

### 更新画面
<img width="1439" alt="screenExplanation2" src="https://github.com/kima-s/Notification-Management-API/assets/130459578/b35519b6-a59e-4116-885f-79ca0da525d8">

## API仕様書
[swaggerを用いたAPI仕様書](https://kima-s.github.io/Notification-Management-API/)

## ローカルでのアプリケーション起動方法
- Git, Java, Node.Js, Dockerをインストールする。

-  リポジトリをgit cloneする。  
git clone https://github.com/kima-s/Notification-Management-API.git

-  クローンしたディレクトリに移動する。

-  Dockerを起動する。  
docker compose up

- Spring Bootを起動する。  
./gradlew bootRun

- frontendディレクトリに移動する。  
cd frontend/

- 依存関係をインストールし、Reactのアプリケーションを起動す る。  
npm install  
npm start

## 自動テスト
以下のテストコードを実装。

- 単体テスト  
NotificationServiceImpl  
NotificationMapper
- 結合テスト  
NotificationController

自動テストの実行結果
<img width="559" alt="junitTestReport" src="https://github.com/kima-s/Notification-Management-API/assets/130459578/228c53df-2243-4831-b68a-eeb46d7d1740">

## 振り返り
単純な機能しか実装していませんが、当初の予定より大幅に作成期間が伸びて１ヶ月以上かかってしまいました。アプリケーションを作成するのが初めてで、そもそも仕組みを理解するところからだったのでエラーを解決しても、また次のエラー発生の繰り返しでとても大変でした。仕様を最初に固めて、計画を立てて作成することがいかに難しいかを痛感しました。
機能面で追加したい部分がまだありますが、形にすることができたので一旦満足しています。

## 今後の展望
- エラーの種類に合わせた表示の実装
- フロントのデザインの改良
- ログイン機能
- CDの導入
- フロント側の自動テスト
