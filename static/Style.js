import css from "styled-jsx/css"

export default (
  <style>{`
  /* スマホにおける画面表示 */
  @media(max-width:600px){
    html {
      font-size:62.5%;
    }
  }
  /*タブレットにおける画面表示*/
  @media (min-width:601px) and (max-width:1280px){
    html {
      font-size:90%;
    }
  }
.search {
  display:block;
  color:#444;
  text-decoration:none;
  font-size:20px;
  background-color:white;
}
.search:hover{
  background-color:#DDD;
}
.input {
  width: 160px;
  height: 30px;
  font-size: 16px;
  border: none;
  outline: 0;
  border-bottom: 1px solid #d1d5db;
  margin:0 auto;
  display:block;
}

.underline {
  width: 200px;
  height: 2px;
  background: skyBlue;
  transform-origin: center center;
  transform: scaleX(0);
  transition: transform 0.18s ease-out;
  margin 0 auto;
  position:absolute;
  top:32px;
  left:200px;
}

.input:focus + .underline {
    transform: scaleX(1);
  }
  body{
    margin: 0;
    background-color: rgba(230, 256, 230, 0.75);
    font-family: "Noto Sans";
    white-space: pre-wrap; // 改行反映用css
  }

`}</style>
)
