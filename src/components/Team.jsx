import {TeamMembers} from "../constants"
import Card from "./card"

const Team = () => {
  return (
    <div className='Team_section'>
      <div className='Section_Title'>
        <h1 className='ST_text'>Team</h1>
      </div>

      <div className='Card_container'>
        {TeamMembers.map((member) => (
          <Card 
            name={member.name} 
            post={member.post} 
            desc={member.disc}
          />
        ))}
      </div>
    </div>
  )
}

export default Team
