import Header from "../inc/Header"
import Footer from "../inc/Footer"

const DefaultLayout = ({children}) => {
    return (
        <>
            <Header />  
            {children}
            <Footer />
        </>
    )
}
export default DefaultLayout