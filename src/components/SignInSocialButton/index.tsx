import React from 'react'

import { Container, Button, ImageContainer, Text } from './styles'
import { TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'

interface Props extends TouchableOpacityProps {
  title: string
  svg: React.FC<SvgProps>
}

export const SignInSocialButton = ({ title, svg: Svg, ...rest }: Props) => {
  return (
    <Container>
      <Button {...rest}>
        <ImageContainer>
          <Svg />
        </ImageContainer>

        <Text>{title}</Text>
      </Button>
    </Container>
  )
}
