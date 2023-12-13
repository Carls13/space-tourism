import Image from "next/image";

import {
    HeaderContainer,
    OptionsContainer,
    Option
} from './Header.styles';

export const Header = () => {
    return (
        <HeaderContainer>
            <Image src="/logo.png" width={48} height={48} alt="Logo" /> 
            <hr />
            <OptionsContainer>
                <Option><b>00</b> HOME</Option>
                <Option><b>01</b> DESTINATION</Option>
                <Option><b>02</b> CREW</Option>
                <Option><b>03</b> TECHNOLOGY</Option>
            </OptionsContainer>
        </HeaderContainer>
    );
};