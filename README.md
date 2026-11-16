> **Moved.** The combo checker is now part of the TripSit website: <https://tripsit.me/combo>
> (source: [TripSit/website `src/components/comboChecker`](https://github.com/TripSit/website/tree/main/src/components/comboChecker)).
> combo.tripsit.me redirects there. GitHub Pages is turned off, and this repository is archived and no longer deployed.

# Drug Combinations

Combining data from [tripsit](http://wiki.tripsit.me/wiki/Drug_combinations).

## Importing data

```bash
cd app/src/data/
wget https://tripsit.me/combo_beta.json
wget https://raw.githubusercontent.com/TripSit/combogen/master/config.json
```

## Development

This is and old create-react-app using Flow for types. Use `nvm` to get the
correct node version.

## Deploying

The plan (as of July 2023) is to migrate this site to GitHub pages. In the
`app/` folder running `yarn deploy` should build and deploy the latest site. You
need to have installed the dependencies first.
