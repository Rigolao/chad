import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ElementType} from "react";

interface TooltipButtonProps {
    label?: string
    icon?: ElementType
    tooltip: string
}

export function TooltipButton({label, icon: Icon, tooltip}: TooltipButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        size="icon"
                        variant="outline"
                        className="w-auto p-2 flex gap-2 font-semibold">
                        {Icon && <Icon className="h-[1.2rem] w-[1.2rem] md:size-5"/>}
                        {label}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    {tooltip}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}