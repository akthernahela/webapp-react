import Header from './Header'
import Footer from './Footer'

function AppLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}