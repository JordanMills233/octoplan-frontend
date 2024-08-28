"use client"

import SignUp from "@/Components/SignUp";
import Verify from "@/Components/Verify";
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