import React from "react"
import "./card.css"
import { DragItemTypes, TaskType } from "../../consts"
import { setColorByTaskType } from "./setColorByTaskType"
import { useDrag } from "react-dnd"

interface Props {
  title: string
  bodyText?: string
  taskType: TaskType
}

const Card: React.FC<Props> = ({ title, bodyText, taskType }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragItemTypes.Card,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div
      className="card-wrapper"
      ref={drag}
      style={{ display: isDragging ? "none" : "flex" }}
    >
      <div className="card-content">
        <div className="title">{title}</div>
        <div className="body-text">{bodyText}</div>
      </div>
      <div
        className={"task-color-aside" + " " + setColorByTaskType(taskType)}
      />
    </div>
  )
}

export default Card
