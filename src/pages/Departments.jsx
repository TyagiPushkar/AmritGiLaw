import React, { useState } from 'react'


import department from "../assets/department.png";
const Departments = () => {


    return (
        <>
            <div style={{marginTop:"100px",minHeight:"500px"}}>

 <div className='about'>
      <div className="about-left">
        <img src={department} alt="" className='departments-img' style={{width:"400px"}} />
        {/* <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} /> */}
      </div>
      <div className="about-right">
        <h2>Departments</h2>
        <h3>Mission Statement</h3><br />
        <h4>The mission of Amrit Group of College is to educate, inspire and prepare each student for a life of service and success.
</h4><br /><p>To fulfill that mission, Amrit Group of College provides a high quality undergraduate and graduate educational environment shaped by the traditions of the liberal arts, career preparation and the distinctive practices of the Religious Society of Friends (Quakers). By offering academic programs, practical experience and co-curricular activities in a variety of settings to students from diverse backgrounds, the College leads students to gain an awareness of the world, to acquire knowledge of career and vocation and to seek truth and social justice.</p>
<br /><p>In keeping with the rich heritage of the liberal arts, the College seeks to educate the whole person – intellectual, emotional, physical and spiritual – in ways that foster critical thinking, reflection, the free exchange of ideas, open inquiry, respect for all persons and a desire for lifelong learning. The liberal arts are integrated with career preparation to help students develop the knowledge and skills to succeed in a career or further education.</p>
<br /><p>As an academic community, Amrit Group of College is rooted in historic Quaker values, also known as testimonies, which include integrity, service, stewardship, equality, peace and social justice and respect for all persons. These historic testimonies motivate those who learn and work at the College to make positive contributions to their professions and their communities.</p>
      </div>

    </div>
   <div className="about">
     <div>
        <h3>Vision Statement</h3><br />
 <h4>Amrit Group of College intends to make significant progress in the next decade toward being a model college that melds the liberal arts and career preparation in order to graduate liberally educated professionals. To move towards this vision, Wilmington will:</h4>
 <br />
 <p>integrate career preparation with the traditions and foundational skills of the liberal arts;
</p>  <p>challenge students to live the historic Quaker testimonies of integrity, service, peace and social justice, stewardship and respect for all persons and to practice them in their communities and workplaces;
</p> <p>challenge students to live the historic Quaker testimonies of integrity, service, peace and social justice, stewardship and respect for all persons and to practice them in their communities and workplaces;
</p><p>promote every student’s participation in hands-on experiences including internships, community service and international study programs;
</p><p>create a caring campus community that embraces civility, respect and trust; and
</p> <p>demonstrate a commitment to this vision by placing the needs of students at the center of decision-making.
</p>
 </div>
   </div>
            </div>
        </>
    )
}

export default Departments
