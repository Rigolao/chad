import {useCallback} from "react";
import {ToastAction} from "@/components/ui/toast.tsx";
import {useToast} from "@/components/ui/use-toast.ts";

interface usePostProps {
    url: string;
    functionToRun(data?: object): boolean | void;
    onSuccess?(data?: object): boolean | void;
    onFailure?(data?: object): boolean | void;
    setIsLoading: (value: boolean) => void;
}

export function usePost() {
    const { toast } = useToast();

    const randomizeIsSuccess = useCallback(() => {
        return Math.random() > 0.5;
    }, []);

    const postRequest = useCallback((props: usePostProps) => {
        const { url, functionToRun, onSuccess, onFailure, setIsLoading } = props;

        console.log('Chamando api: ' + url);
        setIsLoading(true);

        setTimeout(() => {
            functionToRun();

            const success = randomizeIsSuccess();

            if (success) {
                onSuccess && onSuccess();
                toast({
                    title: 'Sucesso!',
                    description: 'Funcionalidade realizada com sucesso!',
                });
            } else {
                onFailure && onFailure();
                toast({
                    variant: 'destructive',
                    title: 'Erro!',
                    description: 'Erro ao realizar a funcionalidade',
                    action: (
                        <ToastAction
                            altText={'Tente novamente!'}
                            onClick={() => {
                                setIsLoading(true);
                                postRequest(props);
                            }}>
                            Tentar novamente
                        </ToastAction>
                    ),
                });
            }
            setIsLoading(false);
        }, 2000);
    }, [randomizeIsSuccess, toast]);

    return postRequest;
}