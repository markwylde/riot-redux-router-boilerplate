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
      <article>
        <h1>Welcome to the Example</h1>
        <p>
          You can use <button onClick="window.location.route = '/page/2'">window.location.route = '/page/2'</button> 
          to change the route via javascript
        </p>
      </article>
    </route>

    <route path="/ticker" store={opts.store}>
      <ticker store={opts.store} />
    </route>

    <route path="/page/1">
      <article>
        <h1>Page: 1</h1>
        This is page 1
      </article>
    </route>

    <route path="/page/2">
      <article>
        <h1>Page: 2</h1>
        This is page 2
      </article>
    </route>

    <route path="/say">
      <article>
        <h1>Say Something...</h1>
        You didn't choose anything to say
      </article>
    </route>

    <route path="/say/:message">
      <article>
        <h1>Say?</h1>
        {route.message}
      </article>
    </route>

    <route path="/say/:message/to/:user">
      <article>
        <h1>Say?</h1>
        {route.message} to {route.user}
      </article>
    </route>

  </router>

</app>