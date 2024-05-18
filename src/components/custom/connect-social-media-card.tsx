import { Card, CardContent } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ElementType, useEffect, useState } from "react";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip.tsx";
import { usePost } from "@/hooks/use-post.tsx";
import LoadingSpinner from "@/components/ui/loding-spinner.tsx";

interface ConnectSocialMediaCardProps {
    label: string;
    icon: ElementType;
}

export function ConnectSocialMediaCard({ label, icon: Icon }: ConnectSocialMediaCardProps) {

    const [isLoading, setIsLoading] = useState(true);
    const [isConnected, setIsConnected] = useState(false);

    const post = usePost();

    const connectSocialMedia = () => {
        post({
            url: 'exemplo.com',
            functionToRun: () => {
                setIsConnected(true);
            },
            onSuccess: () => {
                setIsLoading(false);
            },
            onFailure: () => {
                setIsConnected(false);
                setIsLoading(false);
            },
            setIsLoading: setIsLoading // Pass setIsLoading in props
        });
    }

    const disconnectSocialMedia = () => {
        post({
            url: 'exemplo.com',
            functionToRun: () => {
                setIsConnected(false);
            },
            onSuccess: () => {
                setIsLoading(false);
            },
            onFailure: () => {
                setIsConnected(true);
                setIsLoading(false);
            },
            setIsLoading: setIsLoading
        });
    }

    const randomizeTimeToChangeIsLoading = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, Math.random() * 10000);
    }

    useEffect(() => {
        randomizeTimeToChangeIsLoading();
    }, []);

    return (
        <Card className="flex flex-col w-full min-w-72 min-h-52 md:min-h-48 items-center text-center justify-center pt-6">
            <CardContent className="flex w-full flex-col items-center gap-2">
                {isLoading ? (
                    <div className="flex items-center justify-center w-full h-full">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <>
                        {isConnected ? (
                            <div>
                                <span>Você está conectado</span>
                                <Button variant="default" onClick={disconnectSocialMedia}>
                                    Desconectar
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="w-max self-end">
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <InfoIcon className="h-5 w-5" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Informações sobre a conexão
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                                <Icon className="h-[3rem] w-[3rem] md:size-8" />
                                {label}
                                <Button variant="default" onClick={connectSocialMedia}>
                                    Conectar
                                </Button>
                            </>
                        )}
                    </>
                )}
            </CardContent>
        </Card>
    );
}
