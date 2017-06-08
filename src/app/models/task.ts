import { Todos } from './todo';

export class Tasks {
    id: number;
    title: string;
    constructor(values: Object={}){
        Object.assign(this, values);
    }
}