import FormAdd from './components/FormToAddMusic/Form';
import Header from './components/Header/Header';
import MusicTable from './components/MusicTable/MusicTable';
import Song from './components/Song/Song';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
          <div className="main">
          <FormAdd/>
            <div className="musicMain">
              <MusicTable/>
              <Song/>
            </div>
          </div>
      </main>
    </div>
  );
}

export default App;
