import { LinkedIn, ProfilePic } from "../assets"

const Card = ({name, post, desc}) => {
  return (
    <div className="Card">
      <img 
        src={ProfilePic} 
        alt="Profile Image" 
        className="Profile_picture"
      />
      <h3 className="Card_Name"> {name} </h3>
      <h3 className="Card_Post"> {post} </h3>
      <p className="Card_Desc"> {desc} </p>
      <img 
        src={LinkedIn} 
        alt="LinkedIn" 
        className="LinkedIn_picture"
      />
    </div>
  )
}

export default Card
