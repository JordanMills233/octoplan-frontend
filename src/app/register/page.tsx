"use client"

import SignUp from "@/components/SignUp";
import Verify from "@/components/Verify";
import {useState} from "react";

export default function SignUpPage() {

    const [inVerfication, setInVerification ] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");

    const handleVerification = (email : string) => {
        setInVerification(true);
        setEmail(email)
    }

    return (
        inVerfication? <Verify email = {email}/>: <SignUp onVerificationNeeded={handleVerification}/>
    );
}