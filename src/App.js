// Components
import Navbar from './components/Navbar';
import WeatherContent from './components/WeatherDetails';
import SideBarNav from './components/Sidebar';



// Styled-components
import { GlobalStyles } from "./styles/GlobalStyle";
import { Wrapper } from './styles/Wrapper.styled';
import { Filter } from './styles/Filter.styled';
// import { AppStyle } from './styles/App.styled';


function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Filter>
        <Navbar />
        <WeatherContent />
      </Filter>
      <SideBarNav />
    </Wrapper>
  );
}

export default App;
