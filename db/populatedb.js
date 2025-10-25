import { Client } from "pg";
import "dotenv/config";

const SQL = `
CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(280),
    username VARCHAR(50),
    added TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO messages (text, username) VALUES
    ('Hello', 'Padhi'),
    ('Hey', 'Pawar'),
    ('Welcome to this Message Board', 'Odin');
`;

async function main() {
    console.log("seeding....");
    
    // Get database URL from command line argument
    const connectionString = process.argv[2] || process.env.DATABASE_URL;
    
    if (!connectionString) {
        console.error("Please provide a database URL as an argument");
        console.log("Usage: node db/populatedb.js <database-url>");
        console.log("Example: node db/populatedb.js postgresql://user:password@localhost:5432/dbname");
        process.exit(1);
    }
    
    const client = new Client({
        connectionString: connectionString,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();