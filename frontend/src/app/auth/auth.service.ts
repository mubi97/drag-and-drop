// import { PatientInfo } from './../models/patient-info';
// import { VisitInfo } from './../models/add-visit';
// import { ServiceInfo } from './../models/add-service';
// import { DialogDataScanner } from './../models/dialog-data-qr';
import { TokenStorageService } from './token-storage.service';
// import { SlotInfo } from './../models/slots-info';
// import { StaffInfo } from './../models/staff-info';
// import { EventFunctions } from './../models/event-details-function';
// import { EventDetails } from './../models/event-details-info';
// import { PaymentInfo } from './../models/payment-info';
// import { AddEventInfo } from '../models/add-event-info';
import { LoginInfo } from './../models/login-info';
// import { User } from './../models/user';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtResponse } from './jwt-response';
// import { PackageInfo } from '../models/add-package';
// import { DoctorInfo } from '../models/add-doctor';
// import { AddAdminInfo } from '../models/add-admin-info';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://bitesbraces.store'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://bitesbraces.store/api';
  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorageService
    ) {}

  public attemptAuth(credentials: LoginInfo): Observable<JwtResponse> {
    const httpOptionsSaved = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
          })
        };
    return this.http.post<JwtResponse>(`${this.baseUrl}/auth/signin`, credentials, httpOptionsSaved);
  }

  // public getAllPatients(): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.get<string>(`${this.baseUrl}/patients/getAll`, httpOptionsSaved);
  // }
  // public getPatientWithVisits(info: PatientInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/patients/get`, info, httpOptionsSaved);
  // }
  // public getAllDoctors(): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.get<string>(`${this.baseUrl}/doctor/getAll`, httpOptionsSaved);
  // }
  // public getAvailabilities(): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.get<string>(`${this.baseUrl}/availabilities/getAll`, httpOptionsSaved);
  // }
  // public getServices(): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.get<string>(`${this.baseUrl}/services/getAll`, httpOptionsSaved);
  // }
  // public getPackages(): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.get<string>(`${this.baseUrl}/packages/getAll`, httpOptionsSaved);
  // }
  // public assignQrCode(data: DialogDataScanner): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/patients/assignQrCode`, data, httpOptionsSaved);
  // }
  // public addService(data: ServiceInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/services/add`, data, httpOptionsSaved);
  // }
  // public deleteDoctor(data: DoctorInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/doctor/delete`, data, httpOptionsSaved);
  // }
  // public addDoctor(data: DoctorInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/doctor/add`, data, httpOptionsSaved);
  // }
  // public editService(data: ServiceInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };

  //   return this.http.post<string>(`${this.baseUrl}/services/edit`, data, httpOptionsSaved);
  // }
  // public editPackage(data: PackageInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };

  //   return this.http.post<string>(`${this.baseUrl}/packages/edit`, data, httpOptionsSaved);
  // }
  // public deleteService(data: ServiceInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/services/delete`, data, httpOptionsSaved);
  // }
  // public deletePackage(data: PackageInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/packages/delete`, data, httpOptionsSaved);
  // }
  // public addPackage(data: PackageInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/packages/add`, data, httpOptionsSaved);
  // }
  // public addVisit(data: VisitInfo): Observable<string> {
  //   const httpOptionsSaved = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Access-Control-Allow-Origin': 'http://bitesbraces.store/',
  //       'x-access-token': this.tokenStorage.getToken()
  //     })
  //   };
  //   return this.http.post<string>(`${this.baseUrl}/visits/add`, data, httpOptionsSaved);
  // }
}
