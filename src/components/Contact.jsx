import { LinkedIn } from "../assets"

const Contact = () => {
  return (
    <div className='Contact_section'>
      <h1 className='Contact_title'>Let's have a talk!</h1>

      <p className='Contact_desc'>
        If you need any services for personal or buisness needs, please contact us! 
        <br  className='lb'/>
        Our team will collaborate with you to bring your most visionary ideas to life.
      </p>
      <div className="Contact_partition">
        <div className="Astra_about">
          <div className="Astra_intro">
            <h2 className="Ai_text">ASTRA PLATFORMS</h2>
            <p className="Ai_desc">Follow us on social media to be the 1st to know what something new from Team Astra</p>
            <img 
              src= {LinkedIn} 
              alt="LinkedIn"
              className="LinkedIn_picture" 
            />
          </div>
          <div className="Astra_address">
            <h3 className="Aa_text">Company address:</h3>
            <p className="Aa_desc">
              ASTRA LEARNING PLATFORM,
              <br className="lb"/>
              SEHORE, MADHYA PRADESH
            </p>
          </div>
        </div>
        <div>
          <h1 className="Contact_us">Contact Us</h1>
          <form action="#" className="input_form">
            <input 
              type="text" 
              placeholder="Your Name (required)"
              className="input_text" 
              required
            />
            <input 
              type="text" 
              placeholder="Your Email (required)" 
              className="input_text"
              required
            />
            <input 
              type="text" 
              className="es input_text"
              required
            />  
            <div>
              <button type="submit" className="sub_btn">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
