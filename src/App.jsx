import './App.scss';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate, } from 'react-router-dom';
import { ContextProvider } from './storage/context';
import { reducer } from './storage/reducers/reducer';
import { PATHS } from './utils/constants';
import StorageHandler from './storage/StorageHandler';
import Internationalization from './components/common/Internationalization';
import ProtectedRoute from './components/common/Routing';
import Helper from './components/common/Helper';
import ErrorModal from './components/common/ErrorModal';
import LoadingLayer from './components/common/LoadingLayer';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import PlayersPage from './components/pages/PlayersPage';
import Error404Page from './components/pages/Error404Page';
import MenuBar from './components/common/MenuBar';

const App = () => {
  const {
    root,
    notFound,
    login,
    home,
    players,
    /* params: {
      playerId,
    }, */
  } = PATHS;

  return (
    <ContextProvider
      initialState={{ error: null, intl: {}, }}
      reducer={reducer}
    >
      <Internationalization>
        <Router>
          <Routes>
            <Route path={notFound} exact element={<Error404Page />} />
            <Route path={login} exact element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path={home} exact element={<HomePage />} />
              <Route path={players} exact element={<PlayersPage />} />
            </Route>
            <Route index path={root} exact element={<LoginPage />} />
            <Route path="*" element={<Navigate replace to={notFound} />} />
          </Routes>
          <MenuBar />
        </Router>
        <ErrorModal />
        <LoadingLayer />
        <Helper />
        <StorageHandler />
      </Internationalization>
    </ContextProvider>
  );
}

export default App;
