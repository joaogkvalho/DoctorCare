import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa'

import { Header } from "./Header";
import { Stats } from "./Stats";

export function LandingPage(){
    return(
        <Flex direction="column" align="center" bgColor="green.100">
            <Header />

            <Flex w="100%" align="center" justify="center">
                <Flex w="80%" align="center" justify="space-between">
                    <Flex direction="column" w="550px" mt="24">
                        <Text color="green.700" fontWeight="bold" letterSpacing="wider">
                            BOAS-VINDAS A DOCTORCARE 👋
                        </Text>
                        <Text fontSize="5xl" fontWeight="bold" my="4">
                            Assistência médica simplificada para todos
                        </Text>
                        <Text mb="6">
                            Os médicos da DoctorCare vão além dos sintomas para tratar a causa raiz 
                            de sua doença e proporcionar uma cura a longo prazo.
                        </Text>

                        <Button 
                            rounded="full" w="275px" py="6" border="2px"
                            color="whiteAlpha.900" fontSize="sm" bgColor="green.700"
                            _hover={{
                                bgColor: "green.900"
                            }}
                        >
                            <FaWhatsapp size="20px" />
                            <Text ml="4">
                                AGENDE SUA CONSULTA
                            </Text>
                        </Button>
                    </Flex>

                    <Box boxSize="sm" mr="8">
                        <Image src="../../../public/image.png" />
                    </Box>
                </Flex>
            </Flex>

            <Stats />
        </Flex>
    )   
}