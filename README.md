# Secure Sprint

A decision-based cyber awareness game for IT teams and developers. The content is written in UK English and focuses on practical behaviours rather than code review.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, `script.js` and `config.js` to the repository root.
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.

The game is static and does not require a build step.

## Leaderboard modes

### Local mode, enabled by default

Scores are stored in the visitor's browser. This mode works immediately, but visitors do not share the same leaderboard.

### Shared mode with Supabase

1. Create a Supabase project.
2. Open its SQL Editor and run `supabase.sql`.
3. Open `config.js`.
4. Paste the Supabase Project URL into `SUPABASE_URL`.
5. Paste the project's **anon public key** into `SUPABASE_ANON_KEY`.
6. Commit the updated `config.js`.

Only use the public anon key in the browser. Never place a Supabase service-role key or another secret in this repository.

## Customisation

- Edit scenarios in the `scenarios` array at the beginning of `script.js`.
- Adjust colours in the `:root` section of `style.css`.
- Replace the title and footer in `index.html` if required.

## Files

- `index.html`: page structure
- `style.css`: visual design and responsive layout
- `script.js`: game logic and scenario content
- `config.js`: optional shared leaderboard settings
- `supabase.sql`: optional leaderboard database setup
