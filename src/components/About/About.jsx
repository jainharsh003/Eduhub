import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon'  onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque tenetur molestiae excepturi sed itaque incidunt at fugit. Illo, ad! Velit excepturi, voluptate mollitia quod tempore laborum. Quidem fuga error animi!
                Repudiandae fuga corrupti ea veritatis quibusdam voluptatem. Provident exercitationem nesciunt illo repellendus quisquam fugit magni nemo perspiciatis tempore eius numquam blanditiis earum quis, porro dolor illum aperiam iure dicta? Voluptatibus.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur, ea veniam dicta vel quaerat aliquam repellendus praesentium eaque ipsum quam, aspernatur veritatis corporis non porro? Quasi ratione illum reiciendis.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ut tempore eius maxime sunt similique voluptates nisi quidem, corporis voluptate facilis nobis iste libero consequuntur doloremque, incidunt culpa nemo fugiat?
            </p>

        </div>
    </div>
  )
}

export default About