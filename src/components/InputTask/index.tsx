import { useState } from "react";
import { Container } from "./styles";
import { useAppDispatch } from "../../store";
import { addTask } from "../../store/slices/tasks";
import { v4 as uuidv4 } from "uuid";

export function InputTask() {
  const dispatch = useAppDispatch();

  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ id: uuidv4(), description: task, completed: false }));
      setTask("");
    }
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAddTask}>
        <h5>Criar</h5>
        <i>
          <img src="/iconmore.png" alt="icon" />
        </i>
      </button>
    </Container>
  );
}
