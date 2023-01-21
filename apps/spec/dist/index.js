import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type User {
      id: ID!
      username: String!
      email: String!
      password: String!
      avatorUrl: String
      bio: String
  }
  type Image {
      id: ID!
      author: User!
      url: String!
      description: String
      keyword: String!
      # スタンプを押されたもの
  }

  type Query {
    # User 
    getUsers: [User]
    getUser(id: ID!): User

    # Image
    getImages: [Image]
    getImagesByKeyword(query: String): [Image] 
    getImage(id: ID!): Image
}

type Mutation {
    # User
    login(email: String!, password: String!): User
    createUser(email: String!, password: String!): User!
    updateAvator(id: ID! ,image: String!): User!
    updateProfile(id: ID!, description: String, name: String): User!
    updatePassword(id: ID!, password:String!, oldPassword:String!): Boolean!
    deleteUser(id: ID!): Boolean!

    # Image
    createImage(keyword: String!): Image!
    updateImageComment(id: ID!, description: String): Image
    deleteImage(id: ID!): Boolean!

    # Test data (Book)

}
`;
const users = [
    {
        id: "12",
        username: "ka-11",
        email: "ka-11@example.com",
        password: "ka-11",
        avatorUrl: null,
        bio: "I am god of death!"
    },
    {
        id: "34",
        username: "op-e",
        email: "op-e@example.com",
        password: "op-e",
        avatorUrl: null,
        bio: "I am op(overpower)"
    },
];
const resolvers = {
    Query: {
        getUsers: () => users,
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
