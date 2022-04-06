import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { GlobalStyle } from "./styles/global";
import * as S from "./styles/components";

function App() {
  return (
    <S.App>
      <GlobalStyle />
      <Header />
      <Content />
    </S.App>
  );
}

export default App;
