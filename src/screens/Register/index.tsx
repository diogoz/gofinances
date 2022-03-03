import React, { useState } from 'react';
import { Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionTypes,
} from './styles';

interface FormData {
    name: string;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('Nome é obrigatório'),

    amount: Yup
        .number().typeError('Informe um valor númerico')
        .positive('O valor não pode ser negativo')
})

export const Register = () => {

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const handleTransactionTypesSelect = (type: 'up' | 'down') => {
        setTransactionType(type);
    }

    const handlepenSelectCategoryModal = () => {
        setCategoryModalOpen(true);
    }

    const handleCloseSelectCategoryModal = () => {
        setCategoryModalOpen(false);
    }

    const handleRegister = (form: FormData) => {

        if (!transactionType) return Alert.alert('Selecione o tipo da transação');
        if (category.key === 'category') return Alert.alert('Selecione a categoria');


        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }
        console.log(data);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            placeholder="Nome"
                            control={control}
                            name="name"
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.name && errors.name.message}
                        />

                        <InputForm
                            placeholder="Preço"
                            control={control}
                            name="amount"
                            keyboardType='decimal-pad'
                            error={errors.amount && errors.amount.message}
                        />

                        <TransactionTypes>
                            <TransactionTypeButton
                                title='Income'
                                type='up'
                                onPress={() => handleTransactionTypesSelect('up')}
                                isActive={transactionType === 'up'}
                            />

                            <TransactionTypeButton
                                title='Outcome'
                                type='down'
                                onPress={() => handleTransactionTypesSelect('down')}
                                isActive={transactionType === 'down'}
                            />
                        </TransactionTypes>

                        <CategorySelectButton
                            title={category.name}
                            onPress={handlepenSelectCategoryModal}
                        />
                    </Fields>

                    <Button title="Enviar" onPress={handleSubmit(() => handleRegister)} />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>


            </Container>
        </TouchableWithoutFeedback>
    )
}