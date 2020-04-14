# react-redux2020

- mongo, nosql db
- semantic-ui.com

## location is the new version of seasons

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/>
```

- Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

- avoid doing data loading inside the constructor, just returning jsx

- do your data loading inside componentDidMount()

- semanitc-ui.com

- elements, icons and loader, using text loader

```html
<div className="ui segment">
  <div className="ui active dimmer">
    <div className="ui text loader">Loading ...</div>
  </div>
  <p></p>
</div>
```

- can set defaultProps on Spinner, is an object

## Event handlers

- naming conventiong, eg, onInputChange

1. on
2. name of element to which we are assigning the callback
3. the event for which we are watching

- may use 'handle', but less popular than 'on'

- access key: 28g3lj1uoXSXbedMwx1n6SNAcS57hShHV4xaEk9cX20

## axios vs fetch

- npm i --save axios

- in console, open network tab, clear the request log, and then enter search term of 'cars' say. Can see GET request results

- when we make a request with axios, it returns an object called a PROMISE. a promise is an object that gives us a little notification when some amount of or work, like a network request, is completed.

### async / await usage

- put **async** keyword in front of the method name
- you then find whatever is returning, or taking some time to resolve (eg network request with axios.get) and pu the **await** keyword in front of that, then whatever gets returned from this entire statement, we will assign to some variable, we can then work freely with that varible.
