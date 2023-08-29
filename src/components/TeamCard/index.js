/* fix-8: import Link Component  */
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageURL} = teamDetails

  return (
    /* fix-9: when clicked on TeamCard, page should be navigated to the URL '/team-matches/${id}'
       fix-10: 'exact' and 'path' props are used in Route component to match routes 
       fix-11: 'to' is the props used to give the URL for navigation to Link component */
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
