import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseValidator from './BaseValidator'
import  { rules } from '@ioc:Adonis/Core/Validator'


export default class getSetKioskPinV extends BaseValidator{
  constructor(protected ctx: HttpContextContract) {
   super()
  }
    static newPostSchema = {schema:schema.create({
      empId:schema.number(),
      orgId:schema.number(),
    
    })
 }
 }
