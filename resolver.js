//import _ from 'lodash';
export default {
    Query: {
        allAuthors: async (parent, args, { Author }) => {
            const authors = await Author.find();
            return authors.map((x) => {
                x._id = x._id.toString()
                return x;
            })
        }
         
    },

    Mutation: {
        createAuthor: async (parent, args, { Author }) => {
            const newAuthor = await new Author(args).save();
            newAuthor._id = newAuthor._id.toString();
            return newAuthor;
        }
    }
}