import { Outlet, useLocation } from "react-router-dom";
import Background from "./Background";
import MainContent from "./MainContent";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";
import { useAuth } from '../../hooks/useAuth';

const Layout = () => {
  const { user } = useAuth();
  const location = useLocation();

  const isPublicPage = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <Background>
      {isPublicPage ? (
        <Outlet />
      ) : (
        <MainContainer>
          {user && (
            <>
              <Sidebar />
              <MainContent>
                  <Outlet />
              </MainContent>
            </>
          )}
        </MainContainer>
      )}
    </Background>
  );
};

export default Layout;