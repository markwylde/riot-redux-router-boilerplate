import riot from 'riot'

import './css/main.css!'
import './tags/app.tag!'

const body = document.createElement('body')
const app = document.createElement('app')
body.appendChild(app)

document.body = body
            
riot.mount('*')