module objects {
   export class Person {
        //Private instance variables+++++++++++++++++
        protected _name: string;
        //Constructor+++++++++++++++++
        constructor(name: string) {
            this._name = name;
        }
        //public methods
        public speaks(): void {
            console.log(this._name + " Says Hello.");
        }
    }
}