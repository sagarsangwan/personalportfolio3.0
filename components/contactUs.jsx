"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Label } from "@/components/ui/label"
import { toast } from 'sonner'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        console.log(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID)

        emailjs
            .sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID, process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID, form.current, {
                publicKey: 'ro-YMeX327m4P67MA',
            })
            .then(
                () => {
                    toast.success('message has been sent successfully')
                    form.current.reset();
                    // reset the form 

                },
                (error) => {
                    toast.error('message failed to send', error.text)

                },
            );
    };
    return (
        <div className=" flex justify-center justify-self-center justify-items-center mx-auto ">
            <div>
                <Card className="max-w-xl">
                    <CardHeader>
                        <CardTitle className="flex justify-center ">
                            <Button variant='secondary' size='sm' className='px-4'>Contact Me</Button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form ref={form} onSubmit={sendEmail}>

                            <Label htmlFor="from_name">Name</Label>
                            <Input className="mb-4" type="text" name="from_name" />


                            <Label htmlFor="user_email">Email</Label>
                            <Input className="mb-4" type="email" name="user_email" />


                            <Label htmlFor="message">Message</Label>
                            <Textarea className="mb-4" name="message" />


                            <Button type="submit" value="Send" >Send</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
