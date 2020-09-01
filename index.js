const { graphql, buildSchema } = require ('graphql')

const db = {
  users: [
    { id: '1', email: 'bobtest@test.com', name: 'Alex' },
    { id: '2', email: 'sallytest@test.com', name: 'Sally' },
    { id: '3', email: 'davetest@test.com', name: 'Dave' },
    { id: '4', email: 'stantest@test.com', name: 'Stan' },
    { id: '5', email: 'kimtest@test.com', name: 'Kim' },
    { id: '6', email: 'aarontest@test.com', name: 'Aaron' }
  ]
}

const schema= buildSchema(`
    type Query {
      users: [User!]!
    }

    type User {
      id: ID!
      email: String!
      name: String
      avatarUrl: String
    }
  `)

  const rootValue = {
    users: () => db.users
  }

graphql(
  schema,
  `
    {
      users {
        id
        email
      }
    }
  `,
  rootValue
).then(
  res => console.dir(res, { depth: null })
).catch(
  console.error
)
