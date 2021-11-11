import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Header, Main } from './components';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory}>
        <Header />
        <Main />
      </Router>
    </Provider>
  );
}

export default App;
