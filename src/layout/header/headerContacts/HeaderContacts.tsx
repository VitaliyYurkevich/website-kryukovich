import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {HeaderGeoAddress} from "../headerGeoAddress/HeaderGeoAddress";

export const HeaderContacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper direction={'column'} align={'center'} justify={'space-between'} >
                 <HeaderGeoAddress address={'Г. Пушкин, Конюшенная ул., д.31 фитнес-клуб Телосложение'} />
                 <HeaderGeoAddress address={'Г. Санкт-Петерубург, ТК "Южный полюс, Пражская ул., 48/50'} />
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
  color: white;
  //font-family: 'Poppins', sans-serif;
  padding-block: 20px;
  
`
