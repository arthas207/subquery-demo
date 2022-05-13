import { Entity, FunctionPropertyNames } from "@subql/types";
declare type TransferProps = Omit<Transfer, NonNullable<FunctionPropertyNames<Transfer>>>;
export declare class Transfer implements Entity {
    constructor(id: string);
    id: string;
    block_number?: bigint;
    from_account: string;
    to_account: string;
    balance_change?: bigint;
    timestamp: string;
    save(): Promise<void>;
    static remove(id: string): Promise<void>;
    static get(id: string): Promise<Transfer | undefined>;
    static create(record: TransferProps): Transfer;
}
export {};
