import '@riotjs/hot-reload'
import {component} from 'riot'

import '../css/style.css'

import app from '../riot/app.tag'

component(app)(document.getElementById('app'), { title: 'Hi there!' })