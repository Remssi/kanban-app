import React from "react"
import "./cardList.css"
import { Card } from ".."
import { useDrop } from "react-dnd"
import { DragItemTypes, Task, TaskStatus } from "../../consts"

interface Props {
  title: string
  status: TaskStatus
  taskDatas: Array<Task>
  handleTaskChange: (id: number, status: TaskStatus, lastIndex: number) => void
}

const CardList: React.FC<Props> = ({
  title,
  status,
  taskDatas,
  handleTaskChange
}) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DragItemTypes.Card,
      drop: (item: Task) => handleTaskChange(item.id, status, taskDatas.length),
      collect: monitor => ({
        isOver: !!monitor.isOver()
      })
    }),
    [status, taskDatas.length]
  )

  return (
    <div
      className="card-list-wrapper"
      style={{ backgroundColor: isOver ? "red" : "#d8d5e6" }}
      ref={drop}
    >
      <div className="title">{title}</div>
      {taskDatas.map(task => (
        <Card key={task.id} {...task} />
      ))}
    </div>
  )
}

export default CardList
