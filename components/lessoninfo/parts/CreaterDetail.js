import React, { useContext } from "react"
import Link from "next/link"
import Typography from "@material-ui/core/Typography"
import Img from "../../commonParts/Img"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import { Color } from "../../../static/colors"
import Grid from "@material-ui/core/Grid"
import Rating from "@material-ui/lab/Rating"
import Box from "@material-ui/core/Box"

const createrdetail = makeStyles((theme) => ({
  createrdetail: {
    // width: "20%",
    // display: "inline-block",
    // verticalAlign: "top",
    // marginRight: "20px",
  },
  img: {
    cursor: "pointer"
  },
  name: {
    margin: "20px 0px",
    color: useContext(Color).colors.Green,
    cursor: "pointer"
  },
  evaluation: {
    flexDirection: "row-reverse",
    "& input": {
      display: "none"
    },
    "& label": {
      position: "relative",
      color: "#ffcc00"
    },
    margin: "0px 0px 20px 20px"
  },
  introduction: {
    margin: "10px"
  },
  introductTitle: {
    display: "block",
    textAlign: "center"
  },
  introductDescription: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
}))
export default function CreaterDetail(props) {
  const classes = createrdetail()
  return (
    <Card>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Link href={`/profile_show/${props.userId}`} className={classes.img}>
            <Img src={props.imageUrl} size="100" />
          </Link>
          <Link href={`/profile_show/${props.userId}`}>
            <Typography variant="body1" className={classes.name}>
              {props.name}
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Typography
              variant="body1"
              component="legend"
              className={classes.assessment}
            >
              評価:
            </Typography>
            <Rating name="read-only" value={5} readOnly />
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.introductTitle}>
            自己紹介
          </Typography>
          <Typography variant="body2" className={classes.introductDescription}>
            {props.introduction}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

// export default function CreaterDetail(props) {
//   const classes = createrdetail()
//   return (
//     <Card className={classes.createrdetail}>
//       <Grid container>
//         <Grid item className={classes.head}>
//           <Link href={`/profile_show/${props.userId}`} className={classes.img}>
//             {/* <div > */}
//               <Img src={props.imageUrl} size="100" />
//             {/* </div> */}
//           </Link>

//           <Link href={`/profile_show/${props.userId}`}>
//             <Typography variant="body1" className={classes.name}>
//               {props.name}
//             </Typography>
//           </Link>
//         <Grid>

//         <Grid item className={classes.evaluation}>
//           <Typography variant="body1" className={classes.assessment}>
//             評価 :
//             <input id="star1" type="radio" name="star" value="5" />
//             <label for="star1">★</label>
//             <input id="star2" type="radio" name="star" value="4" />
//             <label for="star2">★</label>
//             <input id="star3" type="radio" name="star" value="3" />
//             <label for="star3">★</label>
//             <input id="star4" type="radio" name="star" value="2" />
//             <label for="star4">★</label>
//             <input id="star5" type="radio" name="star" value="1" />
//             <label for="star5">★</label>
//           </Typography>
//         </Grid>

//         <Grid item className={classes.introduction}>
//           <Typography variant="body1" className={classes.introductTitle}>
//             自己紹介
//           </Typography>
//           <Typography variant="body2" className={classes.introductDescription}>
//             {props.introduction}
//           </Typography>
//         </Grid>
//       </Grid>
//     </Card>
//   )
// }
