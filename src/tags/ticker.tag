import store from '../store/main.store.js'

<ticker>
  <header>
    <h1>Example App</h1>
  </header>

  <article>
    <p>This is an example</p>
    <p>Value: {opts.store}</p>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </article>

  <script>
    this.increase = () =>
      store.dispatch({ type: 'INCREMENT' })

    this.decrease = () =>
      store.dispatch({ type: 'DECREMENT' })
  </script>
</ticker>