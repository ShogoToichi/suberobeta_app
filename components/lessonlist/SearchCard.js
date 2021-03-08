import React, { useState, useEffect } from "react"
import firebase from "firebase"
import { useRouter } from "next/router"
import { connect } from "react-redux"
import Lib from "../../Lib/address_lib"
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
