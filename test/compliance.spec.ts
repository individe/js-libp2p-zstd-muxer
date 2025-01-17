/* eslint-env mocha */

import tests from '@libp2p/interface-stream-muxer-compliance-tests'
import { SnappyMplex } from '../src/index.js'

describe('compliance', () => {
  tests({
    async setup () {
      return new SnappyMplex({
        maxInboundStreams: Infinity,
        disconnectThreshold: Infinity
      })
    },
    async teardown () {}
  })
})
