# Cyber Training Lab

This package is ready to upload to the root of the existing `CyberTraining-IT` GitHub repository.

## Structure
- `index.html`: common password gateway and game selector
- `access-config.js`: gateway password configuration
- `secure-sprint/`: existing Secure Sprint files
- `hack-the-desk/`: Hack the Desk facilitator game

## Upload to GitHub
Upload the **contents of this ZIP** to the root of the existing repository. The root `index.html` becomes the common landing page. GitHub Pages can continue to publish the `main` branch from `/ (root)`.

## Access password
Initial demo password: `hackthedesk`.

Before publishing, replace `PASSWORD_SHA256` in `access-config.js` with the SHA-256 hash of the password you want to use.

Example:
```bash
printf %s 'YOUR-NEW-PASSWORD' | sha256sum
```

Important: GitHub Pages is static and public. This client-side password gate helps control workshop entry but is not strong authentication and should not protect confidential information.
