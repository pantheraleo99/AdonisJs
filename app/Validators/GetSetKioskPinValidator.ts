import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'


export default class getSetKioskPinV extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
   super()
  }
    static newPostSchema = {schema:schema.create({
      empId:schema.number(),
      orgId:schema.number(),    
    }),messages:BaseValidator.messages
  }
 }
