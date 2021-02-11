import "./App.css";
import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import ScrollDown from "./components/ScrollDown";
import MainContent from "./components/MainContent"
function App() {
  return (
    <>
      <Wrapper colorTheme="true">
        <Header colorTheme="true">
          <Menu fonts="true" mobileMenu = "true"/>
        </Header>
        <ScrollDown  fonts = "true" children = "scroll down to see more"/>
      </Wrapper>
      <Wrapper>
        <Header>
          <Menu />
        </Header>
        <MainContent/>
        <ScrollDown children = "keep scrolling, there is still more to come."/>
      </Wrapper>
    </>
  );
}

export default App;
