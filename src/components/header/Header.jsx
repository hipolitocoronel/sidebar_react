import { Input, InputGroup, InputLeftElement, Avatar } from "@chakra-ui/react";
import "./style.css";

export const Header = () => {
    return (
        <header className="header-content p-2">
            <div className="header-search-content">
                <InputGroup size="xs">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<i class="fi fi-rr-search"></i>}
                    />
                    <Input type="tel" placeholder="Buscar ..." />
                </InputGroup>
            </div>
            <div className="header-user-content">
                <Avatar size="xs" bg="teal.500" />
                <div className="header-user-text">
                    <p className="font-bold">Hipolito</p>
                    <p className="text-slate-600">Admin</p>
                </div>
            </div>
        </header>
    );
};
