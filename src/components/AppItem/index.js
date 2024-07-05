// Write your code here

import './index.css'

const AppItem = props => {
  const {eachAppListDetails} = props
  const {appId, appName, imageUrl, category} = eachAppListDetails
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
