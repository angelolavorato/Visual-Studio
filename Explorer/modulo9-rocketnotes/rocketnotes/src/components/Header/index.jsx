import {RiShutDownLine}from'react-icons/ri'

import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
<Profile>
  <img src='https://github.com/angelolavorato.png'
        alt="Foto de usuario"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Ângelo Soldati Lavorato</strong>
        </div>
</Profile>

<Logout>
  <RiShutDownLine/>
</Logout>
    </Container>
  )
}