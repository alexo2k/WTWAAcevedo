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

export enum ExecutionType {
    Simple = 0,
    Complex = 1
}