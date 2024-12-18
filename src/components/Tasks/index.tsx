import { NoTasks } from "../NoTasks";
import { useAppSelector } from "../../store";
import { Task } from "../Task";
import { Container } from "./styles";

export function Tasks() {
  const tasks = useAppSelector((state) => state.taskManager.tasks);

  return (
    <Container>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <Task
            id={task.id}
            description={task.description}
            completed={task.completed}
            key={index}
          ></Task>
        ))
      ) : (
        <NoTasks />
      )}
    </Container>
  );
}
