import RecipesApp from './components/Recipes';
import RecipesListApp from './components/RecipesList/RecipesList';
import AddRecipe from './screens/AddRecipe';

export default {
    childRoutes: [{
        path: 'recipes',
        indexRoute: { component: RecipesListApp },
        component: RecipesApp,
        childRoutes: [
            AddRecipe
        ]
    }]
};
