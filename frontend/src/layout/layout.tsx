import Header from "@/components/Header"
import Footer from "@/components/Footer"
import MobileNav from "@/components/MobileNav"
import Hero from "@/components/Hero"

type Props={
    children:React.ReactNode
}

const Layout =({children}:Props)=>{
return(
    <div className="flex flex-col min-h-screen">
        <Header />
        <Hero/>
        <div className="conatiner mx-auto flex-1 py-10">
            {children}
        </div>
        <div className="md:hidden">
            <MobileNav />
        </div>
        <Footer />
    </div>
)
}
export default Layout