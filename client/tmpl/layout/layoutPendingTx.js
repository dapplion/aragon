// @flow
import { Template } from 'meteor/templating'
import { $ } from 'meteor/jquery'

import TxQueue from '/client/lib/queue'

window.TxQueue = TxQueue

TxQueue.onEmpty = () => ($('#pendingTxButton').popup('hide'))

const tmpl = Template.Layout_PendingTx

tmpl.onRendered(() => {
  $('#pendingTxButton').popup({
    inline: true,
    on: 'click',
    jitter: -1,
    position: 'bottom center',
    lastResort: 'bottom right',
  })
})

tmpl.helpers({
  txs: () => TxQueue.queue.get(),
})
