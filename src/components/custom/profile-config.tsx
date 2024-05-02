import * as React from "react";
import {DropdownMenuCheckboxItemProps} from "@radix-ui/react-dropdown-menu";
import {
    DropdownMenu, DropdownMenuCheckboxItem,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {LockIcon, SettingsIcon} from "lucide-react";
import {ExitIcon, PersonIcon} from "@radix-ui/react-icons";
import {TooltipButton} from "@/components/custom/tooltip-button.tsx";

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function ProfileConfig() {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <TooltipButton tooltip={"Configurações"} icon={SettingsIcon}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Configurações</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <PersonIcon className="w-4 h-4 mr-2"/>
                    Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LockIcon className="w-4 h-4 mr-2"/>
                    Alterar senha
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}