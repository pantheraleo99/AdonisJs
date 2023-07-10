import Database from "@ioc:Adonis/Lucid/Database";

export default class setQrKioskPin {
 static async Service_setQrKioskPin(Data){
    
const result: any = {};
  
  const query = await Database
  .from("UserMaster")
  .select("*")
  .where("EmployeeId",Data.empid)
  .andWhere("OrganizationId",Data.orgid)

if (query.length > 0) {

  const query2 = await Database
  .from("UserMaster")
  .select("*")
  .where("EmployeeId",Data.empid)
  .andWhere("OrganizationId",Data.orgid)
  .update({RoleId:Data.qRKioskPin})

  result ['response'] = 1;
} else {
  result['response'] = 0;
}

return result;
    }
}