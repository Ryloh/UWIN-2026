"use client";

import { useState } from "react";
import { SecurityGate } from "@/components/pitch/SecurityGate";
import { CinematicExperience } from "@/components/pitch/CinematicExperience";

export default function PitchPage() {
    const [accessGranted, setAccessGranted] = useState(false);

    return (
        <>
            <SecurityGate onUnlock={() => setAccessGranted(true)} />
            {accessGranted && <CinematicExperience />}
        </>
    );
}
