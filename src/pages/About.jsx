import React from 'react'

export const About = () => {
  return (
    <div className='px-8 leading-7'>
        <h1 className='text-3xl font-semibold text-center pt-4 pb-8'>ABOUT ME</h1>
        <div className="about-sections grid">
          {/* LEFT COLUMN  */}
            <div className="left-col">
                <h3 className='text-2xl mb-2 font-medium'>Hello, I'm <span className='text-white'>Chibuike Ukandu</span></h3>
                <p>I'm an enthusiastic Front-End developer who is spellbound by technology and the advancements in technology; an ardent believer in continuous learning of both technical and soft skills to improve my ability to deliver great software solutions with the best user experience.</p>

                <div id="skills" className="skill my-4">
                    <h5 className='text-2xl font-medium mb-2'>Core Technologies</h5>
                    <ul className='list-disc pl-9'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SCSS/SASS</li>
                        <li>BOOTSTRAP</li>
                        <li>TAILWINDCSS</li>
                        <li>JAVASCRIPT</li>
                        <li>GITHUB</li>
                        <li>REACT JS</li>
                    </ul>
                </div>
            </div> 
          {/* RIGHT COLUMN */}
            <div className="">
                <div id="certificates" className="my-4">
                    <h5 className='text-2xl font-medium mb-2'>Certifications</h5>
                    <ul className='list-disc pl-9'>
                        <li>Side Hustle Internship <a href="./styles/Images/Side Hustle Internship Certificate.png">Click to view</a> </li>
                        <li>Jobberman Soft Skills Training <a href="./styles/Images/Jobberman_Soft_Skill_Certificate_4387603.pdf">Click to view</a> </li>
                    </ul>
                </div>
              
                <div id="education" class="skill">
                    <h5 className='text-2xl font-medium mb-2'>Education</h5>
                    {/* HIGH SCHOOL */}
                    <div className="pl-9">
                        <ul className='list-disc '>
                        <li className='font-semibold text-lg'>Living Word Academy Secondary</li>
                        </ul>
                        <p className='font-normal text-base'>West African Senior School Certificate Examination (WASSCE)</p>
                        <p className="font-medium">2020</p>
                    </div>
                    
                </div>
                <div id="projects" class="skill">
                    <h5>Projects</h5>
                    <p class="p">Links to my works can be found on my<a href="Portfolio.html">Portfolio</a> </p>
                </div>
            </div>
        </div>
    </div>
  )
}
