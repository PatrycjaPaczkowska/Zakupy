import './App.css';
import Form from './containers/Form/Form';
import List from './containers/List/List';
import AppProvider from './Context';

function App() {
  return (
     <AppProvider>
    <div className="App">
      <section className="App-header">
         <Form />
         <List />
      </section>
    </div>
    </AppProvider>
  );
}

export default App;
