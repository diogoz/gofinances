import React, { useState } from 'react'
import { ActivityIndicator, Alert, Platform } from 'react-native'
import { useTheme } from 'styled-components'
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from './styles'
import LogoSvg from '../../assets/logo.svg'
import GoogleSvg from '../../assets/google.svg'
import AppleSvg from '../../assets/apple.svg'
import { SignInSocialButton } from '../../components/SignInSocialButton'
import { useAuth } from '../../hooks/auth'
export const SignIn = () => {
  const [loading, setLoading] = useState(false)
  const { signInWithGoogle, signInWithApple } = useAuth()
  const theme = useTheme()

  const handleSignInWithGoogle = async () => {
    try {
      setLoading(true)
      return await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
      setLoading(false)
    }
  }

  const handleSignInWithApple = async () => {
    try {
      setLoading(true)
      return await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Apple')
      setLoading(false)
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={120} height={68} />

          <Title>
            Controle suas {'\n'}
            finanças de forma {'\n'}
            muito mais simples
          </Title>

          <SignInTitle>
            Faça seu login com {'\n'}
            uma das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            svg={GoogleSvg}
            title={'Entrar com Google'}
            onPress={handleSignInWithGoogle}
          />
          {Platform.OS === 'ios' && (
            <SignInSocialButton
              svg={AppleSvg}
              title={'Entrar com Apple'}
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {loading && (
          <ActivityIndicator
            color={theme.colors.shape}
            size={'large'}
            style={{ marginTop: 18 }}
          />
        )}
      </Footer>
    </Container>
  )
}
