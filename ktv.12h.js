#!/Users/randy/.nvm/versions/node/v4.2.1/bin/node

'use strict'

const request = require('superagent')

const USER = 'randy'

const URL = `http://tv.kenefe.com/api/v2/series/today?username=${USER}`

request
  .get(URL)
  .end((err, res) => {
    if (err) {
      console.log(err.message)
    } else {
      let follow = res.body.data.follow
      if (follow.length === 0) {
        console.log('无播出剧集')
      }
      follow.map(series => {
        console.log(`${series.title} | href="http://tv.kenefe.com"`)
      })
    }
  })