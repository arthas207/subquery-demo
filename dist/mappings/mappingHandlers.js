"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTransfer = void 0;
const types_1 = require("../types");
async function handleTransfer(event) {
    // Get data from the event
    // The balances.transfer event has the following payload \[from, to, value\]
    logger.info(JSON.stringify(event));
    const from = event.event.data[0];
    const to = event.event.data[1];
    const amount = event.event.data[2];
    // Create the new transfer entity
    const transfer = new types_1.Transfer(`${event.block.block.header.number.toNumber()}-${event.idx}`);
    transfer.block_number = event.block.block.header.number.toBigInt();
    transfer.from_account = from.toString();
    transfer.to_account = to.toString();
    transfer.balance_change = amount.toBigInt();
    transfer.timestamp = event.block.timestamp.getTime().toString();
    await transfer.save();
}
exports.handleTransfer = handleTransfer;
