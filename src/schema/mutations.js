const { GraphQLObjectType } = require('graphql')
const baconMutation = require('../model/bacon/mutations')
const studentMutation = require('../model/student/mutations')


module.exports = new GraphQLObjectType({
    name: 'RootMutationsType',
    fields: {
        //for Becon
        addBacon: baconMutation.addBacon,
        updateBacon: baconMutation.updateBacon,

        //for Student
        addStudent:  studentMutation.addStudent,
        updateStudent: studentMutation.updateStudent
        

    }
})