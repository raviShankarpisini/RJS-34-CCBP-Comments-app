// Write your code here
import './index.css'

const TabItem = props => {
  const {eachTabDetails, onClickTab, isTabActive} = props
  const {tabId, displayText} = eachTabDetails
  const onClickCategory = () => {
    onClickTab(tabId)
  }
  const stylingActiveTab = isTabActive ? 'active-tab' : ''
  return (
    <li>
      <button className="button" type="button" onClick={onClickCategory}>
        <p className={`tab-heading ${stylingActiveTab}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
