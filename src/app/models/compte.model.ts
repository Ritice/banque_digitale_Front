export interface DetailCompte{
    compteId:string;
    solde:number;
    pageCourante:number;
    totalPages:number;
    taillePage:number;
    operationDtos :OperationDtos[];
}

    export interface OperationDtos{

        id:number;
        dateOperation:Date;
        montant:number;
        typeOperation:string;
        description:string;
    }
