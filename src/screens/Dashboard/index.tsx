import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
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
    TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string,
}

export const Dashboard = () => {

    const data: DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: 'Desenvolvimento de Site',
            amount: 'R$ 12.000.00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020",
        },

        {
            id: '2',
            type: 'negative',
            title: 'Desenvolvimento de qweqewqeq',
            amount: 'R$ 12.000.00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020",
        },

        {
            id: '3',
            type: 'negative',
            title: 'Desenvolvimento de qweqewqeq',
            amount: 'R$ 12.000.00',
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020",
        }
    ];

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

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TransactionCard data={item} />}

                />

            </Transactions>
        </Container >
    )
};

