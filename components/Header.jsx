import Link from "next/link"
import { Button } from "./ui/button"
import NavDesktop from "./NavDesktop"
import NavMobile from "./NavMobile"

const Header = () => {
    return (
        // bg-blue-700/20    bg-pink-50/10
        <header className="py-4  text-white bg-blue-600/10 ">
            <div className=" container mx-auto flex justify-between items-center">
                {/* My name as Logo */}
                <Link href="/" className="flex items-center" >
                    <h1 className="text-4xl  font-semibold m-0 p-0">
                        Ronald
                        <span className="text-accent">.</span>
                        Ris
                    </h1>
                </Link>

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <NavDesktop />
                    <Link href="/contact">
                        <Button  >Hire me</Button>
                    </Link>

                </div>

                {/* mobile nav */}
                <div className="xl:hidden flex">
                    <NavMobile />
                </div>
            </div>
        </header>
    )
}

export default Header