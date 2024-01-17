import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
// import { faVolumeHigh} from '@fortawesome/free-solid-svg-icons'
import '../styles/CardFlip.css'

const CardFlip = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? 'flipped' : ''}`} onClick={handleCardFlip}>
      <div className="card">
        <div className="card-face front">
          <div className='icons'>
            <i><FontAwesomeIcon icon={faLightbulb} /></i>
            <i><FontAwesomeIcon icon={faVolumeHigh} /></i>
          </div>
          
          <p>Front</p>
        </div>
        <div className="card-face back">
          <div className='icons'>
            <i><FontAwesomeIcon icon={faLightbulb} /></i>
            <i><FontAwesomeIcon icon={faVolumeHigh} /></i>
          </div>
          
          <p>Back</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
