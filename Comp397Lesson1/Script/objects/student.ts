module objects {

   export class Student extends Person {
        //Private instance variables+++++++++++++++++
        private _studentNo: Number
        //Constructor+++++++++++++++++
        constructor(name: string, StudentNo: number) {
            super(name);
            this._studentNo = StudentNo;
        }
        //Public Methods
        public studies(): void {
            console.log(this._studentNo + " Studies");
        }
    }

} 