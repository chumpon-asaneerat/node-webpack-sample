import '@riotjs/hot-reload'
import {component} from 'riot'

import '../css/style.css'

import Random from '../riot/random.riot'

component(Random)(document.getElementById('app'), { title: 'Hi there!' })