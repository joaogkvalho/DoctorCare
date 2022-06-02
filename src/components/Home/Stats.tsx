import { Divider, Flex, Stat, StatHelpText, StatNumber } from "@chakra-ui/react";

export function Stats(){
    return(
        <Flex 
            w="1100px" h="200px" bgColor="beige.100" align="center" 
            justify="center" textAlign="center" rounded="md" mt="24" mb="16"
        >
            <Stat>
                <StatNumber fontSize="4xl">+3.500</StatNumber>
                <StatHelpText color="green.700">Pacientes Atendidos</StatHelpText>
            </Stat>
            <Divider h="85px" w="1px" orientation="vertical" bgColor="green.800" />
            <Stat>
                <StatNumber fontSize="4xl">+15</StatNumber>
                <StatHelpText color="green.700">Especialistas disponíveis</StatHelpText>
            </Stat>
            <Divider h="85px" w="1px" orientation="vertical" bgColor="green.700" />
            <Stat>
                <StatNumber fontSize="4xl">+10</StatNumber>
                <StatHelpText color="green.700">Anos no mercado</StatHelpText>
            </Stat>
        </Flex>
    )
}