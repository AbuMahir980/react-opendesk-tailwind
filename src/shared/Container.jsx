import Footer from "../component/Footer"
import Nav from "../component/Nav"

const Container = ({children}) => {
    return(
        <>
            <Nav />
            {children}
            <Footer />
        </>
    )
}

export default Container