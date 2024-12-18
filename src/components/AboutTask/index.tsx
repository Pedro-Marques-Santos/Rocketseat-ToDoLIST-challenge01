import { useAppSelector } from "../../store";
import { Container, ContentAbout, Count } from "./styles";

export function AboutTask() {
  const tasks = useAppSelector((state) => state.taskManager.tasks);

  function returnTasksTrue() {
    return tasks.filter((task) => task.completed === true).length;
  }

  return (
    <Container>
      <ContentAbout>
        <h1 className="blue">Tarefas criadas</h1>
        <Count>{tasks.length}</Count>
      </ContentAbout>
      <ContentAbout>
        <h1 className="purple">Concluídas</h1>
        <Count>
          {returnTasksTrue()} de {tasks.length}
        </Count>
      </ContentAbout>
    </Container>
  );
}
