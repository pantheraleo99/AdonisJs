import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import getSetKioskPinV from 'App/Validators/GetSetKioskPinValidator';
import Service_KioskPin from 'App/Service/GetSetKioskPinsService';

export default class UserController {
  public async getSetKioskPin({ request, response }: HttpContextContract) {

    const data:any = await request.validate(getSetKioskPinV.newPostSchema)
    const result = await Service_KioskPin.ServiceF(data)
    return response.json(result)

   }
  }  


