import React from 'react';
import { useProtectPage } from '../../hooks/useProtectPage';
import {BASE_URL} from "../../constants/apiConstants"
import { useRequestData } from '../../hooks/useRequestData';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { FabStyled, RecipeFeedPageContainer } from './styles';
import { goToAddRecipe } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const RecipeFeedPage = () => {
    const history = useHistory()
    useProtectPage()

    const recipes = useRequestData(`${BASE_URL}/recipe/feed`, [])


    return (
        <RecipeFeedPageContainer>
            {recipes.map(recipe => {
                return <RecipeCard 
                    key={recipe.recipe_id}
                    id={recipe.recipe_id}
                    titulo={recipe.title}
                    imagem={recipe.image}
                />
            })}
            <FabStyled color="primary" onClick={() => goToAddRecipe(history)}>
                +
            </FabStyled>
        </RecipeFeedPageContainer>
    )
}

export default RecipeFeedPage;