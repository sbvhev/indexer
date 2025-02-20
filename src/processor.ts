import { v1alpha2 as starknet } from "@apibara/starknet";
import { Parser } from "./parse";
import { DAO } from "./dao";

export interface EventKey {
  blockNumber: bigint;
  transactionHash: bigint;
  transactionIndex: number;
  eventIndex: bigint;
}

export interface EventProcessor<T> {
  filter: {
    keys: starknet.IFieldElement[];
    fromAddress: starknet.IFieldElement;
  };

  parser: Parser<T>;

  handle(dao: DAO, result: { parsed: T; key: EventKey }): Promise<void>;
}
