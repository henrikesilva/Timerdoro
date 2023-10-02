// classe criada para ajudar com a tipagem do styled-componentes adicionando os temas padroes(que criamos) no projeto

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
