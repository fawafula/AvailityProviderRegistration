import { IProvider } from '../intrefaces/IProvider';
export class Provider implements IProvider {
   
    constructor(
        public firstName: string, 
        public lastName: string,
        public npiNumber: string,
        public businessAddress: string,
        public email: string,
        public phoneNumber: string) {
        
    }

}