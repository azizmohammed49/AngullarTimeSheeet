import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
    private baseapi = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getallTasks() {
        return this.http.get(this.baseapi + "/employee/gettask");
    }
}