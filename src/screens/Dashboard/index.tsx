import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { useTheme } from 'styled-components';
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
    LoadContainer
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

export interface DataListProps extends TransactionCardProps {
    id: string,
}

interface HighlightProps {
    amount: string,
}
interface HighlightData {
    entries: HighlightProps,
    expansive: HighlightProps,
    total: HighlightProps,
}

export const Dashboard = () => {

    const [transactions, setTransactions] = useState<DataListProps[]>([]);
    const [highlightData, setHighlightData] = useState<HighlightData>({} as HighlightData);
    const [loading, setLoading] = useState(true);
    const theme = useTheme();

    const loadTransactions = async () => {
        const dataKey = '@gofinance@transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];

        let entriesTotal = 0;
        let expansiveTotal = 0;

        const transactionsFormmated: DataListProps[] = transactions
            .map((item: DataListProps) => {

                if (item.type === 'positive') {
                    entriesTotal += Number(item.amount);
                } else {
                    expansiveTotal += Number(item.amount);
                }

                const amount = Number(item.amount).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                });

                const date = Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                }).format(new Date(item.date));

                return {
                    id: item.id,
                    name: item.name,
                    category: item.category,
                    amount,
                    type: item.type,
                    date
                }
            })
        const total = entriesTotal - expansiveTotal;
        setHighlightData({
            entries: {
                amount: Number(entriesTotal).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            expansive: {
                amount: Number(expansiveTotal).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            },
            total: {
                amount: Number(total).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                })
            }
        })
        setTransactions(transactionsFormmated);
        setLoading(false);
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    useFocusEffect(useCallback(() => {
        loadTransactions();
    }, []))



    return (
        <Container>
            {
                loading ?
                    <LoadContainer>
                        <ActivityIndicator color={theme.colors.primary} size={'large'} />
                    </LoadContainer>
                    :
                    <>
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
                                amount={highlightData.entries.amount}
                                lastTransaction='Última entrada dia 13 de abril'
                            />
                            <HighlightCard
                                type="down"
                                title='Saídas'
                                amount={highlightData.expansive.amount}
                                lastTransaction='Última entrada dia 13 de abril'
                            />
                            <HighlightCard
                                type="total"
                                title='Total'
                                amount={highlightData.total.amount}
                                lastTransaction='Última entrada dia 13 de abril'
                            />
                        </HighlightCards>

                        <Transactions>
                            <Title>Listagem</Title>

                            <TransactionList
                                data={transactions}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) =>
                                    <TransactionCard data={item} />}
                            />

                        </Transactions>
                    </>
            }
        </Container >
    )
};

