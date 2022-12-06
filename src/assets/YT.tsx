import { Button } from "react-bootstrap";

export function YT() {
    return (
        <Button
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        className="rounded-circle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 65 75"
                fill="currentColor"><path fill="#C8131A" d="M31.999.999C14.879.999 1 14.878 1 32c0 17.12 13.879 31.001 30.999 31.001C49.121 63.001 63 49.12 63 32 63 14.878 49.121.999 31.999.999zM25 41.543V22.458l18.225 9.575L25 41.543z" /><path fill="#E01726" d="M41.926 32.724 27 40.499l.331 3.307L45.3 34.467zM3.271 34.435c0-17.122 13.879-31.001 30.999-31.001 8.363 0 15.948 3.317 21.524 8.701C50.108 5.33 41.561.999 31.999.999 14.879.999 1 14.878 1 32c0 8.758 3.638 16.662 9.478 22.301a30.872 30.872 0 0 1-7.207-19.866z" /><path fill="#8E0919" d="m43.216 32.051-1.846.962-16.297 8.534 19.009 19.009a31.113 31.113 0 0 0 14.695-12.943L43.216 32.051z" /></svg>
        </Button>
    )
}