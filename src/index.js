import riot from 'riot'

import './tags/app.tag!'

const body = document.createElement('body')
body.innerHTML = '<app></app>'

document.body = body
            
riot.mount('*')