import Link from "next/link";
import Layout from "../components/Layout";
import TopContents from "../components/TopContents";
import Lesson from "../components/Lesson";


export default () =>(
  <Layout header="トップページ" title="トップページ">
    <TopContents/>
<Lesson lessonid="id"
                  name="名前"
                  place="saitama"
                  time="時間"
                  text="文章"
          />

  </Layout>
);