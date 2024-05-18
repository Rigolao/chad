import {Card, CardContent} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ElementType} from "react";
import {InfoIcon} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";

interface ConnectSocialMediaCardProps {
    label: string
    icon: ElementType
}

export function ConnectSocialMediaCard({label, icon: Icon}: ConnectSocialMediaCardProps) {
    return (
        <Card className="flex flex-col w-full min-w-72 items-center text-center justify-center pt-6">
            <CardContent className="flex w-full flex-col items-center gap-2">
                <div className="w-max self-end">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <InfoIcon className="h-5 w-5"/>
                            </TooltipTrigger>
                            <TooltipContent>
                                Informações sobre a conexão
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <Icon className="h-[3rem] w-[3rem] md:size-8"/>
                {label}
                <Button variant="default">
                    Conectar
                </Button>
            </CardContent>
        </Card>
    )
}