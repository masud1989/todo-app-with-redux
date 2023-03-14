import { Provider } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
        <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <div class="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg">
                Simple Todo Application with Redux
            </div>
            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
               <Header />
                <hr class="mt-4" />
               <TodoList />
                <hr class="mt-4" />
                <Footer />
            </div>
    </div>
    </Provider>
    
  );
}

export default App;
