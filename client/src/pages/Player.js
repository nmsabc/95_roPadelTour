import React from 'react'
import { useParams } from 'react-router-dom';

function Player() {
    let {id} = useParams()
  return (
    <div>
      Player {id}
    </div>
  )
}

export default Player;