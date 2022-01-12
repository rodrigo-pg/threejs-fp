import { FirstHeader } from "./styles"

const H1:React.FC = ({children}) => {

    return(
        <FirstHeader>
            {children}
        </FirstHeader>
    )
    
}

export { H1 };