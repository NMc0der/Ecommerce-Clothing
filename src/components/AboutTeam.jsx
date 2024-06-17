import AboutMember from "./AboutMember";
import ceo from "../assets/AboutUs/tamara-bellis-pNKvgaBfJio-unsplash.jpg";
import coFounder from "../assets/AboutUs/brooke-cagle-W7pk4FfrSY0-unsplash.jpg";
import cdo from "../assets/AboutUs/brooke-cagle-k9XZPpPHDho-unsplash.jpg";
import efd from "../assets/AboutUs/gabriel-silverio-u3WmDyKGsrY-unsplash.jpg";
import pfs from "../assets/AboutUs/ulla-shinami-TsZvEfxM_is-unsplash.jpg";
import coo from "../assets/AboutUs/jurica-koletic-7YVZYZeITc8-unsplash.jpg";
import vpf from "../assets/AboutUs/christina-wocintechchat-com-SJvDxw0azqw-unsplash.jpg";
import vps from "../assets/AboutUs/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";
import cfo from "../assets/AboutUs/juan-encalada-WC7KIHo13Fc-unsplash.jpg";
import vpc from "../assets/AboutUs/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg";
import vpm from "../assets/AboutUs/courtney-cook-TSZo17r3m0s-unsplash.jpg";
import dhr from "../assets/AboutUs/slav-romanov-BrEAp01_m5w-unsplash.jpg";
const AboutTeam = () => {
  return (
    <div className="bg-[#EEEEEE] py-[4rem]">
      <h3 className="text-center font-semibold text-xl tablet:text-3xl p-4">
        OUR LEADERSHIP TEAM
      </h3>
      <div className="team grid grid-cols-2 font-[Garamond]  justify-items-center container mx-auto w-fit gap-6 tablet:gap-6  p-2">
        <AboutMember
          pic={ceo}
          name={"Olivia Taylor"}
          title={"Chief Executive Office"}
          social={"@oliviataylor_shine"}
        />
        <AboutMember
          pic={coFounder}
          name={"Amanda Wilson"}
          title={"Chief Culture Office & Co-Founder"}
        />
        <AboutMember
          pic={cdo}
          name={"Sophia Jones"}
          title={"Chief Design Officer"}
          social={"@sophia.jones"}
        />
        <AboutMember
          pic={efd}
          name={"Ashley Martin"}
          title={"Executive Fashion Director"}
        />
        <AboutMember
          pic={pfs}
          name={"Elizabeth Baker"}
          title={"President of Field Strategy"}
        />
        <AboutMember
          pic={coo}
          name={"Brandon Thomas"}
          title={"Chief Operating Officer"}
        />
        <AboutMember
          pic={vpf}
          name={"Christina Smith"}
          title={"Vice President of Finance"}
        />
        <AboutMember
          pic={vps}
          name={"Grace Carter"}
          title={"Vice President of Sourcing"}
        />
        <AboutMember
          pic={cfo}
          name={"Connor James"}
          title={"Chief Information Officer"}
        />
        <AboutMember
          pic={vpc}
          name={"Jared Collins"}
          title={"Vice President of Events"}
        />
        <AboutMember
          pic={vpm}
          name={"Lily Price"}
          title={"Vice President of Marketing"}
        />
        <AboutMember
          pic={dhr}
          name={"Hannah Sanders"}
          title={"Director of Human Resources"}
        />
      </div>
    </div>
  );
};

export default AboutTeam;
