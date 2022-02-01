import * as S from './styles'

const Main = ({
  title = 'React Avançadão',
  subtitle = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{subtitle}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="desenvolvedor de frente para a tela com código"
    />
  </S.Wrapper>
)

export default Main
