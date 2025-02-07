import React, { useState } from 'react'


import education from "../../assets/education.png";
const Education = () => {


    return (
        <>
            <div style={{marginTop:"100px",minHeight:"500px"}}>

          <div className='about'>
            <div className="about-left">
                  <img src={education} alt="" className='departments-img' style={{width:"400px"}} />
              {/* <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} /> */}
      </div>
                 <div className="about-right">
        <h2>Department Of Education</h2>
        <h3>Chairman's Message</h3><br />
       <p>I am pleased to share with you that our prestigious institute Amrit Group of Institution is committed to provide value based education which would assist in bringing out qualitative improvement in teacher education and will enhance the knowledge and skill of the student. We draw attention on all round development of the students for which, the department organize various activities besides teaching i.e quiz, debate, essay, meditation, sports, culture and social activities. It has experienced and qualified teachers who try to do the best for making their teaching effective and bringing desired outcomes.</p>
<br /><p>I felicitate to the new corners and aspirants and praise them for selecting the right institute which is very essential in the present time and advise them to implement the experience what they obtained during in their life.</p>
<br /> <h4>Vikas Tyagi                    <br />                              Chairman-Amrit Group of Institution</h4>
      </div>

    </div>
    
   <div className="about">
     <div>
          <p>Emphasis is done on practical along with theoretical knowledge and above attention on the individuality of the trainees. besides these, It is focused on the extracurricular activities i.e sports, scout guide, plantation, excursion, mediation, cultural activities, national day celebration, Blood Donation Camp and Campaign etc, The Department of Education was set up in our institute to impart teachers education and inculcate ethical and moral values in the trainees. It started in 2005 and currently we have 2 basic units in B.Ed. and 01 basic units in M.Ed.. The Department has most experienced and highly qualified faculty, who try their best for bringing desired changes in the prospective teachers. The teachers apply various methods and techniques for making teaching as interesting and effective. This is reflected by the result of previous session in which, the result of B.Ed. and M.Ed. was 94.18% and 100% respectively.

which helps in the all round development of the prospective teachers. For smooth functioning, the department has constituted various sub committee led by in charges of the respective committee i.e. Discipline Committee, Seminar Committee, Sports Committee, Excursion Committee, Student Grievance Cell, Examination Committee etc.</p>
       
       <h3>Course Name: B.Ed. <br />
Duration : 2 Years <br />
Seats : 100</h3><br />
 <h4>Approved by NCTE New Delhi & Ministry of HRD Govt. off India, Govt. of Uttarakhand and Affiliates to H.N.B Garhwal University, Srinagar.</h4>
 <br />
 <p>Eligibility: 50% of the total seat against state quota are filled in form amongst the candidates who quality in the written/entrance examination conducted by HNB Garhwal University on merit basis and remaining 50% are to be filled in by the institute against management quota from amongst the successful candidates in the aforesaid examination as also those apply directly to the Institute for admission against management quota 07 seats are filled under NRI quota.</p>
 </div>
   </div>
            </div>
        </>
    )
}

export default Education
