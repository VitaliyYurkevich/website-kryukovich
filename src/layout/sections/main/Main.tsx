import React from 'react';
import styled from "styled-components";
import {MyContainer} from "../../../components/MyContainer";
import imageMain from "../../../assets/images/photo3.jpg"
import {StyledBackgroundPhoto} from "../../backgroundPhoto/BackgroundPhoto";
import {Specification} from "./specification/Specification";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <MyContainer>
                <FlexWrapper align={'flex-start'} justify={'space-between'}>
                    <div>
                        <Name>Крюкович Дмитрий</Name>
                        <MainTitle>Фитнес Тренер</MainTitle>
                        <SmallText>Образование: ЛГУ им.А.С.Пушкина,Школа Фитнеса и Бодибилдинга Павла Ершова
                            квалификация: Персональный тренер тренажерного зала. Опыт собственных тренировок более 15
                            лет.</SmallText>
                    </div>
                    <StyledSpecification>
                        <Specification/>
                    </StyledSpecification>
                </FlexWrapper>
            </MyContainer>
        </StyledMain>
    );
};


const StyledMain = styled.section`
  display: flex;
  min-height: 90vh;

`
const MainTitle = styled.h1`
  padding-left: 130px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -1px;
  color: white;
  //background-color: green;
`


const SmallText = styled.h2`
  padding-top: 20px;
  padding-left: 45px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -1px;
 // background-color: green;
  width: 500px;
  
`

const Name = styled.h2`
  padding-left: 60px;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: -1px;
  margin: 20px 0;
  // background-color: green;
`

const StyledSpecification = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -1px;

`