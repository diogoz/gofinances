import React from 'react'
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
  const { user } = useAuth()
  console.log(user)
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
          <SignInSocialButton svg={GoogleSvg} title={'Entrar com Google'} />
          <SignInSocialButton svg={AppleSvg} title={'Entrar com Apple'} />
        </FooterWrapper>
      </Footer>
    </Container>
  )
}
