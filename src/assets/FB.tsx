import { Button } from "react-bootstrap";

export function FB() {
    return (
        <Button
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        className="rounded-circle">
          <svg xmlns="http://www.w3.org/2000/svg"
           width="3rem"
            height="3rem"
             viewBox="259.445 10.281 800 760">
                <circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"/><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"/></svg>
        </Button>
    )
}