import React from 'react'

const ActivityCard = ({activityName,activityImage}) => {
  return (
    <div className="act__card 1">
        <div className="act__card_image"> <img src={activityImage} alt="" /></div>
        <div className="act__card_title title-white">
          <p>{activityName}</p>
        </div>
      </div>
  )
}

export default ActivityCard