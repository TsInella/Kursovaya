import Admin from './pages/Admin'
import Favourites from './pages/Favourites'
import Recommendations from './pages/Recommendations'
import Auth from './pages/Auth'
import {MOVIES_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, RECOMMENDATIONS_ROUTE, FAVOURITES_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import MoviesPage from "./pages/MoviesPage";

export const authRoutes = [
    {
        path:  ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:  FAVOURITES_ROUTE,
        Component: Favourites
    }
]
export const publicRoutes = [
    {
        path:  RECOMMENDATIONS_ROUTE,
        Component: Recommendations
    },
    {
        path:  LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:  REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:  MOVIES_ROUTE + '/:id',
        Component: MoviesPage
    }
]
