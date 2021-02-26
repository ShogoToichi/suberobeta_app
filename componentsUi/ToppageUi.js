import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import Link from "next/link";

const toptitle = makeStyles({
  title: {
    position: 'relative',
    width: '100%',
    margin: '5px',
    textAlign: 'left',
  },
  name: {
    color: '#3CB371',
    fontWeight: 'bold',
    padding:'4px',
    fontSize:"160px",
    marginLeft:"20px",
  },
  img: {
    position: 'absolute',
    top: '50px',
    right: '200px',
    height: '300px',
    width: '300px',
  },
  main:{

  },
  maintitle:{
    marginTop: '200px',
    textWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    backgroundColor: '#CBFFD3',
    marginTop: '80px',
  },
});

export default function Toppage() {
  const classes = toptitle();

  return (
    <div>
    
        <div className={classes.title}>
          <Typography variant="h5" style={{marginLeft:"20px"}}>
            好きな時間に好きな場所で
          </Typography>

          <Typography variant="h5" style={{marginLeft:"20px"}}>
            スキー・スノーボードレッスンは
          </Typography>

          <Typography className={classes.name} variant="h1" >
            subero
          </Typography>

          <img src="/static/snowboard.jpg" width="100px" alt="スノーボード画像" className={classes.img}/>
        </div>

        <div className={classes.main}>
          <div className={classes.maintitle}>
            <Box color="#3CB371">
            <Typography variant="h5" >
              「教えたい人」と「学びたい人」のレッスンプラットフォーム
            </Typography>
            </Box>
          </div>

          <div>
              <Container maxWidth="md" component="main" className={classes.container}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid  xs={12}>
                      <Card>
                        <CardHeader
                          title="手軽に自分に合ったレッスンが受けられる"
                          subheader=""
                          titleTypographyProps={{ align: 'center',color: 'initial' ,}}
                          subheaderTypographyProps={{ align: 'center' }}
                          className={classes.cardHeader}
                        />
                        <CardContent>
                          <div className={classes.cardPricing}>
                            <Typography variant="h6" color="textSecondary" style={{textAlign:'center'}}>
                              ジャンル、レベル、場所、時間など目的に合ったレッスンを受けることができます。<br></br>
                              現地集合・現地解散で気軽にレッスンを受けてみましょう。
                            </Typography>
                          </div>
                        </CardContent>
                        <CardActions>
                          <Link href="/lesson_list">
                          <Button variant="contained" fullWidth style={{color: '',backgroundColor: '#CBFFD3'}}>
                            レッスン一覧
                          </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                </Grid>
              </Container>

              <Container maxWidth="md" component="main" className={classes.container}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid  xs={12}>
                      <Card>
                        <CardHeader
                          title="自分の身に着けた技術をみんなと共有"
                          subheader=""
                          titleTypographyProps={{ align: 'center',color: 'initial' ,}}
                          subheaderTypographyProps={{ align: 'center' }}
                          className={classes.cardHeader}
                        />
                        <CardContent>
                          <div className={classes.cardPricing}>
                            <Typography variant="h6" color="textSecondary" style={{textAlign:'center'}}>
                              磨いてきた技術・理論を周りに共有してスキー・スノーボードの輪を広めよう。<br></br>
                              午前中は自分の練習、午後はsuberoレッスンなど自由にレッスンを組むことができます。
                            </Typography>
                          </div>
                        </CardContent>
                        <CardActions>
                          <Link href="/lesson_add">
                          <Button variant="contained" fullWidth style={{color: '',backgroundColor: '#CBFFD3'}}>
                            レッスンを作る
                          </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                </Grid>
              </Container>

              <Container maxWidth="md" component="main" className={classes.container}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid  xs={12}>
                      <Card>
                        <CardHeader
                          title="リーズナブル"
                          subheader=""
                          titleTypographyProps={{ align: 'center',color: 'initial' ,}}
                          subheaderTypographyProps={{ align: 'center' }}
                          className={classes.cardHeader}
                        />
                        <CardContent>
                          <div className={classes.cardPricing}>
                            <Typography variant="h6" color="textSecondary" style={{textAlign:'center'}}>
                              スノースクールなどの企業ではなく、個人同士で納得した金額でレッスンを契約するため<br></br>
                              比較的リーズナブルに教えてもらうことができます。
                            </Typography>
                          </div>
                        </CardContent>
                        <CardActions>
                          <Link href="/lesson_list">
                          <Button variant="contained" fullWidth style={{color: '',backgroundColor: '#CBFFD3'}}>
                            レッスンを探す
                          </Button>
                          </Link>
                        </CardActions>
                      </Card>
                    </Grid>
                </Grid>
              </Container>

              
          </div>

        </div>
    </div>
  );
}
