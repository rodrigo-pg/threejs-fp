import { Container } from "./styles"

const PageContainer:React.FC = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export { PageContainer }