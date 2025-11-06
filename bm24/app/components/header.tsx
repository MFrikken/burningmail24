import "../css/header.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={"header"}>
            <h1>burningmail24</h1>
            <Image src="/logo.svg" alt="burningmail24 logo" width={64} height={64} />
        </div>
    );
 }