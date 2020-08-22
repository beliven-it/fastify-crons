'use strict'

const fp = require('fastify-plugin')
const nodeCron = require('node-cron')

module.exports = fp(function (fastify, opts, next) {
  const schedule = (rule, callback, options) => {
    return nodeCron.schedule(rule, callback, {
      timezone: opts.timezone,
      ...options
    })
  }

  fastify.decorate('crons', {
    schedule
  })

  next()
})
