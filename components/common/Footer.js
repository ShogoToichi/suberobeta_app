/*eslint-disable*/
import React from "react"
// nodejs library to set properties for components
import PropTypes from "prop-types"
// nodejs library that concatenates classes
import classNames from "classnames"
// material-ui core components
import { List, ListItem } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

// @material-ui/icons

// import styles from "assets/jss/material-kit-react/components/footerStyle.js"
import { container, primaryColor } from "./material-kit-react"

const useStyles = makeStyles({
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "1rem",
    textTransform: "uppercase",
    borderRadius: "0.2rem",
    textDecoration: "none",
    position: "relative",
    display: "block",
    clear: "both"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "1rem 0",
    margin: "0",
    float: "right!important"
  },
  footer: {
    padding: "0.3375rem 0",
    textAlign: "center",
    display: "flex",
    zIndex: "2",
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  footerWhiteFont: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  },
  container,
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    width: "auto"
  },
  icon: {
    width: "1rem",
    height: "1rem",
    position: "relative",
    top: "0.2rem"
  }
})

export default function Footer(props) {
  const classes = useStyles()
  const { whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  })
  return (
    <footer className={footerClasses}>
      <Grid container className={classes.container}>
        <Grid item xs={12}className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://localhost:3000/"
                className={classes.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://localhost:3000/"
                className={classes.block}
                target="_blank"
              >
                Access
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://localhost:3000/"
                className={classes.block}
                target="_blank"
              >
                Adoption
              </a>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made by{" "}
          <a href="http://localhost:3000/" className={aClasses} target="_blank">
            Subero Co. Ltd.
          </a>{" "}
          for all snowboarder.
        </Grid>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
}
