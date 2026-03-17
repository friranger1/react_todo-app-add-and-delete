import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../todo/TodoItem';

type Props = {
  visibleTodos: Todo[];
  tempTodo: Todo | null;
  handlerDeleteTodo: (id: number) => void;
};

export const Main: React.FC<Props> = ({
  visibleTodos,
  tempTodo,
  handlerDeleteTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {visibleTodos.map(toDo => {
        return (
          <TodoItem
            key={toDo.id}
            toDo={toDo}
            isLoading={false}
            handlerDeleteTodo={handlerDeleteTodo}
          />
        );
      })}
      {tempTodo && (
        <TodoItem
          key={0}
          toDo={tempTodo}
          isLoading={true}
          handlerDeleteTodo={handlerDeleteTodo}
        />
      )}
    </section>
  );
};
