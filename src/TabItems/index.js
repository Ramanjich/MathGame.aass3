import './index.css'

const TabItems = props => {
  const {eachTab, isActive, onTabClick} = props
  const {tabId, displayText} = eachTab
  const addingStyle = isActive ? 'active-btn' : ''
  const onTabBtnclick = () => {
    onTabClick(tabId)
  }
  return (
    <li className="items">
      <button
        type="button"
        className={`tab-btn ${addingStyle}`}
        onClick={onTabBtnclick}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
