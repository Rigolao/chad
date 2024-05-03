import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ElementType} from "react";

interface ConnectSocialMediaCardProps {
    label: string
    icon: ElementType
}

export function ConnectSocialMediaCard({label, icon: Icon}: ConnectSocialMediaCardProps) {
    return (
        <Card className="flex flex-col w-full sm:max-w-72 items-center text-center justify-center pt-6">
            <CardContent className="flex flex-col items-center gap-3">
                <Icon className="h-[3rem] w-[3rem] md:size-8"/>
                {label}
                <Button variant="default">
                    Conectar
                </Button>
            </CardContent>
        </Card>
    )
}