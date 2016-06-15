import 'riot-router-tag'

import './ticker.tag!'

<app>

  <a href="/">Home</a> | 
  <a href="/ticker">Ticker</a> | 
  <a href="/say/Hello">Say Hello</a> | 
  <a href="/say/Hello/to/Mark">Say Hello To Mark</a> | 
  <a href="/page/1">Page 1</a> | 
  <a href="/page/2">Page 2</a>

  <router store={store}>

    <route path="/">
      <h1>Welcome to the Example</h1>
      <p>
        You can use <button onClick="window.location.route = '/page/2'">window.location.route = '/page/2'</button> 
        to change the route via javascript
      </p>
    </route>

    <route path="/ticker" store={opts.store}>
      <ticker store={opts.store} />
    </route>

    <route path="/page/1">
      <h1>Page: 1</h1>
      This is page 1
    </route>

    <route path="/page/2">
      <h1>Page: 2</h1>
      This is page 2
    </route>

    <route path="/say">
      <h1>Say Something...</h1>
      You didn't choose anything to say
    </route>

    <route path="/say/:message">
      <h1>Say?</h1>
      {route.message}
    </route>

    <route path="/say/:message/to/:user">
      <h1>Say?</h1>
      {route.message} to {route.user}
    </route>

  </router>

</app>