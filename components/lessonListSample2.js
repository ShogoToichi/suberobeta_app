import React, { useEffect, useState } from "react"
import firebase from "firebase"
import Lesson from "./lessonList/parts/Lesson"
import Title from "./commonParts/Title"

/**
 * this function will be fired when you first time run the app,
 * and it will fetch first 5 posts, here I retrieve them in descending order, until the last added post appears first.
 */
export default function LessonListSample() {
  const db = firebase.firestore()

  const postsFirstBatch = async () => {
    try {
      const data = await db
        .collection("lessons")
        .orderBy("createdAt", "desc")
        .limit(2)
        .get()

      let posts = []
      let lastKey = ""
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          postContent: doc.data().lessonName
        })
        lastKey = doc.data().createdAt
      })

      return { posts, lastKey }
    } catch (e) {
      console.log(e)
    }
  }

  /**
   * this function will be fired each time the user click on 'More Posts' button,
   * it receive key of last post in previous batch, then fetch next 5 posts
   * starting after last fetched post.
   */
  const postsNextBatch = async (key) => {
    try {
      const data = await db
        .collection("lessons")
        .orderBy("createdAt", "desc")
        .startAfter(key)
        .limit(2)
        .get()

      let posts = []
      let lastKey = ""
      data.forEach((doc) => {
        posts.push({
          postId: doc.id,
          postContent: doc.data().lessonName
        })
        lastKey = doc.data().createdAt
      })
      return { posts, lastKey }
    } catch (e) {
      console.log(e)
    }
  }

  const [posts, setPosts] = useState([])
  const [lastKey, setLastKey] = useState("")
  const [nextPosts_loading, setNextPostsLoading] = useState(false)

  useEffect(() => {
    // first 5 posts
    postsFirstBatch()
      .then((res) => {
        setPosts(res.posts)
        setLastKey(res.lastKey)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const fetchMorePosts = (key) => {
    if (key.length > 0) {
      setNextPostsLoading(true)
      postsNextBatch(key)
        .then((res) => {
          setLastKey(res.lastKey)
          // add new posts to old posts
          setPosts(posts.concat(res.posts))
          setNextPostsLoading(false)
        })
        .catch((err) => {
          console.log(err)
          setNextPostsLoading(false)
        })
    }
  }
  const allPosts = (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.postId}>
            <p>{post.postContent}</p>
          </div>
        )
      })}
    </div>
  )

const conso =()=>{
  console.log(lastKey)
  console.log(posts)
}

  return (
    <div>
      <button onClick={conso}>console</button>
      <h2>Infinite scroll in Firebase(firestore) and React.js</h2>
      <div>{allPosts}</div>
      <div style={{ textAlign: "center" }}>
        {nextPosts_loading ? (
          <p>Loading..</p>
        ) : 
        // lastKey.length > 0 ? (
          <button onClick={() => fetchMorePosts(lastKey)}>More Posts</button>
        // ) : (
        //   <span>You are up to date!</span>
        // )
      }
      </div>
    </div>
  )
}
