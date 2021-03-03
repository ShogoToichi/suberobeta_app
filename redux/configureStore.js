// 参照https://qiita.com/yasuhiro-yamada/items/bd86d7c9f35ebb1c1e7c

// redux-persistの設定を行う
import { createStore } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { fireReducer } from "./store"

const persistConfig = {
  key: "root", // Storageに保存されるキー名を指定する，とりあえず例のままのroot
  storage, // 保存先としてlocalStorageがここで設定される
  whitelist: ["login", "username", "email", "imageurl"] // Storageに保存するstateを指定
  // blacklist: ['visibilityFilter']  // 保存しない設定?
}

// 永続化設定されたReducerとして定義?
const persistedReducer = persistReducer(persistConfig, fireReducer)

const store = createStore(
  persistedReducer
  // ↓ SSR時にwindowがないよってエラーが出るよ．消しても動いたからコメントアウトしたままにしておく, どんな影響があるのかはわからず
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store)
export default store
