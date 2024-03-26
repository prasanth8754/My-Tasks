import {TagBtn} from './styledComponents'

const TagBtnItem = props => {
  const {tagDetails, activeBtnId, onFilterCategory} = props
  const {optionId, displayText} = tagDetails

  const isActive = activeBtnId === optionId ? 'active' : ''

  const filterCategory = () => {
    onFilterCategory(optionId)
  }

  return (
    <li>
      <TagBtn type="button" isActive={isActive} onClick={filterCategory}>
        {displayText}
      </TagBtn>
    </li>
  )
}

export default TagBtnItem
