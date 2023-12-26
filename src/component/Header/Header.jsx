import Banner from "./Banner";
import Nav from "./Nav";
import Smallnav from "./Smallnav";


const Header = () => {
            return (
              <>
                <Smallnav></Smallnav>
                <Nav></Nav>
                <Banner></Banner>
              </>
            );
};

export default Header;