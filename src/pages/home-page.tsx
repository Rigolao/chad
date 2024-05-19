import {ConnectSocialMediaCard} from "@/components/custom/connect-social-media-card.tsx";
import {Instagram, LucideFacebook, Twitter, Youtube} from "lucide-react";

export function HomePage() {

    return (
        <div className="grow mt-8 mx-6">
            <h1 className="text-xl md:text-2xl font-semibold text-foreground ">
                Início
            </h1>

            <div className={"grid grid-cols-auto-fill-72 gap-4 my-6"}>
                <ConnectSocialMediaCard label={"Facebook"} icon={LucideFacebook}/>
                <ConnectSocialMediaCard label={"Instagram"} icon={Instagram}/>
                <ConnectSocialMediaCard label={"Twitter"} icon={Twitter}/>
                <ConnectSocialMediaCard label={"YouTube"} icon={Youtube}/>

            </div>
        </div>
    );
}