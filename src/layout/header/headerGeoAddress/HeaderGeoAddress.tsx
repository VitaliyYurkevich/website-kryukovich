import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";


type HeaderGeoAddressPropsType = {
    address: string
}

export const HeaderGeoAddress = (props: HeaderGeoAddressPropsType) => {

    return (
        <StyledHeaderGeoAddress>
            <FlexWrapper>
                <Icon iconId={'geo'} viewBox={'0 0 32 32'} height={'32'} width={'32'}/>
                <StyledAddress>
                    {props.address}
                </StyledAddress>
            </FlexWrapper>
        </StyledHeaderGeoAddress>
    );
};

const StyledHeaderGeoAddress = styled.div`

`

const StyledAddress = styled.div`
  //color: grey;
  padding: 10px;
  color: white;
 // background-color: blue;
`