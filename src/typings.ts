export interface Tag {
    open: (state: State) => boolean;
    read: (state: State, symbolCode: number) => any;
}

export interface State {
    pos: number;
    statementIndex: number;
    tag?: Tag;
    data: Uint8Array|Buffer;
    statements: Statement[];
    [key: string]: any;
}

export interface BalanceInfo {
    isCredit: boolean;
    date: string;
    currency: string;
    value: number;
}

export interface Transaction {
    typeCode: string;
    isCredit: boolean;
    currency: string;
    number: string;
    description: string;
    amount: number;
    valueDate: string;
    entryDate: string;
}

export interface Statement {
    referenceNumber: string;
    relatedReferenceNumber: string;
    accountId: string;
    number: string;
    openingBalance: BalanceInfo;
    closingBalance: BalanceInfo;
    transactions: Transaction[];
}