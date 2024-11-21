import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';
import { environnemt } from '../../environnement/environnement';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http:HttpClient) {}
  
  //service qui permet de recuperer des client;
 public getClient():Observable<Client[]>{
  return this.http.get<Client[]>(environnemt.backendHost+"/api/clients");

 }

 public RechercheClient(mc:string):Observable<Client[]>{
    return this.http.get<Client[]>(environnemt.backendHost+"/api/clients/search?keyword="+mc);
 }

 public EnregistreClient(client:Client):Observable<Client>{
    return this.http.post<Client>(environnemt.backendHost+"/api/clients",client);
 }

public supprimerClient(id:number){
   return this.http.delete(environnemt.backendHost+"/api/clients/"+id);
}
}
 