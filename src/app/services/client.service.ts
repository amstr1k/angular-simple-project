import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ClientModel from '../models/client.model';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<any>('assets/clients.json')
      .toPromise()
      .then(response => {
        return <ClientModel[]>response;
      })
  }

  getClient(id: number) {
    return this.getClients().then(response => {
      return response.find(client => client.Id === id);
    })
  }
}
