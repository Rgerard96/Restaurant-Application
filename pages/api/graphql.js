import { ApolloServer } from 'apollo-server-micro';
import mongoose from 'mongoose';
import typeDefs from '../../apollo/typeDefs.js';
import resolvers from '../../apollo/resolvers.js';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context(context) {
    return context;
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const mongodb = process.env.MONGODB;
const db = mongoose.connection;

if (db.readyState !== 1) {
  mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Database connected successfully!');
  });
} else {
  console.log('Database already connected!');
}

console.log(db.readyState);

const startServer = apolloServer.start();

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Origin",
        "https://studio.apollographql.com"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
    );
    if (req.method === "OPTIONS") {
        res.end();
        return false;
    }

    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

