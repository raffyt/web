import React from "react";
import styled from 'styled-components';

function Layout ({ children }) {
    return <Wrapper>{children}</Wrapper>
}


const Wrapper = styled.div`
   
display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 50px 1fr 50px;
    grid-template-areas: 
    "header header"
    "aside content"
    "footer footer";
    height: 100vh;
    
    header{
        grid-area: header;
    }
    
    footer{
        grid-area: footer;
    }
    
    .aside{
        grid-area: aside;
    }
    .content{
        grid-area: content;
    }

    `


export default Layout;