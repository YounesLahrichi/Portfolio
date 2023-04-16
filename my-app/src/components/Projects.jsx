
import * as React from 'react';
import dotaLogo from "./dota2.jpg"
import FlipCard from "./FlipCard";

function Projects() {
  return (
    <div className="CardMake">
        
          <div className="ProjectsHeading">
            <h1 className="pageHeading">Projects</h1>
          </div>
          <div className="WrapperV">
            <FlipCard
              backgroundFront={dotaLogo}
              frontTitle="T-Mobile"
              backTitle="Tmobile"
              frontRole="Software Development Engineer Intern"
              frontTimeline="May 2023 - August 2023"
              role="Software Development Engineer Intern"
              timeline="May 2023 - August 2023"
              description="HEYHEYHEYEH EYHEYflkds;fksd;lfksdfs fsl;dkf sdlfksdl;f ksdl;fk sdl;fksdl;fk sdlf;ksdf;lsdkf lsdkf;lsdfk ;sldkfsl; fks;dlkf sd;lfk sd;lfksd;lfk sd;fks;fks;ld fksd;fk sdl;f ks;df ksd;lfk s;ldkfs;d k;s ;sk d;lfksd;flk sd;fksd;lfk sd;flksd;lfksd;lfk sd;fks;dlfk s;dlfksd;flk sflk s;fdlksd;flk s;flk sd;lfksd;lfksdf;l skdf;ls kdf;lsdkf ;sdlk fs;dfk  sldf;ksd ;flksdf ;lsdkfs;ldfk sd;lfksdf;lk sdfl;ksd f;lsdkf sdklsdjflsadkfj sladkfjsdaklfj sadl;kfjasldfjsadflkjsad flkjsaf laskdjfaskldfj sadlkfjasdklfjasdlkfjsd fklsajf lksadfjlsa d askjdflksadjfklasdjflsdakjflsdkjf sdf sdjf sdjfjsdjfsdjfsd jfsjfjj j j j j j j j jkvlskfjglskjg sdlfgjsdlfkgj dsflkgj dslkgfjsdflkgj dslkfgjdsklfgj dsflkgj sdklfgjsd lfgjdslf gdsfljkgskdfl;gjsdf;klgjsdkl;fgjsd;lfkgjsdkflgj; sldkgjkldfsgj lsdkfgj sldfkgj sd; gkjslkdjflskfj gldsjg lsdgjsdf gklsdj gslkfdjsdflkjgsdfk jsdlf jsdl jskl jskdl jdslkfj gsldfk;jg ;dsflgj sfdlkg;j sdflkjgdsflkg jsdfklgj sd;lfkgj sdlfkjg sdfgjksdfgjdsflkgj skdl;gj sdflg k;jsdfl;gk jsfdlgk;jsfd;lgjsdfglksj fglksjf gsldfkgj slkgj skldfgj slfdkg ;js;ldfgjs;dfgljsfdl gjsfdlk gjsglk jfdlkjg;sfdkjgs;dfklgj slkjgsd lkjsdlkfgj sl;l;fk sd;lfksd;lfksdf;lksdlkfsd;lfk sdfl;k EHEYE"
            />
            <FlipCard/>
            <FlipCard/>
          </div>
          
      </div>
  );
}

export default Projects;
