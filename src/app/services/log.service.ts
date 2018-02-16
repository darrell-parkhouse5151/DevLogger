import {Injectable} from '@angular/core';
import {Log} from '../models/log';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";


@Injectable()
export class LogService {
    logs: Log[];

    /**----- create the observables -----**/
    private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
    public selectedLog = this.logSource.asObservable();

    private stateSource = new BehaviorSubject<boolean>(true);
    public stateClear = this.stateSource.asObservable();

    constructor() {
        this.logs = [];
    }

    getLogs(): Observable<Log[]> {
        if (localStorage.getItem('logs') === null) {
            this.logs = [];
        } else {
            this.logs = JSON.parse(localStorage.getItem('logs'));
        }

        return of(this.logs.sort((a, b) => {
            return b.date - a.date;
        }));
    }

    setFormLog(log: Log) {
        this.logSource.next(log);
    }

    addLog(log: Log) {
        this.logs.unshift(log);

        localStorage.setItem('logs', JSON.stringify(this.logs));
    }

    updateLog(log: Log) {
        this.logs.forEach((curr, index) => {
            if (log.id === curr.id) {
                this.logs.splice(index, 1);
            }
        });
    }

    deleteLog(log:Log) {
        this.logs.forEach((curr, index) => {
            if (log.id === curr.id) {
                this.logs.splice(index, 1);
            }
        });

        localStorage.setItem('logs', JSON.stringify(this.logs));
    }

    clearState() {
        this.stateSource.next(true);
    }
}
