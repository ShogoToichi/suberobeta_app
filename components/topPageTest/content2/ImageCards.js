import React, { useEffect, useState } from "react"
import firebase from "firebase"
import ImageCard from "./ImageCard"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({
  // アニメーションの設定
  "@keyframes loop": {
    from: {
      transform: "translateX(100%)"
    },
    to: {
      transform: "translateX(-100%)"
    }
  },
  "@-webkit-keyframes loop2": {
    from: {
      transform: "translateX(0)"
    },
    to: {
      transform: "translateX(-200%)"
    }
  },
  // アニメーションの指示
  CardList: {
    display: "flex",
    width: "100vw",
    height: "100%",
    overflow: "hidden",
    whiteSpace: "nowrap",

    "& ul": {
      margin: "0",
      padding: "0",
      width: "auto",
      height: "100%",
      listStyle: "none",
      "&:hover": {
        animationPlayState: "paused",
      },
      "& li": {
        display: "inline-block",
        margin: "0 .3em .3em 0",
        padding: "0"
      }
    },
    "& ul:first-child": {
      animation: "$loop 40s -20s linear infinite"
    },
    "& ul:last-child": {
      animation: "$loop2 40s linear infinite"
    }
  }
}))

const ImageCards = () => {
  const classes = styles()
  const [items, setItems] = useState("no item")
  const CardItems = []

  const getFireData = async () => {
    const db = firebase.firestore()

    await db
      .collection("lessons")
      .orderBy("createdAt", "desc")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          CardItems.push(
            <li>
              <ImageCard
                createrId={doc.data().createrId}
                lessonImageUrl={doc.data().createrImageUrl}
                createrImageUrl={doc.data().createrImageUrl}
                lessonName={doc.data().lessonName}
                lessonTime={doc.data().lessonTime}
                lessonPlace={doc.data().lessonPlace}
                lessonPrice={doc.data().lessonPrice}
                // createrName={doc.data().createrId}
                key={doc.id.toString()}
              />
            </li>
          )
        })
      })
    setItems(CardItems)
  }

  useEffect(() => {
    getFireData()
  }, [])

  return (
    <div className={classes.CardList}>
      <ul>{items}</ul>
      <ul>{items}</ul>
    </div>
  )
}

export default ImageCards
