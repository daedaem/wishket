import IntroductionPage from "./components/views/IntroductionPage/IntroductionPage";
import CompanyProvider from "./store/CompanyProvider";
import Header from "./components/Layout/Header";
const App = () => {
  return (
    <CompanyProvider>
      <Header />
      <IntroductionPage />
    </CompanyProvider>
  );
};
export default App;
