import { Button } from "@chakra-ui/react";
export const MainHeader = ({ title, button }) => {
    return (
        <div className="main-header-content mb-1">
            <h1 className="font-bold text-gray-600">{title}</h1>
            {
                  button ? 
                        <Button
                              size={'xs'} 
                              leftIcon={<i class="fi fi-rr-plus"></i>} 
                              colorScheme="blue" 
                              variant="solid">
                              {button}
                        </Button>
                        : ''
            }
            
        </div>
    );
};
