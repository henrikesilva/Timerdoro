import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      {/* Serve para aplicar o layout default(Header) em todas as rotas 'filhas' */}
      <Route path="/" element={<DefaultLayout />}>
        {/* path = caminho da rota - element = componente da rota */}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
