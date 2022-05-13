import { SubstrateEvent } from "@subql/types";
import { Transfer } from "../types";
import { Balance } from "@polkadot/types/interfaces";

export async function handleTransfer(event: SubstrateEvent): Promise<void> {
    // Get data from the event
    // The balances.transfer event has the following payload \[from, to, value\]
    // logger.info(JSON.stringify(event));
    const from = event.event.data[0];
    const to = event.event.data[1];
    const amount = event.event.data[2];
    
    // Create the new transfer entity
    const transfer = new Transfer(
        `${event.block.block.header.number.toNumber()}-${event.idx}`,
    );
    transfer.block_number = event.block.block.header.number.toBigInt();
    transfer.from_account = from.toString();
    transfer.to_account = to.toString();
    transfer.balance_change = (amount as Balance).toBigInt();
    transfer.timestamp = event.block.timestamp.toString();
    await transfer.save();
}

