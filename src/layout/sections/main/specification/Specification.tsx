import React from 'react';
import styled from "styled-components";

export const Specification = () => {
    return (
        <StyledUl>
            <li>Мужской и женский фитнес (снижение % жира в организме)</li>
            <li>Общая Физическая Подготовка и техника выполнения упражнений.</li>
            <li>Функциональный тренинг(сила, выносливость).</li>
            <li>Бодибилдинг (наращивание сухой мышечной массы).</li>
            <li>Питание (составления диет, рекомендации по использованию спортивного питания).</li>
        </StyledUl>
    );
};


const StyledUl = styled.ul`
  display: flex;
  gap: 20px;
  flex-direction: column;
  
`
