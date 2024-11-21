import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompteService} from '../../services/compte-service';
import { Observable } from 'rxjs';
import { DetailCompte, OperationDtos } from '../../models/compte.model';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.css'
})
export class CompteComponent implements OnInit {

  rechercheCompteFormGroup!:FormGroup
  operationFormGroup!:FormGroup
  pageCourant:number=0;
  taillePage:number=6;
  compteObservable!:DetailCompte;
  type!:OperationDtos;

  constructor(
      private fb:FormBuilder,
      private compteServie:CompteService,

  ){}

  ngOnInit(): void {
     this. rechercheCompteFormGroup=this.fb.group({
      compteId:this.fb.control("",Validators.required)
     });

     this.operationFormGroup=this.fb.group({
       typeOperation:this.fb.control(null),
       montant:this.fb.control(0),
       description:this.fb.control(""),
       destination:this.fb.control(null)

     })
  }

  HandleRechercheCompte() {
     let compteId=this.rechercheCompteFormGroup.value.compteId;
   this.compteServie.getCompte(compteId,this.pageCourant,this.taillePage).subscribe({
    next:(data)=>{
         this.compteObservable=data;
        // console.log(this.compteObservable)
         console.log(this.compteObservable.operationDtos)
    },
    error(err) {
        console.log(err)}
   })}

   gotoPage(page: number){
   this.pageCourant=page;
   this.HandleRechercheCompte()
   }

   handleCompteOperation(){
    let compteId:string=this.operationFormGroup.value.compteId;
    let typeOperation:string=this.operationFormGroup.value.typeOperation;
    let montant:number=this.operationFormGroup.value.montant;
    let description:string =this.operationFormGroup.value.descriptionl;
    let destination:string =this.operationFormGroup.value.destination;

    if(typeOperation=='DEBIT'){
       this.compteServie.debit(compteId,montant,description).subscribe({
        next:(data)=>{
             alert("compte debite avec succes")
             this.HandleRechercheCompte();
        },
        error:(err)=>{
            console.log(err)
        }
       })

    }else if(typeOperation=='CREDIT'){
      this.compteServie.credit(compteId,montant,description).subscribe({
        next:(data)=>{
          alert("compte credite avec succes")
          this.HandleRechercheCompte();
        },
        error:(err)=>{
            console.log(err)
        }
      });

    }else if(typeOperation=='TRANSFERT'){
      this.compteServie.transfert(compteId,destination,montant).subscribe({
        next:(data)=>{
          alert("transfert effectuer avec succes")
          this.HandleRechercheCompte();
        },
        error:(err)=>{
            console.log(err)
        }
      })

    }

   }

}
