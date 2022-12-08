export class ActuarianModel {

    private _mainLimit : number;
    public get mainLimit() : number {
        return this._mainLimit;
    }
    public set mainLimit(v : number) {
        this._mainLimit = v;
    }

    private _mainRetention : number;
    public get mainRetention() : number {
        return this._mainRetention;
    }
    public set mainRetention(v : number) {
        this._mainRetention = v;
    }

    private _execution : ExecutionType;
    public get execution() : ExecutionType {
        return this._execution;
    }
    public set execution(v : ExecutionType) {
        this._execution = v;
    }

    constructor(pMainLimit: number, pMainRetention: number, pExecution: ExecutionType) {
        this._mainLimit = pMainLimit;
        this._mainRetention = pMainRetention;
        this._execution = pExecution;
    }

}

export class ActuarianResult {

  private _referenceDate : Date;
  public get referenceDate() : Date {
    return this._referenceDate;
  }
  public set referenceDate(v : Date) {
    this._referenceDate = v;
  }


  private _benchmark1 : number;
  public get benchmark1() : number {
    return this._benchmark1;
  }
  public set benchmark1(v : number) {
    this._benchmark1 = v;
  }


  private _benchmark2 : number;
  public get benchmark2() : number {
    return this._benchmark2;
  }
  public set benchmark2(v : number) {
    this._benchmark2 = v;
  }

  constructor(pReferenceDate: Date, pBenchmark1: number, pBenchmark2: number) {
    this._referenceDate = pReferenceDate;
    this._benchmark1 = pBenchmark1;
    this._benchmark2 = pBenchmark2;
  }

}

export enum ExecutionType {
    Simple = 'Simple',
    Complex = 'Complex'
}
