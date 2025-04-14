import { format } from "date-fns";

export const nextMonthTimestamp = (dateTimeStamp:number,period:number) => {
    const currentDate = new Date(dateTimeStamp * 1000);
    const nextMonthDate = new Date(currentDate);
    
    // Set the month to the next month
    nextMonthDate.setDate(currentDate.getDate());
    nextMonthDate.setMonth(currentDate.getMonth() + Number(period));
    console.log("get next date",nextMonthDate.getDate);
    console.log("get next month",nextMonthDate.getMonth());
    nextMonthDate.setFullYear(currentDate.getFullYear());
    
    // Return the timestamp
    return nextMonthDate.getTime()/1000;
};

export const extractInteger = (strData:any) =>{
    const match = strData.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
}

export const generateRandomString = (length: any) => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export const numberFormat = (nominal: any) => {
    if (nominal != null) {
      //return nominal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
       return nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }else{
        return nominal = 0;
    }
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd MMM yyyy, hh:mm:ss");
};

export interface ProductType {
    Seq: number;
    productId: string;
    productName: string;
    country: string;
    days: number;
    quota: number;
    sellingPrice: number;
    status: number;
}

export interface ProductList {
    Seq: number;
    ProductID: string;
    ProductName: string;
    Country: string;
    Days: number;
    Quota: number;
    SellingPrice: number;
    Status: number;
    Created: string;
}

export interface OrderListType {
    Seq: number;
    OrderID: string;
    OrderDate: string;
    Type: string;
    Status: number;
    CustomerName: string;
    ContactPhone: string;
    ContactWA: string;
    Email: string;
    AgentCode: string;
    AgentName: string;
    Product: string;
    Qty: number;
    TotalOrder: number;
    TotalCost: number;
}

export interface userList {
    userSeq: number;
    userName: string;
    userID: string;
    userPass: string;
    userLevel: string;
    userBlocked: string;
    userFailed: number;
    userLastLogin: string;
  }

  export interface partnerList {
    partnerSeq: number;
    PartnerID: string;
    PartnerName: string;
    PartnerPIC: string;
    PaymentType: string;
    TotalInvoice: number;
    BasePrice: number;
    TotalProfit: number;
    Created: string;
  }

  export interface agentList {
    Seq: number;
    AgentCode: string;
    AgentID: string;
    IDType: string;
    Name: string;
    Address: string;
    OfficePhone: string;
    ContactPerson: string;
    ContactPhone: string;
    Email: string;
    AccountManager: string;
    ContractNumber: string;
    PaymentNote: string;
    BankName: string;
    BankAccNo: string;
    BankAccName: string;
    Commission: string;
    JoinDate: string;
    Status: number;
    Note: string;
  }

export  interface companyType{
    company_id: number;
    company_name: string;
    company_address: string;
    company_phone: string;
    company_email: string;
    company_logo: string;
}  