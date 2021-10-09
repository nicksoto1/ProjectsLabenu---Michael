import React from 'react';
import { useParams } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import {useRequestData} from "../../hooks/useRequestData";
import {BASE_URL} from "../../constants/apiConstants"
import { Typography } from '@material-ui/core';
import {RecipeDetailPageContainer, RecipeImage} from "./styles"

const RecipeDetailPage = () => {
    useProtectPage()
    const params = useParams()
    const data = useRequestData(`${BASE_URL}/recipe/${params.id}`, [])
    const recipe = data[0]

    return (
        <>
            {recipe && <RecipeDetailPageContainer>
                <RecipeImage src={recipe.image} />
                <Typography variant="h5" color="primary" align="center">
                    {recipe.title}
                </Typography>
                <Typography align="center">
                    {recipe.description}
                </Typography>
            </RecipeDetailPageContainer>}
        </>
    )
}

export default RecipeDetailPage;