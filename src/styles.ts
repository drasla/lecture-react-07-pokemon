import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #F5F7FA;
    font-family: "Inter", sans-serif;
  }
`;

export const PageContainer = styled.div`
    padding: 24px;
`;

export const PageTitle = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #333;
`;
