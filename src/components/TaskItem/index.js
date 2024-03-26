import {ListItem, Tag, Para} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {id, taskName, tagName} = taskDetails

  return (
    <ListItem>
      <Para as="p" right>
        {taskName}
      </Para>
      <Tag as="p">{tagName}</Tag>
    </ListItem>
  )
}

export default TaskItem
