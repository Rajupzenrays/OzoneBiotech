import React from "react";
import "./AboutUs.scss";
import Title from "./Title";
const AboutUs = () => {
  return (
    <>
      <Title title={"About Us"} />
      <div className="container">
        <div className="description_text">
          <p className="italic_desc mb-4">“OZONE BIOTECH”</p>

          <p className="mb-5">
            World is observing constant depletion of soil quality, pollution of
            water & environment leading to health risks, harmful chemicals
            entering in our life system and also endangering beneficial species
            and all this due to continuous use of chemical pesticides in farms
            and fields. On the contrary, bio pesticides are capable of
            overcoming all these issues. But due to unawareness of such
            advantages of using bio pesticides and myths associated with their
            use, the potential of natural compounds is still untapped.
          </p>
          <p>
            Neem is proven to be one of the most potent bio insecticides due to
            presence of active ingredient Azadirachtin, which shows broad
            spectrum activity and affects over 600 species of insects.
          </p>
          <p>
            Azadirachtin shows following benefits over conventional use of
            chemical pesticides
          </p>

          <ol>
            <li>
              It acts as Antifeedent, Oviposition Deterrent and Insect Growth
              Regulator.
            </li>
            <li>It is 100% bio-degradable & doesn’t enter food chain.</li>
            <li>Insects are incapable of developing resistance to it.</li>
          </ol>
        </div>

        <div className="list_text">
          <h5 className="mt-2">COMPANY PROFILE</h5>
          <p>
            Identifying these potential benefits of Azadirachtin of neem, Ozone
            Biotech (An ISO 9001:2015 Certified Company) was founded in 2001
            with an aim to provide neem based products especially bio pesticides
            to the world to let the world tap the true potential of natural
            products and abstain themselves from letting hazardous chemical to
            enter their life cycle.
          </p>
          <p>
            Ozone Biotech setup their plant at Faridabad with the Technical
            support of eminent scientists of India.
          </p>
          <p>
            Since its inception Ozone Biotech is growing at a continous pace
            every year and is catering requirements of AGRICULTURE,
            Pharmaceutical, Ayurvedic, Cosmetic, and Toiletries industries,
            where the demand for organic/herbal products is scaling up.
          </p>

          <h6 className="mt-4">VISION</h6>
          <p>
            To promote organic farming globally by using rich heritage of Neem.
          </p>

          <h6 className="mt-4">MISSION</h6>
          <p>
            To provide natural neem based insecticides to farmers worldwide that
            contains Azadirachtin as an active ingredient by making quality
            products that are allowed for organic use, economical and non-toxic.
          </p>


          <h6 className="mt-4">VALUES</h6>
         <ul>
          <li>Best Quality, No Matter What.</li>
          <li>Empathy towards Nature.</li>
          <li>Customer Satisfaction.</li>
          <li>Excel through practice.</li>
          <li>Integrity & Transparency.</li>

         </ul>

         <h6 className="mt-4">CERTIFICATION</h6>
         <p>Our products are approved by ECOCERT as input for use in organic agriculture according to :</p>
         <ul>
          <li>NPOP standard attested by Ecocert India Pvt Ltd.</li>
          <li>USDA NOP as inspected by Ecocert SA F-32600</li>
          <li>EC n° 2018/848 & 2021/1165 Regulations as inspected by Ecocert SA F-32600.</li>

         </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
