import { useAppDispatch } from "../../store";
import { deleteTask, toggleTaskCompletion } from "../../store/slices/tasks";

import {
  About,
  Container,
  Status,
  TrashIcon,
  StatusWrapper,
  CompletedStatus,
} from "./styles";

interface TaskProps {
  id: string;
  completed: boolean;
  description: string;
}

export function Task({ id, completed, description }: TaskProps) {
  const dispatch = useAppDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(id));
  };

  return (
    <Container $status={completed}>
      <StatusWrapper>
        {completed ? (
          <CompletedStatus onClick={handleToggleCompletion}>
            <img src="/iconok.png" alt="Completed" />
          </CompletedStatus>
        ) : (
          <Status onClick={handleToggleCompletion} />
        )}
        <About $status={completed}>{description}</About>
      </StatusWrapper>
      <TrashIcon
        src="/trash.png"
        alt="Delete task"
        onClick={handleDeleteTask}
      />
    </Container>
  );
}
