import css from "styled-jsx/css"

export default (
  <style>{`
  .loading_box{
    position:relative;
  }
  .loading_text{
    position:absolute;
    top:0px;
    left:45px;
    font-size:16pt;
    color:#777
  } 
  .loading_circle{
    background-color:white;
    border:solid #AFA 3pt;
    border-radius:10pt;
    height:20px;
    width:20px;
  }


  .loading_blank{
    background-color: white;
    animation: rotation 1s linear 0s infinite normal none running;
    width:18px;
    height:10px;
    position:absolute;
    top:11px;
    left:0px;
  }
  @keyframes rotation {
  0% {
    transform: rotate(0deg);
    transform-origin:right;
  }

  100% {
    transform: rotate(360deg);
    transform-origin:right;
  }
}
`}</style>
)
