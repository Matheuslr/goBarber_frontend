import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Profile, Content } from './styles';

import Notifications from '../Notifications';
import logo from '~/assets/logo-purple.svg';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="goBarber" />
                    <Link to="dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    <Profile>
                        <div>
                            <strong>Matheus Lucas</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.png"
                            alt="Matheus Reis"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
