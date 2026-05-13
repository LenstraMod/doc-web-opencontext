## ADDED Requirements

### Requirement: Supabase Client Initialization
The application must initialize a Supabase client using environment variables for URL and Anon Key.

#### Scenario: App startup
- **WHEN** the application starts
- **THEN** it should successfully create a Supabase client using `process.env.SUPABASE_URL` and `process.env.SUPABASE_ANON_KEY`.

### Requirement: Data Retrieval
The application must be able to fetch data from Supabase tables (e.g., `changelog`).

#### Scenario: Fetching changelog entries
- **WHEN** the Changelog component requests data
- **THEN** the Supabase client should perform a `select` query on the `changelog` table and return the results sorted by date.
