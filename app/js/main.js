import '@riotjs/hot-reload'
import {component} from 'riot'

import '../css/style.css'
import '../css/style2.scss'

import app from '../riot/app.tag'

component(app)(document.getElementById('app'), { title: 'Hi there!' })