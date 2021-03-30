export class Booking {
    ID !: number;
    SourceAddress1 !: string
    SourceAddress2 !: string
    SourceCity  !: string
    SourcePincode  !: string
    SourceState !: string
    SourceCountry !: string
    DocumentName !: string
    DocumentNumber!: string
    DestinationCustomerName !: string;
    DestinationAddress1 !: string
    DestinationAddress2 !: string
    DestinationCity !: string
    DestinationPincode !: string
    DestinationState !: string
    DestinationCountry !: string
    Packagename !:string;
    Quantity !:number;
    Width  !:number;
    Height !:number;
    EmailId !:string;
    CustomerName !:string;
    CompanyName !:string;
    Lenght !:number;
    Weight  !:number;
    Email !:string;
    ShipmentId !:string;
    CargoLocation!:string;
    CargoStatus !:string;
    Amount !: number;
    Phone !:string;
    CreatedDate !:string;
    UpdatedDate !: string;
    TransactionId !: string;
    PaymentType !: string;
}
