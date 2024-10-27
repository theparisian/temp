import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import AddQuizButton from '../../components/pro/quiz/AddQuizButton'
import QuizForm from '../../components/pro/quiz/QuizForm'
import { quizFormReducer } from '../../components/pro/quiz/quizFormSlice'
import QuizList from '../../components/pro/quiz/QuizList'
import { quizListReducer } from '../../components/pro/quiz/quizListSlice'
import UserCard from '../../components/pro/user/UserCard'
const store = configureStore({
    reducer: combineReducers({
        quizList: quizListReducer,
        quizForm: quizFormReducer
      })
})
const Home = () => {
    return (
        <Provider store={store}>
            <div className="text-center min-h-screen grid grid-cols-3">
                <div className="col-span-1 flex flex-col mx-4 px-4">
                    <div className="logo">
                        <img src="/images/logo.png"/>
                    </div>
                    <UserCard></UserCard>
                    <QuizList></QuizList>
                    <AddQuizButton></AddQuizButton>
                </div>
                <div className="col-span-2 bg-blue-500 h-screen overflow-auto container-right">
                    <QuizForm></QuizForm>
                </div>
            </div>
        </Provider>
    )
}
export default Home
