import { SafeUser } from "@/app/types";
import Container from "../common/Container"
import Logo from "./Logo"
import Search from "./Search"
import UserMenu from "./UserMenu"
import Categories from "./categories/Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return (
    <div className=' sticky w-full bg-white shadow-sm z-10'>
        <div className=' py-4 border-b-[1px]'>
        <Container>
        <div 
          className="
            flex 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser}/>
        </div>
        </Container>
        </div>
        <Categories />
    </div>
  )
}

export default Navbar