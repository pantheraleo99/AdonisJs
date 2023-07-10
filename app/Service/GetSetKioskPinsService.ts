import Database from "@ioc:Adonis/Lucid/Database";

export default class Service_KioskPin {
 static async ServiceF(Data){

   const result: any = {}
   
   const query1 = await Database
   .from('UserMaster')
   .select('kioskPin')
   .where('EmployeeId',Data.empId) 
   .andWhere('OrganizationId',Data.orgId)
   
   query1.forEach((row: any)=>{
     result.kioskPin = row.kioskPin
     result.cuperButton = result.kioskPin === '' ? 0 : 1
   })

    const data = [result]
    return data

    }
}