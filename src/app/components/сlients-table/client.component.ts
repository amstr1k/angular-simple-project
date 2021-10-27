import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import ClientModel from '../../models/client.model';
import { Currency } from '../../enums/currency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients: ClientModel[];
  accountCurrency: Currency.RUB; // Наверное валюта должна приходить с сервера, пока будет зашита дефолтная

  constructor(
    private clientService: ClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.clientService.getClients().then(data => {
      this.clients = data
    });
  }

  handleClick(client: ClientModel) {
    this.router.navigate(['/client', client.Id]);
  }
}
