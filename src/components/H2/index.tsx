import { SecondHeader } from "./styles"

const H2:React.FC = ({children}) => {
    return(
        <SecondHeader>
            {children}
        </SecondHeader>
    )
}

export { H2 }