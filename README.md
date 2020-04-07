# W2Group Code Challenge

## Component Hierarchy

The SPA consists of a single ‘page’ with three main components.

The ‘active’ components, `IndiceSelection` & `PriceTable`, enable the user to interact with the application. The ‘passive’ component, `LineChart` simply takes the input given and renders the result.

A sinlge `LandingPage` components composed the three main components onto a single file. The `LandingPage` component is responsible in fetching the application data by way of `useIndexApi` hook.

The `useIndexApi` maintains the state of the api data by implementing a `useReducer`. It performs three main tasks: sets state, fetches data, and transforms the response data.

The `IndiceSelection` is composed of two `fieldset` elements that represent the two selection options, Select Index & Select Period. When a user selects a radio button this triggers an `onChange` event on the `fieldset`s that triggers the `useIndexApi` hook to fetch the data requested by the user.

The `LineChart` is the only component that does not provide affordances to the user. As a component, it simply takes input data & renders an svg.

The `PriceTable` not only takes in data but affords the users to sort the data.
