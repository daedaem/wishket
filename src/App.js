import IntroductionPage from "./components/views/IntroductionPage/IntroductionPage";
import CompanyProvider from "./store/CompanyProvider";

const App = () => {
  return (
    <CompanyProvider>
      <main>
        <IntroductionPage />
      </main>
    </CompanyProvider>
  );
};
export default App;
