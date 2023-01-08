/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * DuplicateMember: 'Found multiple members with the same pubkey'
 *
 * @category Errors
 * @category generated
 */
export class DuplicateMemberError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'DuplicateMember'
  constructor() {
    super('Found multiple members with the same pubkey')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, DuplicateMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new DuplicateMemberError())
createErrorFromNameLookup.set(
  'DuplicateMember',
  () => new DuplicateMemberError()
)

/**
 * MemberAlreadyExists: 'Member is already in multisig'
 *
 * @category Errors
 * @category generated
 */
export class MemberAlreadyExistsError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'MemberAlreadyExists'
  constructor() {
    super('Member is already in multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MemberAlreadyExistsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new MemberAlreadyExistsError())
createErrorFromNameLookup.set(
  'MemberAlreadyExists',
  () => new MemberAlreadyExistsError()
)

/**
 * EmptyMembers: 'Members array is empty'
 *
 * @category Errors
 * @category generated
 */
export class EmptyMembersError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'EmptyMembers'
  constructor() {
    super('Members array is empty')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, EmptyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new EmptyMembersError())
createErrorFromNameLookup.set('EmptyMembers', () => new EmptyMembersError())

/**
 * TooManyMembers: 'Too many members, can be up to 65535'
 *
 * @category Errors
 * @category generated
 */
export class TooManyMembersError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'TooManyMembers'
  constructor() {
    super('Too many members, can be up to 65535')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TooManyMembersError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new TooManyMembersError())
createErrorFromNameLookup.set('TooManyMembers', () => new TooManyMembersError())

/**
 * MaxMembersReached: 'Maximum number of members already reached'
 *
 * @category Errors
 * @category generated
 */
export class MaxMembersReachedError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'MaxMembersReached'
  constructor() {
    super('Maximum number of members already reached')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MaxMembersReachedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new MaxMembersReachedError())
createErrorFromNameLookup.set(
  'MaxMembersReached',
  () => new MaxMembersReachedError()
)

/**
 * InvalidThreshold: 'Invalid threshold, must be between 1 and number of members'
 *
 * @category Errors
 * @category generated
 */
export class InvalidThresholdError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'InvalidThreshold'
  constructor() {
    super('Invalid threshold, must be between 1 and number of members')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidThresholdError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new InvalidThresholdError())
createErrorFromNameLookup.set(
  'InvalidThreshold',
  () => new InvalidThresholdError()
)

/**
 * Unauthorized: 'Attempted to perform an unauthorized action'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'Unauthorized'
  constructor() {
    super('Attempted to perform an unauthorized action')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new UnauthorizedError())
createErrorFromNameLookup.set('Unauthorized', () => new UnauthorizedError())

/**
 * NotAMember: 'Provided pubkey is not a member of multisig'
 *
 * @category Errors
 * @category generated
 */
export class NotAMemberError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'NotAMember'
  constructor() {
    super('Provided pubkey is not a member of multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotAMemberError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new NotAMemberError())
createErrorFromNameLookup.set('NotAMember', () => new NotAMemberError())

/**
 * InvalidTransactionMessage: 'TransactionMessage is malformed.'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTransactionMessageError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'InvalidTransactionMessage'
  constructor() {
    super('TransactionMessage is malformed.')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTransactionMessageError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1778,
  () => new InvalidTransactionMessageError()
)
createErrorFromNameLookup.set(
  'InvalidTransactionMessage',
  () => new InvalidTransactionMessageError()
)

/**
 * StaleTransaction: 'Transaction is stale'
 *
 * @category Errors
 * @category generated
 */
export class StaleTransactionError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'StaleTransaction'
  constructor() {
    super('Transaction is stale')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, StaleTransactionError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new StaleTransactionError())
createErrorFromNameLookup.set(
  'StaleTransaction',
  () => new StaleTransactionError()
)

/**
 * InvalidTransactionStatus: 'Invalid transaction status'
 *
 * @category Errors
 * @category generated
 */
export class InvalidTransactionStatusError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'InvalidTransactionStatus'
  constructor() {
    super('Invalid transaction status')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidTransactionStatusError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new InvalidTransactionStatusError())
createErrorFromNameLookup.set(
  'InvalidTransactionStatus',
  () => new InvalidTransactionStatusError()
)

/**
 * TransactionNotForMultisig: 'Transaction does not belong to the multisig'
 *
 * @category Errors
 * @category generated
 */
export class TransactionNotForMultisigError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'TransactionNotForMultisig'
  constructor() {
    super('Transaction does not belong to the multisig')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TransactionNotForMultisigError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x177b,
  () => new TransactionNotForMultisigError()
)
createErrorFromNameLookup.set(
  'TransactionNotForMultisig',
  () => new TransactionNotForMultisigError()
)

/**
 * AlreadyApproved: 'Member already approved the transaction'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyApprovedError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'AlreadyApproved'
  constructor() {
    super('Member already approved the transaction')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyApprovedError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new AlreadyApprovedError())
createErrorFromNameLookup.set(
  'AlreadyApproved',
  () => new AlreadyApprovedError()
)

/**
 * InvalidNumberOfAccounts: 'Wrong number of accounts provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidNumberOfAccountsError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'InvalidNumberOfAccounts'
  constructor() {
    super('Wrong number of accounts provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidNumberOfAccountsError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new InvalidNumberOfAccountsError())
createErrorFromNameLookup.set(
  'InvalidNumberOfAccounts',
  () => new InvalidNumberOfAccountsError()
)

/**
 * InvalidAccount: 'Invalid account provided'
 *
 * @category Errors
 * @category generated
 */
export class InvalidAccountError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'InvalidAccount'
  constructor() {
    super('Invalid account provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new InvalidAccountError())
createErrorFromNameLookup.set('InvalidAccount', () => new InvalidAccountError())

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
