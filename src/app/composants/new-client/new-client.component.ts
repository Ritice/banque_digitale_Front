import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrl: './new-client.component.css'
})
export class NewClientComponent implements OnInit{

  addClientFormGroup!:FormGroup;
 
  constructor(
        private fb:FormBuilder,
        private clientService:ClientService,
        private router:Router
  ){}

  ngOnInit(): void {
      this.addClientFormGroup=this.fb.group({
         nom:this.fb.control("", [Validators.required]),
         email:this.fb.control("",[Validators.required, Validators.email])
      })
  }

  handleEnregistreClient() {
          let client:Client=this.addClientFormGroup.value;
          this.clientService.EnregistreClient(client).subscribe({
            next:(data)=>{
              alert("Client enregistere avec success")
              this.addClientFormGroup.reset();
              this.router.navigateByUrl("/clients")
            },error:(err)=>{
              console.log(err)
            }
          })

    }
    

}
 