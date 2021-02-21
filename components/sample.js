//画像アップロード用ライブラリーのやつ
//使わない気がするけどとりあえず置いておく
import React from 'react'
import { useFileUpload } from "use-file-upload";
 
const Sample = () => {
  const defaultSrc =
    "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
 
  const [files, selectFiles] = useFileUpload();
  
  const getFireData= async()=>{
    const db = firebase.firestore ();
    const email = Lib.encodeEmail(props.email);
    let userRef= db.collection("users").doc(email);
    let setImage=userRef.set({
      profile:{imageurl :files?.source}
    },{merge: true});
    setImage();
    }


  return (
    <div>
      <img src={files?.source || defaultSrc} alt="preview" />
      <div>
        <button
          onClick={() => {
            getFireData
            selectFiles({ accept: "image/*" }, ({ name, size, source, file }) => {
              console.log("Files Selected", { name, size, source, file });
            })
            console.log(files);
          }
        }
        >
          画像をアップ
      </button>
      </div>
    </div>
  );
}
 
export default Sample;