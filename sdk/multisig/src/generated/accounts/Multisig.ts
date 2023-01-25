/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { Member, memberBeet } from '../types/Member'

/**
 * Arguments used to create {@link Multisig}
 * @category Accounts
 * @category generated
 */
export type MultisigArgs = {
  configAuthority: web3.PublicKey
  threshold: number
  members: Member[]
  authorityIndex: number
  transactionIndex: beet.bignum
  staleTransactionIndex: beet.bignum
  reserved: number
  createKey: web3.PublicKey
  bump: number
}

export const multisigDiscriminator = [224, 116, 121, 186, 68, 161, 79, 236]
/**
 * Holds the data for the {@link Multisig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Multisig implements MultisigArgs {
  private constructor(
    readonly configAuthority: web3.PublicKey,
    readonly threshold: number,
    readonly members: Member[],
    readonly authorityIndex: number,
    readonly transactionIndex: beet.bignum,
    readonly staleTransactionIndex: beet.bignum,
    readonly reserved: number,
    readonly createKey: web3.PublicKey,
    readonly bump: number
  ) {}

  /**
   * Creates a {@link Multisig} instance from the provided args.
   */
  static fromArgs(args: MultisigArgs) {
    return new Multisig(
      args.configAuthority,
      args.threshold,
      args.members,
      args.authorityIndex,
      args.transactionIndex,
      args.staleTransactionIndex,
      args.reserved,
      args.createKey,
      args.bump
    )
  }

  /**
   * Deserializes the {@link Multisig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Multisig, number] {
    return Multisig.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Multisig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Multisig> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Multisig account at ${address}`)
    }
    return Multisig.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      '7YYnaRgQeHYd2FKGKkwASM2ZNZHTo1GvcicsyKKFvcoh'
    )
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, multisigBeet)
  }

  /**
   * Deserializes the {@link Multisig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Multisig, number] {
    return multisigBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Multisig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return multisigBeet.serialize({
      accountDiscriminator: multisigDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Multisig} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: MultisigArgs) {
    const instance = Multisig.fromArgs(args)
    return multisigBeet.toFixedFromValue({
      accountDiscriminator: multisigDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Multisig} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: MultisigArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Multisig.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Multisig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      configAuthority: this.configAuthority.toBase58(),
      threshold: this.threshold,
      members: this.members,
      authorityIndex: this.authorityIndex,
      transactionIndex: (() => {
        const x = <{ toNumber: () => number }>this.transactionIndex
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      staleTransactionIndex: (() => {
        const x = <{ toNumber: () => number }>this.staleTransactionIndex
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      reserved: this.reserved,
      createKey: this.createKey.toBase58(),
      bump: this.bump,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const multisigBeet = new beet.FixableBeetStruct<
  Multisig,
  MultisigArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['configAuthority', beetSolana.publicKey],
    ['threshold', beet.u16],
    ['members', beet.array(memberBeet)],
    ['authorityIndex', beet.u8],
    ['transactionIndex', beet.u64],
    ['staleTransactionIndex', beet.u64],
    ['reserved', beet.u8],
    ['createKey', beetSolana.publicKey],
    ['bump', beet.u8],
  ],
  Multisig.fromArgs,
  'Multisig'
)
