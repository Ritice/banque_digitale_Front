import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environnemt } from '../../environnement/environnement';
import { Observable } from 'rxjs';
import { DetailCompte } from '../models/compte.model';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor( 
    private http:HttpClient) { }


  public getCompte(compteId:string, page:number,taille:number):Observable<DetailCompte>{
    return this.http.get<DetailCompte>(environnemt.backendHost+"/api/comptes/"+compteId+"/pageOperation?page="+page+"&taille="+taille);

  }

  //service qui permet de debiter un compte
  public debit(compteId:string, montant:number,description:string):Observable<any>{
    let data={compteId:compteId,montant:montant,description:description}
    return this.http.post<any>(environnemt.backendHost+"/api/comptes/debit",{data});
}


public credit(compteId:string, montant:number,description:string):Observable<any>{
  let data={compteId:compteId,montant:montant,description:description}
  return this.http.post<any>(environnemt.backendHost+"/api/comptes/credit",{data});

}


public transfert(compteSource:string, compteDestination:string,montant:number):Observable<any>{
  let data={ compteSource:compteSource,compteDestination:compteDestination,montant:montant}
  return this.http.post<any>(environnemt.backendHost+"/api/comptes/transfert", {data});

}}
