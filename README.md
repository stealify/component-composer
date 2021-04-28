# component-composer
Compose Frontends Visual 


## Component Structure

```js

const component

```

## Diffrent Methods to observe node mutations

1. customElement API.
2. Mutation Observer on Node.
3. directly fire callbacks on Mutation (Used on Most Frameworks)

### Why Prefer Mutation Observer over customElements?
There are Some Reasons like defining global Application Logic and SSR
So it depends on the HTML Component size.

you always need a tagName or selector to identify you component logic.
a TagName can be obtained in many Diffrent ways.
