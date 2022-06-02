import { Flex, Text } from "@chakra-ui/react";
import { Cards } from "./Cards";

export function CardsArea(){
    return(
        <Flex w="100%" bgColor="green.50" justify="center">
            <Flex w="80%" justify="center" align="center" direction="column">
                <Flex w="500px" mt="28" mb="16" direction="column" textAlign="center">
                    <Text color="green.700" fontWeight="bold" letterSpacing="wider">
                        SERVIÇOS
                    </Text>
                    <Text fontSize="4xl" fontWeight="bold" mt="6">
                        Como podemos ajudá-lo a se sentir melhor?
                    </Text>
                </Flex>

                <Cards />
            </Flex>
        </Flex>
    )
}