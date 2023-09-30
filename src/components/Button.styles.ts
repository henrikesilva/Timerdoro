import styled, {css} from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants ={
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
};

// bloco de exportação da estilização do botão utilizando Styled Components
export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme.primary};

    /* o styled components consegue 'transformar' um código JS em CSS */
    /* ${props => {
        return css`
            background-color: ${buttonVariants[props.variant]}
        `
    }} */
`