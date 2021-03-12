import React, { useEffect } from "react"
import ImageCard from "./ImageCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import firebase from "firebase"
import Link from "next/link"

const styles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#E0EBF5"
  }
}))

const ImageCards = () => {
  const classes = styles()
  const db = firebase.firestore()
  const Cards = []
  // const getFireData = async () => {
  //   await db
  //     .collection("lessons")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         Cards.push(
  //           <Grid item>
  //             <ImageCard
  //               lessonImageUrl={doc.data().createrImageUrl}
  //               lessonName={doc.data().lessonName}
  //               createrId={doc.data().createrId}
  //               createrImageUrl={doc.data().createrImageUrl}
  //               createrName={doc.data().createrId}
  //               lessonValue={doc.data().lessonPrice}
  //             />
  //           </Grid>
  //         )
  //       })
  //     })
  // }
  for (let i = 0; i < 5; i++) {
    Cards.push(
      <Link href="/" key={i.toString()}>
        <Grid item xs={12} sm={4} md={2}>
          <ImageCard
            lessonImageUrl={
              "https://firebasestorage.googleapis.com/v0/b/subero-prototype.appspot.com/o/profileImages%2F20213712305initImage.png?alt=media&token=2a06ae85-c39d-4e56-85c0-113691ec2aec"
            }
            lessonName={"レッスン名"}
            createrId={""}
            createrImageUrl={
              "https://firebasestorage.googleapis.com/v0/b/subero-prototype.appspot.com/o/profileImages%2F202137142992788780452-kabekin_0001-Mjzm-1920x1080-MM-100.jpg?alt=media&token=638bd743-9fa1-4634-a715-01282e6974e4"
            }
            createrName={"subero-kun"}
            lessonValue={"10,000 円"}
          />
        </Grid>
      </Link>
    )
  }
  // useEffect(() => {
  //   getFireData()
  // }, [])

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      spacing={1}
      className={classes.container}
    >
      {Cards.slice(0, 5)}
    </Grid>
  )
}

export default ImageCards
