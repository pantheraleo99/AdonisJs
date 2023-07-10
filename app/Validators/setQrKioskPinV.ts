import { schema } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'

export default class setQrKioskPinV extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
   super()
  }
    static newPostSchema = {schema:schema.create({
      empid:schema.number(),
      orgid:schema.number(),
      qRKioskPin:schema.number()
    
    }),messages:BaseValidator.messages
  }
 }