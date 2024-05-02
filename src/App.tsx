import {AppBar} from "@/components/ui/app-bar.tsx";

function App() {

    return (
        <div className="flex w-screen h-screen flex-col ">
            <AppBar />

            <div className="grow">
                <h1>Home</h1>
            </div>

            <div className="flex border-t-2 h-8 justify-center items-center">
                <h3>SocialHub</h3>
            </div>
        </div>
    )
}

export default App
