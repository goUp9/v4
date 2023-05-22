import {
  AddressLookupTableAccount,
  PublicKey,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";
import * as instructions from "../instructions/index";

/**
 * Returns unsigned `VersionedTransaction` that needs to be
 * signed by `creator` and `feePayer` before sending it.
 */
export function vaultTransactionCreate({
  blockhash,
  feePayer,
  multisigPda,
  transactionIndex,
  creator,
  vaultIndex,
  ephemeralSigners,
  transactionMessage,
  addressLookupTableAccounts,
  memo,
}: {
  blockhash: string;
  feePayer: PublicKey;
  multisigPda: PublicKey;
  transactionIndex: bigint;
  creator: PublicKey;
  vaultIndex: number;
  /** Number of additional signing PDAs required by the transaction. */
  ephemeralSigners: number;
  /** Transaction message to wrap into a multisig transaction. */
  transactionMessage: TransactionMessage;
  /** `AddressLookupTableAccount`s referenced in `transaction_message`. */
  addressLookupTableAccounts?: AddressLookupTableAccount[];
  memo?: string;
}): VersionedTransaction {
  const message = new TransactionMessage({
    payerKey: feePayer,
    recentBlockhash: blockhash,
    instructions: [
      instructions.vaultTransactionCreate({
        multisigPda,
        transactionIndex,
        creator,
        vaultIndex,
        ephemeralSigners,
        transactionMessage,
        addressLookupTableAccounts,
        memo,
      }),
    ],
  }).compileToV0Message();

  return new VersionedTransaction(message);
}
