import { configureStore } from '@reduxjs/toolkit'
import Link from 'next/link'
import { Provider } from 'react-redux'
import AuthUser from '../../components/app/user/AuthUser'
import homeReducer from '../../reducers/homeReducer'
import siteConfig from '../../config/site'

const store = configureStore({
  reducer: homeReducer
})

const Home = () => {
  return (
    <Provider store={store}>
      <div className="bg-image text-white text-center min-h-screen">
        <main>
          <h1 className="block pt-12 pb-2 w-3/4 mx-auto">
            <img className="block mx-auto w-auto max-w-full" src="/images/cine-quiz.png" />
          </h1>
          <Link href={siteConfig.APPURL + '/code'}>
            <a className="inline-block bg-white rounded-3xl px-12 py-6 text-blue-500 text-4xl uppercase font-display my-6 shadow-xl">
              jouer
          </a>
          </Link>
        </main>
        <footer className="fixed bottom-10 left-10 right-10 rounded-xl shadow-xl bg-white text-blue-500 px-4 pb-4">
          <div className="inline-block bg-white w-24 h-24 mx-auto p-2 rounded-full -mt-12">
            <img className="w-24" src="/images/coupe.svg" alt="Coup" />
          </div>
          <AuthUser></AuthUser>
        </footer>
      </div>
    </Provider>

  )
}

export default Home
