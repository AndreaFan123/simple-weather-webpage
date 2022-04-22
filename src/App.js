// Components
import Navbar from './components/Navbar';
import WeatherContent from './components/WeatherDetails';
import BurgerMenu from './components/Burger';



// Styled-components
import { GlobalStyles } from "./styles/GlobalStyle";
import { Wrapper } from './styles/Wrapper.styled';
import { Filter } from './styles/Filter.styled';
import SideBar from './components/Sidebar';


// Import useState
import { useState } from 'react';


function App() {

  const [open, setOpen] = useState(false);



  return (
    <Wrapper>
      <GlobalStyles />
      <Filter>
        <Navbar />
        <WeatherContent />
      </Filter>
      <BurgerMenu open={open} setOpen={setOpen} />
      <SideBar open={open} setOpen={setOpen} />
    </Wrapper>
  );
}

export default App;
