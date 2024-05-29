"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Label } from "@/components/ui/label"
import { Toaster, toast } from 'sonner'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from './ui/button';

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
        <div className='justify-center  pb-32'>

            <form ref={form} onSubmit={sendEmail}>

                <Label htmlFor="user_name">Name</Label>
                <Input type="text" name="user_name" />
                <Label htmlFor="user_email">Email</Label>
                <Input type="email" name="user_email" />
                <Label htmlFor="message">Message</Label>
                <Textarea name="message" />
                <Button type="submit" value="Send" >Send</Button>
            </form>

        </div>
    );
};
