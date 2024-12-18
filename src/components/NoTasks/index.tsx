import { Container } from "./styles";

export function NoTasks() {
  return (
    <Container>
      <img src="/clipboard.png" alt="Ilustração de um clipboard" />
      <h1>Você ainda não tem tarefas cadastradas</h1>
      <h2>Crie tarefas e organize seus itens a fazer</h2>
    </Container>
  );
}
