import {AppBar} from "@/components/custom/app-bar.tsx";
import {Instagram, LucideFacebook, Twitter, Youtube} from "lucide-react";
import {ConnectSocialMediaCard} from "@/components/custom/connect-social-media-card.tsx";

function App() {

    return (
        <div className="flex w-screen h-screen flex-col ">
            <AppBar />

            <div className="grow mt-8 mx-6">
                <h1 className="text-xl md:text-2xl font-semibold text-foreground ">
                    Início
                </h1>

            <div className={"grid grid-cols-auto-fill-72 gap-4 my-6"}>
                <ConnectSocialMediaCard label={"Facebook"} icon={LucideFacebook}/>
                <ConnectSocialMediaCard label={"Instagram"} icon={Instagram}/>
                <ConnectSocialMediaCard label={"Twitter"} icon={Twitter}/>
                <ConnectSocialMediaCard label={"YouTube"} icon={Youtube}/>
                <ConnectSocialMediaCard label={"Facebook"} icon={LucideFacebook}/>
                <ConnectSocialMediaCard label={"Instagram"} icon={Instagram}/>
                <ConnectSocialMediaCard label={"Twitter"} icon={Twitter}/>
                <ConnectSocialMediaCard label={"YouTube"} icon={Youtube}/>

            </div>

            </div>

            <div className="flex border-t-2 h-8 justify-center items-center">
                <h3>SocialHub</h3>
            </div>
        </div>
    )
}

export default App
