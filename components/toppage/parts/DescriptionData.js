import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import { Color } from "../../../static/colors"

const toptitle = makeStyles((theme) => ({
  container: {
    backgroundColor: useContext(Color).colors.bgGreen,
    marginTop: "80px"
  },
  cardcontent: {
    textAlign: "center"
  },
  LinkBtn: {
    backgroundColor: useContext(Color).colors.bgGreen
  }
}))

export default function DescriotionData(props) {
  const classes = toptitle()
  return (
    <div>
      <Container maxWidth="md" component="main" className={classes.container}>
        <Grid container>
          <Grid xs={12}>
            <Card>
              <CardHeader
                title={props.title}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.contenttitle}
              />
              <CardContent className={classes.cardcontent}>
                <Typography
                  variant="h8"
                  color="textSecondary"
                >
                  {props.content1}
                  <br />
                  {props.content2}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={props.herf}>
                  <Button
                    variant="contained"
                    fullWidth
                    className={classes.LinkBtn}
                  >
                    {props.btnName}
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
