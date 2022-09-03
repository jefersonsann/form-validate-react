import Header from './layout/Header';
import './App.css';
import FormCreate from './layout/Form/FormCreate';
import useMediaQuery from './Hooks/useMediaQuery';
import BgFans from './layout/BgFans';

const App = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <Header />
      <main>
        <section className="container">
          <div className="corpo">
            {matches ? <BgFans /> : null}
            <FormCreate />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
