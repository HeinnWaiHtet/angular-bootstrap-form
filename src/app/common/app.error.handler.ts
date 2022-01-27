import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error :any){
        alert('Unhandle Error Exception');
        console.log(error);
    }
}