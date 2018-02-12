export default `
type Author {
    _id: String!
    fName: String!
    lName: String!
}

type Query {
    allAuthors: [Author]!
}

type Mutation {
    createAuthor(fName: String!, lName: String!): Author!
}
`