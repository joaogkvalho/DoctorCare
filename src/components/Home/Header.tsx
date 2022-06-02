import { Button, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export function Header(){
    return(
        <Flex w="100%" align="center" justify="center">
            <Flex w="80%" align="center" justify="space-between" py="6">
                <Flex align="center" justify="center">
                    <Text fontSize="3xl" color="gray.700">
                        Doctor
                    </Text>
                    <Text fontSize="3xl" fontWeight="semibold" color="green.700">
                        Care
                    </Text>
                </Flex>

                <UnorderedList listStyleType="none" display="flex" flexDirection="row">
                    <ListItem px="4" color="green.700" cursor="pointer" fontWeight="bold">Início</ListItem>
                    <ListItem px="4" color="green.700" cursor="pointer">Sobre</ListItem>
                    <ListItem px="4" color="green.700" cursor="pointer">Serviços</ListItem>
                    <ListItem px="4" color="green.700" cursor="pointer">Depoimentos</ListItem>
                </UnorderedList>

                <Button 
                    rounded="full" w="200px" py="6" border="2px" borderColor="green.700" 
                    color="green.700" fontSize="sm" bgColor="transparent"
                    _hover={{
                        bgColor: "green.900",
                        color: "gray.50",
                        borderColor: "green.900"
                    }}
                >
                    AGENDAR CONSULTA
                </Button>
            </Flex>
        </Flex>
    )
}
