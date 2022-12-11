import { Mpesa } from "../assets/Mpesa"

export class Payment{
    protected amount:number


    constructor(paymentMode:number){
        this.amount = 0
    }

    public mpesa(amount:number,mpesaKey:string ) {
        return 
       
    }

    public paypal(amount:number){
        return

    }

    public stripe(amount:number){
        return
    }

}