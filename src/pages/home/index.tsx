import Head from 'next/head'
import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'
import { ClaimUsenameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
        <meta name="description" content="Ignite Call Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsenameForm />
        </Hero>
        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality="100"
            priority
            alt="Calendário simbolizando a aplicação em andamento"
          />
        </Preview>
      </Container>
    </>
  )
}
