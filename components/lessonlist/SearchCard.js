import React from "react"
import { connect } from "react-redux"
import SearchCardDetail from "./parts/SearchCardDetail"

function SearchCard(props) {
  return (
    <>
      <SearchCardDetail
        tagLabel1={props.tagLabel1}
        tagLabel2={props.tagLabel2}
        tagLabel3={props.tagLabel3}
      />
    </>
  )
}

SearchCard = connect((state) => state)(SearchCard)
export default SearchCard
