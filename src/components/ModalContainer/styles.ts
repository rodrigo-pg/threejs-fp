import styled from "styled-components";

export const Container:any = styled.div`
    background: black;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.5;
    display: ${(props:any) => props.display};
`