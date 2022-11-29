
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/Navbar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, documentary, horror, orginals, romance, trending } from './Urls';



function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url = {trending} title = {'Netflix Orginals'}/>
      <RowPost url = {action} title = { 'Action Movies'} isSmall />
      <RowPost url = {romance} title = { 'Romance'} isSmall />
      <RowPost url = {orginals} title = { 'Trending'} isSmall />
      <RowPost url = {horror} title = { 'Horror'} isSmall />
      <RowPost url = {documentary} title = { 'Documentaries'} isSmall />
    </div>
  );
}

export default App;
