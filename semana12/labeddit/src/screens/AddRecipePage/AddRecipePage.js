import React from 'react';
import {useForm} from "../../hooks/useForm"
import { login } from '../../services/user';
import {TextField, Button, Typography} from '@material-ui/core'
import { FormContainer, AddRecipePageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import { useProtectPage } from '../../hooks/useProtectPage';
import { createRecipe } from '../../services/recipe';

const AddRecipePage = () => {
    useProtectPage()

    const history = useHistory()
    const {form, onChange} = useForm({title: "", description: "", image: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        createRecipe(form, history)
    }

    return(
        <AddRecipePageContainer>
            <Typography variant="h4" align="center" >Adicionar Recita</Typography>
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="Título da Receita"
                    variant="outlined"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Descricao da Receita"
                    variant="outlined"                
                    name="description"
                    value={form.description}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Link da imagem"
                    variant="outlined"                
                    name="image"
                    value={form.image}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Criar Receita
                </Button>
            </FormContainer>
        </AddRecipePageContainer>
    )
}

export default AddRecipePage;