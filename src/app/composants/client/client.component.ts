import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client-service';
import { catchError, Observable, throwError } from 'rxjs';
import { Client } from '../../models/client.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})

export class ClientComponent implements OnInit {

  clients!:Array<Client>;
  messageErreur!:string;
  recherFormGroup:FormGroup | undefined ;

  constructor(
       private clientService:ClientService,
       private fb :FormBuilder,
  ){}
  ngOnInit(): void {
    this.recherFormGroup=this.fb.group({
      motCle:this.fb.control("")
    })

    this.handleRechercheClient()
  
  }
 
  //methode qui se connecte au service pour rechercher un client part son nom
  handleRechercheClient() {
      let mc=this.recherFormGroup?.value.motCle; 
     this.clientService.RechercheClient(mc).subscribe({
      next:(data)=>{
          this.clients=data;
      },error:(err)=> {
          this.messageErreur=err;
      },      
     })  
    }
  
    handleSupprimer(c:Client){
      let conf=confirm("vous etes sur le point  de supprimer ce client ?");
      if(!conf) return;
      this.clientService.supprimerClient(c.id).subscribe({
        next:(value)=>{
            this.handleRechercheClient();
        },error:(err)=>{
          console.log(err); 
        },
      })

    }
  }
