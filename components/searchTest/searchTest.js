
import React, { Component } from "react";
import SubmitPostComponent from "./SubmitPostComponent";
import AllPostsComponent from "./AllPostsComponent";
import SearchPostsComponent from "./SearchPostsComponent";
// import algoliasearch from "algoliasearch/lite"
import Grid from "@material-ui/core/Grid";
import firebase from "firebase"
const algoliasearch = require("algoliasearch")
const ALGOLIA_APP_ID = "3NYWPSR8W3"
const ALGOLIA_API_KEY = "b0fdb445be56447dabf35f8de1ddc53a"
const client = algoliasearch(
  ALGOLIA_APP_ID,
  ALGOLIA_API_KEY
);
const index = client.initIndex("suberobeta");
  const db=firebase.firestore()

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.ReadPosts = this.ReadPosts.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      posts: [],
      searchResultPosts: []
    };
  }


  componentDidMount() {
    this.ReadPosts();
  }

  onSubmit(e) {
    e.preventDefault();
    let data = { lessonName: e.target.title.value, lessonDescription: e.target.content.value };
    db.collection("lessons")
      .doc()
      .set(data);
    e.target.title.value = "";
    e.target.content.value = "";
  }

  async ReadPosts() {
    let tempResults = [];
    await db
      .collection("lessons")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          tempResults.push({
            title: doc.data().lessonName,
            content: doc.data().lessonDescription
          });
        });
      });
    this.setState({ posts: tempResults });
  }

  async onSearch(e) {
    let tempResults = [];
    await index
      .search({
        query: e.target.value
      })
      .then(function(responses) {
        tempResults = responses.hits;
        console.log(responses)
      });

    this.setState({ searchResultPosts: tempResults });
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <SubmitPostComponent onSubmit={this.onSubmit} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AllPostsComponent posts={this.state.posts} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SearchPostsComponent
            onSearch={this.onSearch}
            searchResultPosts={this.state.searchResultPosts}
          />
        </Grid>
      </Grid>
    );
  }
}

export default App;
