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

export const generateTrxId = () => {
    const date = new Date();
    return format(date, "yyyyMMddhhmmss");
};

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

export const currentDate = () => {
    const date = new Date();
    return format(date, "yyyy-MM-dd hh:mm:ss");
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
    seq: number;
    package_id: string;
    package_name: string;
    country: string;
    days: number;
    quota: number | string;
    selling_price: number;
    status: string;
}

export interface PartnerProductList {
    seq: number;
    package_id: string;
    package_name: string;
    country: string;
    days: number;
    quota: number | string;
    selling_price: number;
    status: string;
    cobrand_id: string;
}


export interface InventoryList {
    seq: number;
    iccid: string;
    cobrand_id: string;
    agent_code: string;
    in_date: string;
    out_date: string;
    status: string;
    order_id: string;
    country_id: string;
    package_id: string;
    selling_price: number;
    sim_type: string;
}

export interface InventoryUpdate {
    out_date: string;
    status: string;
    order_id: string;
    country_id: string;
    package_id: string;
    selling_price: number;
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
    seq: number;
    user_name: string;
    session_name: string;
    password: string;
    session_level: string;
    blocked: string;
    failed: number;
    last_login_time: string;
 }

 export interface userResetPwd {
    password: string;
 }

  export interface partnerList {
    seq: number;
    master_id: string;
    cobrand_id: string;
    cobrand_name: string;
    pic: string;
    deposit: number;
    ar: number;
    sms_internal_reply: string;
    payment_type: string;
    total_invoice: number;
    total_base_price: number;
    profit: number;
  }


  export interface agentList {
    seq: number;
    agent_code: string;
    agent_id: string;
    id_type: string;
    name: string;
    address: string;
    kelurahan: string;
    kecamatan: string;
    city: string;
    province: string;
    office_phone: string;
    contact_person: string;
    contact_phone: string;
    email: string;
    commission_pct: number;
    join_date: string;
    status: string;
    note: string;
    account_manager: string;
    contract_no: string;
    payment_note: string;
    bank_name: string;
    bank_acc_no: string;
    bank_acc_name: string;
    cobrand_id: string;
  }

  export interface levelList {
    seq: number;
    level_id: string;
    level_name: string;
  }

export  interface companyType{
    company_id: number;
    company_name: string;
    company_address: string;
    company_phone: string;
    company_email: string;
    company_logo: string;
}  

export interface orderList {
    seq: number;
    order_id: string;
    order_date: string;
    order_type: string;
    order_status: string;
    order_customer_name: string;
    order_contact_phone: string;
    order_contact_wa: string;
    order_contact_email: string;
    order_agent_code: string;
    order_agent_name: string;
    order_product: string;
    order_country_code: string;
    order_fup: string;
    order_quota: string;
    order_days: number;
    order_ccid: string;
    order_qty: number;
    order_product_price: number;
    order_product_total_price: number;
    package_name: string;
}

export interface ordersList {
    order_id: string;
    order_date: string;
    product_type: string;
    order_status: string;
    customer_name: string;
    contact_phone: string;
    contact_wa: string;
    email_address: string;
    agent_code: string;
    agent_name: string;
    country_name: string;
    order_quantity: number;
    total_order: number;
    total_cost: number;
    order_product: string;
    order_country_code: string;
    order_fup: string;
    order_quota: string;
    order_days: number;
    order_ccid: string;
    package_id: string;
    package_name: string;
}

export interface uploadDetail{
    seq: never;
    iccid: string;
    cobrand_id: string;
    agent_code: string;
    in_date: string;
    out_date: string;
    status: string;
    order_id: string;
    country_id: string;
    package_id: string;
    selling_price: number;
    sim_type: string;
}

export interface orderEventList {
    seq: number;
    order_id: string;
    event_name: string;
    event_date: string;
    username: string;
}


export interface invSummaryAgent {
    cobrand_id: string;
    agent_code: string;
    sim_type: string;
    status: string;
    quantity: number;
}