import React from "react"
import "./cardList.css"
import { dummyTasks } from "../../dummyData"
import { Card } from ".."
import { useDrop } from "react-dnd"
import { DragItemTypes } from "../../consts"

interface Props {
  title: string
}

const CardList: React.FC<Props> = ({ title }) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: DragItemTypes.Card,
      drop: (item, monitor) => console.log(monitor.getItem()),
      collect: monitor => ({
        isOver: !!monitor.isOver()
      })
    }),
    []
  )

  return (
    <div
      className="card-list-wrapper"
      style={{ backgroundColor: isOver ? "red" : "#d8d5e6" }}
      ref={drop}
    >
      <div className="title">{title}</div>
      {dummyTasks.map(task => (
        <Card key={task.id} {...task} />
      ))}
    </div>
  )
}

export default CardList
