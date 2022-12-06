import { Button } from "react-bootstrap";

export function Visa(){
    return(
        <Button
        style={{ width: "3rem", height: "3rem", position: "relative" }}
        variant="outline-primary"
        className="rounded-circle"
        >
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Visa credit card"><path fill="#273991" d="m12.77 32.28-1.69-8.17a2 2 0 0 0-2.2-1.5H1.06L1 23c6.08 1.46 10.1 5 11.77 9.28Zm5.68-9.49L13.51 35.4 13 33.5a19.77 19.77 0 0 0-7-7.66l4.51 15.41h5.33l7.94-18.46Zm7.38 0-3.15 18.5h5l3.16-18.5Zm33.09 0H55a2.5 2.5 0 0 0-2.64 1.54l-7.45 16.94h5.29s.86-2.28 1.06-2.78h6.45c.15.64.61 2.76.61 2.76H63Zm-6.21 11.92c.42-1.06 2-5.17 2-5.17s.42-1.06.67-1.76l.35 1.59 1.16 5.34ZM41 30.2c-1.75-.85-2.83-1.43-2.82-2.29s.91-1.59 2.88-1.59a9.08 9.08 0 0 1 3.77.71l.46.21.68-4a12.89 12.89 0 0 0-4.51-.77c-5 0-8.49 2.5-8.52 6.1 0 2.65 2.5 4.14 4.41 5S40 35.06 40 35.87c0 1.24-1.57 1.81-3 1.81a10.58 10.58 0 0 1-4.74-1l-.65-.3-.71 4.14a15.87 15.87 0 0 0 5.62 1c5.29 0 8.73-2.48 8.77-6.32-.01-2.08-1.35-3.68-4.29-5Z"/><path fill="#f99f1b" d="M11.08 24.11a2 2 0 0 0-2.2-1.5H1.06L1 23c6.08 1.47 10.1 5 11.77 9.29Z"/></g></svg>
        </Button>
    )
}