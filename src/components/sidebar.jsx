import styled from "styled-components";

function Sidebar(){
  return <Wrapper><h3>SIDEBAR</h3></Wrapper>
}

const Wrapper = styled.aside`
  background-color: #58483B;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dfc1a9;
  
`
export default Sidebar;