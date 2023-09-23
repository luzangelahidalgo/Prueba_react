import { IRoute } from './types/IRouter';
import { Routes, Route, HashRouter, useNavigate } from 'react-router-dom'

interface IProps {
    mantenedor: IRoute[];
    confiuguraciones: IRoute[];
}

export const Navigation = () => {

    return (
        <HashRouter>
          <ResponsiveAppBar/>
{/*           <ResponsiveAppBar menuMantenedores={mantenedor} menuConfiguraciones={confiuguraciones} />
          <MainAppBar menuMantenedores={mantenedor} menuConfiguraciones={confiuguraciones} />
          <RoutesApp mantenedor={mantenedor} confiuguraciones={confiuguraciones} />
          <IdleTimer onIdle={handleLogout} timeout={600000} />
          <Footer /> */}
        </HashRouter>
      );
};