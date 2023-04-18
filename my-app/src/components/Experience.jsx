import dotaLogo from "./dota2.jpg"
import FlipCard from "./FlipCard";
import tmobileLogo from "./T-Mobile.webp";
import selLogo from "./sel.png"
import scnLogo from "./scn.JPG"

function Experience() {
    return (
      <div className="CardMake">
        
          <div className="ProjectsHeading">
            <h1 className="pageHeading">Experience</h1>
          </div>
          <div className="WrapperV">
            <FlipCard
              backgroundFront={tmobileLogo}
              frontTitle="T-Mobile (Incoming)"
              backTitle="Tmobile (Incoming)"
              frontRole="Software Development Engineer Intern"
              frontTimeline="May 2023 - August 2023"
              role="Software Development Engineer Intern"
              timeline="May 2023 - August 2023"
              description="Technologies: Angular, Python, Typescript"
            />

             <FlipCard
            backgroundFront={scnLogo}
            frontTitle="Seattle Community Network"
            backTitle="Seattle Community Network"
            frontRole="Software Engineer Research Intern"
            frontTimeline="Feb 2023 – May 2023"
            role="Software Engineer Research Intern"
            timeline="Feb 2023 – May 2023"
            description=" Technologies: Android Studio, Kotlin, Android Room DB
            • Maintaining a mobile application that captures and analyses network connectivity data in real-time.
            • Providing real-time problem-solving guidance to team members, to help resolve issues.
            • Designing and implementing an interface that allows users to view network metrics.
            • Conducting extensive testing to ensure the accuracy and reliability of the network connectivity data.
            • Technologies: Android Studio, Kotlin, Android Room DB "
            />

            <FlipCard
            backgroundFront={selLogo}
            frontTitle="Schweitzer Engineering Laboratories"
            backTitle="Schweitzer Engineering Laboratories"
            frontRole="Software Engineer Intern (Capstone)"
            frontTimeline="Sept 2022 – May 2023"
            role="Software Engineer Intern (Capstone)"
            timeline="Sept 2022 – May 2023"
            description="
            • Technologies: MongoDB, Express.Js, Node.js, and React
            • Designing and implementing a full-stack web application using the MERN stack.
            • Utilizing MongoDB to efficiently store and retrieve the application data.
            • Implementing a server-side routing and API endpoint creation with Express.js.
            • Building dynamic and responsive user interface using React, hooks, and context.
            • Implementing user authentication and authorization using JSON web tokens (JWT)."
            />
          </div>
          
      </div>
    );
  }
  
  export default Experience;
  