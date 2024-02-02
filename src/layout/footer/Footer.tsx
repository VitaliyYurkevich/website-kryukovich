import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import insta from "../../assets/images/insta.png"
import whatsApp from "../../assets/images/whatsApp.png"
import telega from "../../assets/images/telega.png"

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
            <SocialList>
                <SocialItem>
                    <SocialIconLink>
                        <img src={insta} alt={''}/>
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <img src={whatsApp} alt={''}/>
                    </SocialIconLink>
                </SocialItem>
                <SocialItem>
                    <SocialIconLink>
                        <img src={telega} alt={''}/>
                    </SocialIconLink>
                </SocialItem>
            </SocialList>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
 // background-color: darkgreen;
  padding: 40px 0;

`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`

const SocialIconLink = styled.a`

  //background: rgba(255, 255, 255, 0.1);
  /*width: 35px;
  height: 35px;*/

  display: flex;
  justify-content: center;
  align-items: center;

`

const SocialItem = styled.li`

`