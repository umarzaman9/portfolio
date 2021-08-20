import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding >
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Portfolio 
      </SectionTitle>
      <SectionText>
        add some text here
      </SectionText>
      <Button onClick={()=>windows.location='https://google.com' }>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;