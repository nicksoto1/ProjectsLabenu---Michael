import React from 'react';
import {useForm} from "../../hooks/useForm"
import {TextField, Button} from '@material-ui/core'
import logo from '../../assets/logo.png'
import { FormContainer, SignupPageContainer } from './styles';
import { useHistory } from 'react-router-dom';
import {signup} from "../../services/user"
import { useUnprotectPage } from '../../hooks/useUnprotectPage';

const SignUpPage = () => {
    useUnprotectPage()
    const history = useHistory()
    const {form, onChange} = useForm({name: "", email: "", password: ""})

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        
        signup(form, history)
    }

    return (
        <SignupPageContainer>
            <img src={logo} />
            <FormContainer onSubmit={handleSubmission} >
                <TextField 
                    label="Nome"
                    variant="outlined"
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                />
                <TextField 
                    label="E-mail"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                />
                <TextField  
                    label="Senha"
                    variant="outlined"                
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Cadastrar
                </Button>
            </FormContainer>
        </SignupPageContainer>
    )
}

export default SignUpPage;