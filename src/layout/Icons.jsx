import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleChevronLeft} from '@fortawesome/free-solid-svg-icons'
import '../styles/Icon.css'

const icons = () => {
  return (
    <div>
      <div className="icon-container">
            <i><FontAwesomeIcon icon={faRotateRight}/></i>
            <i><FontAwesomeIcon icon={faCircleChevronLeft}/></i>
            <i><FontAwesomeIcon icon={faCircleChevronRight}/></i>
            <i><FontAwesomeIcon icon={faExpand}/></i>
      </div>
    </div>
  )
}

export default icons