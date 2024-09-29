import { NextResponse } from "next/server";

import { Resend } from "resend"

import AdoptionSentEmail from "@/emails/adoption";


const resend = new Resend("re_NNpH8imd_HCydv7Vn24aZqwmsQEDTeuja")

export async function POST(request: Request) {
    const {name, email, petName, petType, breed} = await request.json()
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

      return NextResponse.json({
        status: "OK"
    })
}

