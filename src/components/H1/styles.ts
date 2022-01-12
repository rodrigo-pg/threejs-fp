import styled from "styled-components"

export const FirstHeader = styled.h1`
    position: absolute;
    opacity: 0;
    top: 32%;
    right: 0;
    left: 0;
    bottom: 0;
    font-size: 8rem;
    z-index: 2;
    color: rgb(208, 255, 0);
    animation: fadeIn 2s ease-in-out forwards;
    animation-delay: 2.6s;

    @keyframes fadeIn {
    from { 
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}   
`