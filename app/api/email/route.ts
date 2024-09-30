import { NextResponse } from "next/server";

import { Resend } from "resend"

import AdoptionSentEmail from "@/emails/adoption";
import ApplicationDataEmail from "@/emails/application-data";


const resend = new Resend("re_NNpH8imd_HCydv7Vn24aZqwmsQEDTeuja")

export async function POST(request: Request) {
    const {name, email, petName, petType, breed, contact, address, reason} = await request.json()

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Thank you for your Pawdoption Application!',
        react:  AdoptionSentEmail({
            name,
            petName,
            petType,
            breed,
        }),
        
        
      });

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Applicant Data',
        react:  ApplicationDataEmail({
            name,
            petName,
            petType,
            breed,
            contact,
            address,
            reason,
            email
        }),
      })

      return NextResponse.json({
        status: "OK"
    })
}



