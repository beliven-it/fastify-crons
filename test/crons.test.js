'use strict'

const { test } = require('tap')
const Fastify = require('fastify')

const buildApp = function (t) {
  const fastify = Fastify()

  t.tearDown(() => fastify.close())

  return fastify
}

test('fastify-crons', async t => {
  t.test('without options', async t => {
    t.plan(1)
    const fastify = await buildApp(t)
    try {
      await fastify.register(require('../crons'))
      t.true('crons' in fastify, 'should register the plugin')
    } catch (err) {
      console.log(err)
      t.error(err, 'should not throw any error')
    }
  })
})
