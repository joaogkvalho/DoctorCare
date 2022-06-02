import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function AboutUs(){
    return(
        <Flex w="100%" align="center" justify="center" bgColor="beige.100" py="24">
            <Flex w="80%" align="center">
                <Image src="../../../public/aboutUs.png" />

                <Flex direction="column" ml="20">
                    <Text color="green.700" fontWeight="bold">
                        SOBRE NÓS
                    </Text>
                    <Text fontSize="3xl" fontWeight="bold" mt="2" mb="4">
                        Entenda quem somos e por que existimos
                    </Text>
                    <Text>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}