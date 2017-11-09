
export class TurmaAluno {

    public codT: string
    public codA: number
    public n1: number = null
    public n2: number = null
    public n3: number = null
    public n4: number = null
    public freq: number = null
    public media: number = null

    constructor(t: string, a: number){
        this.codT = t;
        this.codA = a;
    }


    calcMedia():number{

        return 0;
    }

    situacao():number{
        
        return 0;
    }
}
