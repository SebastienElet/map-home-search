# Map home search

> I plan to find a new home near from my workplace (in Paris).
> I would like to discover the best city to live in.

## How to use it

```bash
npm
npm start
```

## Update dependencies

```bash
npx npm-check-updates --interactive
```

## Architecture

```plaintext
/pages/
      /page1.tsx
/components/
      /map/ -- Model name
            /components -- Reusable components
            /views -- Specific components
```

```

```

## TODO

- [x] Find a front-end stack
- [ ] Find a map library
- [ ] Display a map
- [ ] Choose library to share types between front and back
- [ ] Setup a rest API to retrieve data
- [ ] Find dataset with square meters price
- [ ] Choose a database to store the data
- [ ] Display a heat map with square meters price
- [ ] Setup CI
- [ ] Setup testing
- [ ] Find dataset with train travel time from Paris
- [ ] Add interface to switch between the datasets
- [ ] Implement a rule system with points for each criteria
- [ ] Find dataset with [geological risks](https://www.georisques.gouv.fr)
- [ ] Implement geological risks in the rule system
- [ ] Find dataset with noise pollution
- [ ] Implement noise pollution in the rule system
- [ ] Find dataset with golfs
- [ ] Implement golfs in the rule system
- [ ] Find dataset with archery clubs
- [ ] Implement archery clubs in the rule system
- [ ] Find dataset with cycling paths
- [ ] Implement cycling paths in the rule system
- [ ] Find dataset with cities debt
- [ ] Implement cities debt in the rule system
- [ ] Find dataset with doctors
- [ ] Implement doctors in the rule system
- [ ] Find dataset about security
- [ ] Implement security in the rule system
- [ ] Implement an interface to configure the rule system

## Links

[ADR](./adr/)
