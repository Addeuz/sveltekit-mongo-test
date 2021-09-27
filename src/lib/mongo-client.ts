import { MongoClient } from 'mongodb';
import { variables } from './environment';

const uri = variables.mongoDbURI;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (import.meta.env.DEV) {
	// In development mode, use a global variable so that the value

	// is preserved across module reloads caused by HMR (hot module replacement).

	if (!global._mongoClientPromise) {
		client = new MongoClient(uri as string);
		global._mongoClientPromise = client.connect();
	}

	clientPromise = global._mongoClientPromise;
} else {
	client = new MongoClient(uri as string);
	clientPromise = client.connect();
}

export { clientPromise };
