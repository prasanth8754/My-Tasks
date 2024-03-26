import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  BgCont,
  Heading,
  LeftCont,
  RightCont,
  Label,
  Input,
  Button,
  UlCont,
  TaskUlCont,
  NoTaskHeading,
} from './styledComponents'
import TagBtnItem from '../TagBtnItem'
import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskList: [],
    taskName: '',
    tagName: tagsList[0].optionId,
    activeBtnId: '',
    isTagActive: false,
  }

  onChangeTaskInput = event => {
    this.setState({taskName: event.target.value})
  }

  onChangeTagInput = event => {
    this.setState({tagName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {taskName, tagName} = this.state

    if (taskName !== '') {
      const newList = {
        id: uuidv4(),
        taskName,
        tagName,
      }

      this.setState(prevState => ({
        taskList: [...prevState.taskList, newList],
        taskName: '',
        tagName: tagsList[0].optionId,
      }))
    }
  }

  onFilterCategory = id => {
    const {activeBtnId} = this.state

    if (activeBtnId !== id) {
      this.setState({activeBtnId: id})
    } else {
      this.setState({activeBtnId: ''})
    }
  }

  filterTaskList = () => {
    const {taskList, activeBtnId} = this.state

    return taskList.filter(eachItem => eachItem.tagName === activeBtnId)
  }

  render() {
    const {taskList, taskName, tagName, activeBtnId} = this.state
    let filteredTaskList = taskList
    if (activeBtnId !== '') {
      filteredTaskList = this.filterTaskList()
    }

    return (
      <BgCont>
        <LeftCont as="form" onSubmit={this.onSubmitForm}>
          <Heading>Create a task!</Heading>
          <Label htmlFor="taskname">Task</Label>
          <Input
            id="taskname"
            value={taskName}
            type="text"
            placeholder="Enter the task here"
            onChange={this.onChangeTaskInput}
          />
          <Label htmlFor="tagname">Tags</Label>
          <Input
            id="tagname"
            value={tagName}
            as="select"
            onChange={this.onChangeTagInput}
          >
            {tagsList.map(eachItem => (
              <option value={eachItem.optionId} key={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </Input>
          <Button type="submit">Add Task</Button>
        </LeftCont>
        <RightCont>
          <Heading right>Tags</Heading>
          <UlCont>
            {tagsList.map(eachItem => (
              <TagBtnItem
                tagDetails={eachItem}
                key={eachItem.optionId}
                activeBtnId={activeBtnId}
                onFilterCategory={this.onFilterCategory}
              />
            ))}
          </UlCont>
          <Heading right>Tasks</Heading>
          <TaskUlCont>
            {filteredTaskList.length !== 0 &&
              filteredTaskList.map(eachItem => (
                <TaskItem taskDetails={eachItem} key={eachItem.id} />
              ))}
            {filteredTaskList.length === 0 && (
              <NoTaskHeading as="p" right>
                No Tasks Added Yet
              </NoTaskHeading>
            )}
          </TaskUlCont>
        </RightCont>
      </BgCont>
    )
  }
}

export default MyTasks
