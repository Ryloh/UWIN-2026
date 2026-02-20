"use client";

import { useState } from "react";
import { SecurityGate } from "@/components/pitch/SecurityGate";
import { KSAPitch } from "@/components/pitch/ksa/KSAPitch";

export default function PitchPage() {
    const [accessGranted, setAccessGranted] = useState(false);

    return (
        <>
            <SecurityGate onUnlock={() => setAccessGranted(true)} />
            {accessGranted && <KSAPitch />}
        </>
    );
}
