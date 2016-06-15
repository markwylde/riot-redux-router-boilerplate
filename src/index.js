import riot from 'riot'

import store from './store/main.store.js'

import './css/main.css!'
import './tags/app.tag!'

function initDocument() {
	const body = document.createElement('body')
	const app = document.createElement('app')
	body.appendChild(app)
	document.body = body
}

function updateTags() {
  const state = store.getState()
	tags.forEach(tag => {
		tag.update({ store: state })
	})
}

initDocument()

const tags = riot.mount('*')
updateTags()

store.subscribe(updateTags)
