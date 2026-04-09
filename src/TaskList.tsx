type TaskListPropsType = {
  data: DataType
}

type DataType = {
  title: string
  tasks: TaskType[]
  students: string[]
}

type TaskType = {
  taskId: number 
  title: string 
  isDone: boolean
}

 
export const TaskList = (props: TaskListPropsType) => {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <ul>
        {props.data.tasks.map(el => {
          return (
            <li key={el.taskId}>
              <span>{el.taskId}</span>
              <span>{el.title}</span>
              <span>{el.isDone}</span>
            </li>
          )
        })}
      </ul>
 
      <ul>
        {props.data.students.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
      </ul>
    </div>
  )
}