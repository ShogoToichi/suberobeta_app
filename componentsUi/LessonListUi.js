import React from 'react';
import Link from "next/link";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const lessonlist = makeStyles({
  rayout: {
    float: 'center',
  },

  top: {
    width: '100%',
    margin: '8px',
    
  },

  lessonlist: {
    width: '600px',
    margin: '5px',
  },

  btn:{
    float: 'right',
    color: 'black',
    backgroundColor: '#90EE90' 
  },
  cardheader:{
    cursor : "pointer",
  }
});

export default function lessonList() {
  const classes = lessonlist();

  return (
    <div className={classes.rayout}>
        <div className={classes.top}>
            <Typography variant="h5" style={{ marginTop: 10, marginBottom: 20}}>レッスン一覧</Typography>
            <Typography style={{ marginTop: 10, marginBottom: 20}} variant="h8">時間や場所、レベルなど自分に合ったレッスンを見つけよう</Typography>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          className={classes.cardheader}
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Link href="/lesson_info">
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                    </Link> 
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Link href="/lesson_info">
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                    </Link> 
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Link href="/lesson_info">
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                    </Link> 
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Link href="/lesson_info">
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                    </Link> 
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                  </CardContent>
              </Card>
            </div>

            <div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                  </CardContent>
              </Card>
            </div><div className={classes.lessonlist}>
              <Card>
                    <CardHeader
                          avatar={
                          <Avatar aria-label="recipe" className={classes.avatar}>
                          </Avatar>
                          }
                          title="「レッスン名」"
                    />
                  <CardContent>
                    <Typography variant="body2">日時:</Typography>
                    <Typography variant="body2">場所：</Typography>
                    <Typography variant="body2">料金：</Typography>
                    <Typography variant="body2">レッスン内容：</Typography>
                    <Button variant="outlined" size="small" className={classes.btn} >詳細はこちら</Button>
                  </CardContent>
              </Card>
            </div>
    </div>
  );
}
