import React from "react";
import styled from "styled-components";

const StyledReactComponent = styled.div`
  height: 100px;
  margin: 20px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: hotpink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReactComponent = () => (
  <StyledReactComponent>
    <span>I AM A REACT COMPONENT</span>
  </StyledReactComponent>
);

export default ReactComponent;
