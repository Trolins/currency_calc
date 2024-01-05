export class CurrentData{
    public date!: string
    public base!: string
    public rates!: Rates
  }

export class Rates {
  public UAH!: number
  public EUR!: number
  public USD!: number
  [index: string]: number;
}

export class Exchange {
  public type!: string
  public value!: number
}
export class HistoryForm {
  public amount!: number
  public fromCurrency!: string
  public convertedAmount!: number
  public toCurrency!: string
}