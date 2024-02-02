import React from 'react';
import styled from "styled-components";
import {HeaderContacts} from "./headerContacts/HeaderContacts";
import {MyContainer} from "../../components/MyContainer";
import {FlexWrapper} from "../../components/FlexWrapper";
import photo from "../../assets/images/HeaderPhotoIcon.png"
import {HeaderIcons} from "./headerIcons/HeaderIcons";

export const Header = () => {

    return (
        <StyledHeader>
            <MyContainer>
                <FlexWrapper justify={'space-between'} >
                    <HeaderIcons/>

                    <HeaderContacts />
                </FlexWrapper>
            </MyContainer>
        </StyledHeader>
    );
};



const StyledHeader = styled.header`
  //max-height: 100px;
 // background-color: ;
  padding: 20px 0;
  //opacity: 1%;

  
`



