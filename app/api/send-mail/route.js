import { EmailTemplate } from '@/app/_components/EmailTemplate';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req, res) {
      const {name,email,phone,plan}  =await req.json()
      try {
            const {data,error} =await resend.emails.send({
                  from:"onboarding@resend.dev",
                  to:['your-email-here'],
                  subject:"New Customer Order",
                  react:EmailTemplate({"name":name,"email":email,"phone":phone,"plan":plan})
            })
            if(error){
                  return Response.json({
                        "status":400,
                        "error":error
                  })
            }
            return Response.json(data,{status:200})

      }catch(err){
            return Response.json({"error":err},{status:500})
      }
}