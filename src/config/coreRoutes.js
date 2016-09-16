import App from 'App/App';
import Dashboard from 'App/components/Dashboard/Dashboard';
import UserApp from 'App/screens/User';
import RecipeApp from 'App/screens/Recipes';
import MenuApp from 'App/screens/Menu';
import ProveyorApp from 'App/screens/Proveyor';
import KitchenApp from 'App/screens/Kitchen';
import SearchApp from 'App/screens/Search';

const routes = {
    childRoutes: [{
        path: '/',
        component: App,
        indexRoute: { component: Dashboard },
        childRoutes: [
            KitchenApp,
            MenuApp,
            ProveyorApp,
            RecipeApp,
            UserApp,
            SearchApp
        ]
    }]
};

export default routes;
