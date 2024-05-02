import {ModeToggle} from "@/components/ui/mode-toggle.tsx";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {MenuIcon, SettingsIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export function AppBar() {
    return (
        <div className="flex w-screen h-12 p-2 border-b-2 items-center">
            <Sheet>
                <SheetTrigger className="flex gap-2">
                    <MenuIcon className="self-center"/>
                    <h1 className="text-xl bold">
                        SocialHub
                    </h1>
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="flex flex-col">
                    <SheetHeader>
                        <SheetTitle>
                            SocialHub
                        </SheetTitle>
                    </SheetHeader>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/Rigolao.png" alt="@Rigolao"/>
                            <AvatarFallback>Rigolão</AvatarFallback>
                        </Avatar>
                        <h3>Matheus Rigolão</h3>
                        <Button
                            variant="ghost"
                            className="ml-auto">
                            <SettingsIcon />
                        </Button>
                    </div>
                    <SheetFooter className="mt-auto">
                        <ModeToggle/>
                    </SheetFooter>
                </SheetContent>

            </Sheet>

        </div>
    )
}