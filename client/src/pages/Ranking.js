import React from 'react'
import { useParams } from 'react-router-dom';

function Ranking() {
    let {id} = useParams();

  return (
    <div>
      Ranking {id}
    </div>
  )
}

export default Ranking;