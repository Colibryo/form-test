import './styles/app.css';
import Footer from './components/Footer'
import Form from './components/FormContact';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>Hello World</h1>
      </header>
      <main>
        <div>
          <Form />
        </div>
      </main>
      <Footer />
    </div >
  );
}

export default App;
