import Prismic from 'prismic-javascript'

const client = Prismic.client('https://diogocezar.cdn.prismic.io/api/v2')

const HomeData = async () => {
  return client.query(Prismic.Predicates.at('document.type', 'home'))
}

export { HomeData }
