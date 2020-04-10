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
