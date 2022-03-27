import React from 'react'
import { Alert } from 'react-native'
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
  const { signInWithGoogle } = useAuth()

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível conectar a conta Google')
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
          <SignInSocialButton svg={AppleSvg} title={'Entrar com Apple'} />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}
