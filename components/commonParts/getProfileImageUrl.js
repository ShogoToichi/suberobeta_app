import "firebase/storage"
import firebase from "../../redux/store"

// storageのprofileImagesディレクトリの中の名前がfilenameのファイルのダウンロードURLを取得する関数
const getProfileImageUrl = (filename) => {
  return firebase
    .storage()
    .ref()
    .child("profileImages")
    .child(filename)
    .getDownloadURL()
}

export default getProfileImageUrl
