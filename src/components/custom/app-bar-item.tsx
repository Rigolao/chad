import {Button} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";
import {ElementType} from "react";

interface AppBarItemProps {
    label: string
    icon: ElementType
    selected?: boolean
}

export function AppBarItem({label, icon: Icon, selected}: AppBarItemProps) {
    return (
        <>
            <Button
                className={cn("flex items-center justify-start text-left text-lg md:text-xl font-semibold text-foreground gap-3", selected && "bg-accent text-accent-foreground")}
                variant="ghost">
                <Icon className="h-[1.2rem] w-[1.2rem] md:size-5"/>
                {label}
            </Button>
        </>
    )
}