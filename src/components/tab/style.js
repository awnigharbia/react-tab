import styled from "styled-components";

const TabsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  max-height: 300px;
  background: #d3d3d38f;
  border-radius: ${props => (props.radius ? props.radius : 0)};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
`;

const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  cursor: pointer;
  user-select: none;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 -1px 1px rgba(0, 0, 0, 0.05);
`;

const head = styled.div`
  padding: 10px 20px;
  color: ${props =>
    props.isActive ? props.activeColor || "blue" : props.color || "black"};
  border-bottom: ${props =>
    props.isActive
      ? `2px solid ${props.activeColor || "blue"}`
      : "2px solid transparent"};
  transition: ".2s ease";

  ${props =>
    props.disabled &&
    `
      opacity: 0.65; 
      cursor:not-allowed;
    `};
`;

const content = styled.div`
  padding: 10px 20px;
`;

HeadWrapper.head = head;
HeadWrapper.content = content;

export { TabsWrapper, HeadWrapper };
