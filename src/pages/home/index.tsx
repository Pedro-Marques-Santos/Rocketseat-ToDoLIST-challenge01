import { AboutTask } from "../../components/AboutTask";
import { Header } from "../../components/Header";
import { InputTask } from "../../components/InputTask";
import { Tasks } from "../../components/Tasks";
import { store } from "../../store";
import { Container, ContentContainer } from "./styles";

import { Provider as ReduxProvider } from "react-redux";

export function Home() {
  return (
    <ReduxProvider store={store}>
      <Container>
        <Header />
        <ContentContainer>
          <InputTask />
          <AboutTask />
          <Tasks />
        </ContentContainer>
      </Container>
    </ReduxProvider>
  );
}
