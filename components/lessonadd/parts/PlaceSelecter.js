import React, { useEffect, useState } from "react"
import firebase from "firebase"
import PlaceSelecterUi from "./PlaceSelecterUi"

const allSkiResorts = []
let selected = ""
const PlaceSelecter = (props) => {
  const [update, setUpdate] = useState(false)

  const getFireData = async () => {
    const db = firebase.firestore()

    await db
      .collection("skiResorts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allSkiResorts.push(doc.data().name)
        })
      })
    setUpdate(update ? false : true)
  }

  const handleChange = (event) => {
    selected = event.target.value
    props.setLessonPlace(selected)
    setUpdate(update ? false : true)
  }

  useEffect(() => {
    getFireData()
  }, [])

  return (
    <>
      <PlaceSelecterUi
        skiResorts={allSkiResorts}
        onChange={handleChange}
        selectedSkiResort={selected}
      />
    </>
  )
}

export default PlaceSelecter
