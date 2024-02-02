import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/HeaderPhotoIcon.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import photoIcon from "../../../assets/images/phone.png"

export const HeaderIcons = () => {
    return (
        <StyledHeaderIcons>
            <FlexWrapper align={'center'} justify={'center'}>
                <Photo src={photo} alt=''/>
                <StyledTelephoneNumber href="tel:+7(950)-041-80-63">
                        <StyledDiv>
                            <StyledPhoneIcon src={photoIcon} alt='' />
                        </StyledDiv>
                </StyledTelephoneNumber>
            </FlexWrapper>

        </StyledHeaderIcons>
    );
};


const StyledHeaderIcons = styled.div`
display: flex;
  //background-color: blue;
  
`

const Photo = styled.img`
  width: 80px;
  height: 110px;
  object-fit: cover;
  //background-color: darkblue;
`


const StyledTelephoneNumber = styled.a`
  color: white;
  //padding-top: 20px;
 // background-color: blueviolet;
  
`

const StyledPhoneIcon = styled.img`
  width: 50px;
  height: 50px;
`


const StyledDiv = styled.div`
padding-left: 15px;
`