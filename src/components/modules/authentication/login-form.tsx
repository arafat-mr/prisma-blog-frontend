'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import {useForm}from '@tanstack/react-form'
import { toast } from "sonner"
import * as z from 'zod'

const formSchema = z.object({
 
  email :z.email(),
  password :z.string()
})
export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {

  const form = useForm({
    defaultValues : {
      
      email:'',
      password :'',
    },
    validators:{
   onSubmit :formSchema
    },
    onSubmit :async ({value})=>{
       
      const toastId= toast.loading('Logging in')
    try {
       const {data,error}= await authClient.signIn.email({...value,callbackURL: 'http://localhost:3000'})
       

       if(error){
        toast.error(error.message,{id :toastId})
        return
       }
       toast.success('Login successfully',{id:toastId})
       
    } catch (error) {
      toast.error('Error while logging in',{id:toastId})
    }
      
    }
  })

  const handleGoogleLogin = async()=>{
  const data= await authClient.signIn.social({
    provider:'google',
    callbackURL:'http://localhost:3000'
  })
  console.log(data);
  
}
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>

        <form 
        id="register-form"
        onSubmit={(e)=>{
     e.preventDefault();
     form.handleSubmit()
        }}>
         
   <FieldGroup>
   
    <form.Field 
    name="email"
    children={(field)=> {
       const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
      return (
       <Field data-invalid={isInvalid}>
         <FieldLabel htmlFor={field.name}> Email
           </FieldLabel>
            <Input 
            type="email"
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e)=>field.handleChange(e.target.value)}
            />
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
       </Field>
      )
    }}
    
    />
    <form.Field 
    name="password"
    children={(field)=> {
       const isInvalid =
          field.state.meta.isTouched && !field.state.meta.isValid
      return (
       <Field data-invalid={isInvalid}>
         <FieldLabel htmlFor={field.name}> Password
           </FieldLabel>
            <Input 
            type="password"
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e)=>field.handleChange(e.target.value)}
            />
            {isInvalid && <FieldError errors={field.state.meta.errors} />}
       </Field>
      )
    }}
    
    />
   </FieldGroup>

        </form>
       
      </CardContent>
      <CardFooter className="flex flex-col justify-end gap-5">
 <Button form="register-form" type="submit" className="w-full">Login</Button>
  <Button onClick={()=> handleGoogleLogin()} variant="outline" type="button" className="w-full">
                   Login with Google
                 </Button>
        </CardFooter>
    </Card>
  )
}
