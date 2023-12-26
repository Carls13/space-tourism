import Image from "next/image";

import {
    HeaderContainer,
    OptionsContainer,
} from './Header.styles';
import { CustomLink } from "../CustomLink/CustomLink";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HeaderContainer>
            <Image src="/logo.png" width={48} height={48} alt="Logo" /> 
            <hr />
            <OptionsContainer isOpen={isOpen}>
                <CustomLink route="/"><b>00</b> HOME</CustomLink>
                <CustomLink route="/destination"><b>01</b> DESTINATION</CustomLink>
                <CustomLink route="/crew"><b>02</b> CREW</CustomLink>
                <CustomLink route="/technology"><b>03</b> TECHNOLOGY</CustomLink>
            </OptionsContainer>
            <Image src={!isOpen ? "/close.svg" : "/burger.svg"} onClick={() => setIsOpen(!isOpen)} width={48} height={48} alt="Logo" className="toggle-menu-icon" /> 
        </HeaderContainer>
    );
};