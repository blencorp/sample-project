import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-[4rem] gap-3">
            <h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
                Built with ❤️ &
            </h1>
            <p className="leading-7 text-xl [&:not(:first-child)]:mt-1">
                React (Vite), TypeScript, React Router Dom, Node, GraphQL
            </p>
            <Link to="/listing">
                <Button>Listings</Button>
            </Link>
            <div className="mt-[4rem]">
                <a href="https://www.michaelshimeles.com/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">my portfolio 🚀</Button>
                </a>
            </div>
        </div>
    )
}