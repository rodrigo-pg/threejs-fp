import { Container } from "./styles"

interface ModalContainerProps {
    display: "none" | "block";
}

const ModalContainer:React.FC<ModalContainerProps> = ({children, display}) => {
    return(
        <Container
        display={display}
        >
            {children}
        </Container>
    )
}

export { ModalContainer }