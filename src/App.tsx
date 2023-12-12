import CombLock from './component/CombLock/CombLock';
import Toolbar from './component/Toolbar/Toolbar';

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <div className="d-flex justify-content-center mt-5">
          <CombLock />
        </div>
      </main>
    </>
  );
}

export default App;
