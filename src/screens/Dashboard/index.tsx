import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
} from './styles';

export const Dashboard = () => {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo
                            source={{
                                uri: 'https://avatars.githubusercontent.com/u/22582187?v=4'
                            }}
                        />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Diogo</UserName>
                        </User>
                    </UserInfo>
                    <Icon name="power" />
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard
                    type="up"
                    title='Entradas'
                    amount='R$ 17.400.00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard
                    type="down"
                    title='Saídas'
                    amount='R$ 17.400.00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
                <HighlightCard
                    type="total"
                    title='Total'
                    amount='R$ 17.400.00'
                    lastTransaction='Última entrada dia 13 de abril'
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard />
            </Transactions>
        </Container >
    )
};

