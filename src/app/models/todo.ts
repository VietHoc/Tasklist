export class Todos {

    id: number;
    title: string;
    complete: boolean = false;
    task_id: number;
    constructor(values: Object ={}) {
        Object.assign(this, values);
    }
}