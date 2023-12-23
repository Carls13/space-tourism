import Image from "next/image";

import {
    HeaderContainer,
    OptionsContainer,
} from './Header.styles';
import { CustomLink } from "../CustomLink/CustomLink";

export const Header = () => {
    return (
        <HeaderContainer>
            <Image src="/logo.png" width={48} height={48} alt="Logo" /> 
            <hr />
            <OptionsContainer>
                <CustomLink route="/"><b>00</b> HOME</CustomLink>
                <CustomLink route="/destination"><b>01</b> DESTINATION</CustomLink>
                <CustomLink route="/crew"><b>02</b> CREW</CustomLink>
                <CustomLink route="/technology"><b>03</b> TECHNOLOGY</CustomLink>
            </OptionsContainer>
        </HeaderContainer>
    );
};