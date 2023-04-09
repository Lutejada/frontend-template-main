import  NavBar  from "@/components/layouts/NavBar";
import Aside2 from '@/components/layouts/Aside2';

 function Layout({ children }) {
    return (
      <>
        <NavBar />
        <Aside2/>
        <main>{children}</main>
        
      </>
    )
  }

  export default Layout;