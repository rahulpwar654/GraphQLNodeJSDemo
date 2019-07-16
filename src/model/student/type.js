let {
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'Student',
    description: 'A student type GQL object',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        firstname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
            type: new GraphQLNonNull(GraphQLString)
        },
        collegeid: {
            type: new GraphQLNonNull(GraphQLInt)
        },
    }
})