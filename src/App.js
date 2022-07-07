import './App.css';
import MainInput from './components/MainInput';

const App = () => {
  return (
    <div className="App">
      <section className='LeftVerticalArea'>
        <h1 className='VerticalTitle'>
          TODO
        </h1>
      </section >
      <section className='RightVerticalArea'>
        <h1 className='HorisontalTitle'>
          list
        </h1>
        <MainInput />
      </section>
    </div>
  );
}

export default App;
