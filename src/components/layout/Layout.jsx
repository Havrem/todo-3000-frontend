import { Outlet, useLocation } from "react-router-dom";
import Background from "./Background";
import MainContent from "./MainContent";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useAuth } from '../../hooks/useAuth';
import Drawer from "./Drawer";
import { DrawerProvider } from "./DrawerContext";

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isPublicPage = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <Background>
      {isPublicPage ? (
        <Outlet />
      ) : (
        <DrawerProvider>
          <MainContainer>
            {user && (
              <>
                <Drawer></Drawer>
                <Sidebar />
                <MainContent>
                    <Outlet />
                </MainContent>
              </>
            )}
          </MainContainer>
        </DrawerProvider>
      )}
    </Background>
  );
};

export default Layout;