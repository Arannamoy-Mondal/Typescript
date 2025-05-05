{

    // private modifiers can not access in child class
    // protected modifiers can be access in child class

    class BankAccount{
        protected total_balance:number;
        constructor(public readonly ac_no:string,private customer_name:string,private bank_balance:number){
            this.ac_no=ac_no;
            this.customer_name=customer_name;
            this.bank_balance=bank_balance;
            this.total_balance=bank_balance;
        }

        addDeposit(balance:number){
            this.bank_balance+=balance;
            this.total_balance=this.bank_balance;
        }
    }


    class BankAccount1 extends BankAccount{
        test(){
            this.total_balance;
        }
    }
    const ac1=new BankAccount("01","Hello",0);
    ac1.addDeposit(500)
    ac1.addDeposit(600)
    console.log(ac1,ac1.ac_no);
}