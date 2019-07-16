const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLFloat
} = require('graphql')

const studentType = require('./type')
const Student = require('./student')

// Defines the mutations
module.exports = {
    addStudent: {
        type:studentType,
        args: {
            firstname:   { type: new GraphQLNonNull(GraphQLString) },
            lastname:  { type: new GraphQLNonNull(GraphQLString) },
            collegeid:  { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: Student.createEntry.bind(Student)
    },

    updateStudent: {
        type: studentType,
        args: {
            id:     { type: GraphQLID },
            firstname:   { type:new GraphQLNonNull(GraphQLString) },
            lastname:  { type: new GraphQLNonNull(GraphQLString) },
            collegeid:  { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: Student.updateEntry.bind(Student)
    }
}
