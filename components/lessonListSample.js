// import React from "react"



// export default function LessonListTest(props){
//   state = {
//     items: [],
//     refreshing: false,
//     limit: 2, // 今回はここに読み込むバッチサイズを定義しておく。
//     lastVisible: null,
//     loading: false,
//   }

// constructor(props) {
//     super(props);
//     this.listLoading(props); // 初回ロードを実行

//   }
//   // 初回ロード　リストを遅延ローディングする
// 　// ここは単純に画面表示直後のデータを取り込んでいるだけ
//   // チェックするポイントは以下
//   listLoading = async (props) => {
//     // 読み込み中を開始する
//     this.setState({
//         loading: true,
//       });
// 　　　const firestore = firebase.firestore();
// 　　　await firestore.collection"コレクション")
//      // 今回は、ソート順を、作成時刻降順、としているため、タイムスタンプを利用
//      .orderBy("createdAt", "desc") 
//      .limit(limit).then((items) => {
//         // 取得結果の最後をstateに保持する
//         let lastVisible = items[items.length - 1].createdAt;
//         this.setState({
//           items : items,  //リストに表示するデータ
//           loading: false, //　読み込み中を完了する
//           lastVisible:lastVisible, //　現在読み込んでいる最後のデータを保持する（次に読み込むとき、「これより後」と絞る）
//      })
//    })



//   // 再読み込み　リストが最下部に到着したら読み込み
//   fetchMore =async  () => {
//     console.log('追加読み込み開始');
//     this.setState({
//         refreshing: true,
//     });

// 　　const firestore = firebase.firestore();
//     let additionalQuery = await firestore.collection("コレクション")
//      .orderBy("createdAt", "desc")
//      // 前回読み込んだ最後をカーソルに設定し、そこから、limitまで取得する
//     // orderByで定義した方向にlimit分取得する
//     // lastVisibleは、orderByで定義した項目と同じものを設定する
//      .startAfter(this.state.lastVisible)
//      .limit(limit)

//      let documentSnapshots = await additionalQuery.get()
//      let items = []
//      documentSnapshots.forEach(function(doc) {
//        var res = doc.data();    
//        items.push(res);
//      })
//      // 追加取得したデータの最後のデータをstateに記録する
//      // orderBy("createdAt", "desc") としているのでcreatedAtを保持する
//      let lastVisible = items[items.length - 1].createdAt;
//      // 取得したデータを、既存のリストのデータの後ろにつける
//      let itemsList = this.state.items
//      for(let item of items) {
//        itemsList.push(item)
//      }
//      // stateを更新し、loding状態を終了する
//      this.setState({
//        items : itemsList,
//        loading: false,
//        lastVisible:lastVisible,
//      })
//   }

// // ローディングのインジケータ　下部ページング
//   renderFooter = () => {
//     if (this.state.refreshing) {
//       return <ActivityIndicator size="large" />;
//     } else {
//       return null;
//     }
//   };

//   render() {

//     return(
// "hello"
//     )
//   }
// }