import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AppPage } from "./pages/app_page";

function App() {
  return (
    <BrowserRouter>
        <Route exact path={"/"} component={AppPage}/>
    </BrowserRouter>
  );
}

export default App;
