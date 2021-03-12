//参考URL : https://qiita.com/oukayuka/items/d3cee72501a55e8be44a
//ngramのソースコードも上のサイトのリンクから見れる
//リンクわかりずらそうだったから一応追加
// https://github.com/oukayuka/ReactFirebaseBook/tree/master/04-firestore/mangarel-demo/src/utils

import React from "react"
import { useRouter } from "next/router"
import SearchCardDetail from "../lessonList/parts/SearchCardDetail"

const SearchCard = (props) => {
  const router = useRouter()

  // 入力された時の処理
  const doChange = async (e) => {
    const skiResortName = e.target.textContent
    router.push(`/lesson_search/skiResorts/${skiResortName}`)
  }
  return (
    <SearchCardDetail
      searchingSkiResortName={props.searchingSkiResortName}
      onChange={doChange}
      tagLabel1="初心者歓迎"
      tagLabel2="家族歓迎"
      tagLabel3="上級者専用"
    />
  )
}
export default SearchCard
