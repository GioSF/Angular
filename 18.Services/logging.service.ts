//O objetivo é fornecer aqui uma mesma funcionalidade outsourced e centralizada em um serviço. Em aplicações maiores, seviços tornam o código mais leve, com reuso e sem código duplicado 

export class LoggingService{
    logStatusChange(status: string){
        console.log("Status mudado para: " + status);
    }
}