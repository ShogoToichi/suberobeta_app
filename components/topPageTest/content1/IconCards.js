import React from "react"
import IconCard from "./IconCard"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles((theme) => ({}))

const IconCards = () => {
  const classes = styles()
  return (
    <>
      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.container}
      >
        <Grid item className={classes.cardContent}>
          <IconCard
            src={"../../../static/searchProfile.png"}
            stepNumber={"01"}
            title={"講師を探す"}
            description={
              "「レッスン一覧」から自分に合ったレッスンを探してみましょう。検索欄から条件を絞って検索することもできます。"
            }
          />
        </Grid>
        <Grid item className={classes.cardContent}>
          <IconCard
            src={"../../../static/chat.png"}
            stepNumber={"02"}
            title={"事前相談で確認"}
            description={
              "suero上で、聞きたいことを講師に事前確認しましょう。細かい時間や場所、レッスン内容など調節してください。"
            }
          />
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        spacing={3}
        className={classes.container}
      >
        <Grid item className={classes.cardContent}>
          <IconCard
            src={"../../../static/paymentCard.png"}
            stepNumber={"03"}
            title={"決済する"}
            description={
              "レッスンの詳細が決まったら事前に決済をしましょう。トラブルを回避するため、連絡先は決済後に交換してください。"
            }
          />
        </Grid>
        <Grid item className={classes.cardContent}>
          <IconCard
            src={"../../../static/snowboardIcon.jpg"}
            stepNumber={"04"}
            title={"レッスン当日"}
            description={
              "現地集合・現地解散でレッスンを受講しましょう。習いたいことを積極的に講師に伝えて充実したレッスンを楽しんでください！！"
            }
          />
        </Grid>
      </Grid>
    </>
  )
}

export default IconCards
