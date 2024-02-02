import React from 'react';
import styled from "styled-components";
import imageMain from "../../assets/images/photo3.jpg"

export const StyledBackgroundPhoto = styled.div`
  min-height: 100vh;
  background-image: url(${imageMain});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  
`
