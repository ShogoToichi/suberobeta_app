import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"
import firebase from "firebase"
import Layout from "../../../components/common/Layout"
import Title from "../../../components/commonParts/Title"


let name=""
let prefecture = ""
let area = ""

export default function SkiResortId(){
  const [update,setUpdate]=useState()
const router = useRouter()
  const db = firebase.firestore()
  const getData =()=>{
    db.collection("skiResorts").doc(router.query.skiresortid).get()
    .then((doc)=>{
      name=doc.data().name
      prefecture=doc.data().prefecture
      area=doc.data().area
      setUpdate(update?false:true)})
  }

  useEffect(()=>{
    getData()
  },[])

return(
<>
<Layout>
<Title title={`${name}のレッスン一覧`} subTitle={`都道府県　:　${prefecture}　　エリア　:　水上`}></Title>
</Layout>
</>
)
}