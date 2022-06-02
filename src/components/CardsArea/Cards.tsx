import { Flex, Grid } from "@chakra-ui/react";
import { Card } from "./Card";

export function Cards(){
    return(
        <Flex mb="24">
            <Grid templateColumns="repeat(3, 1fr)" gap="10">
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Problemas Digestivos"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Saúde Hormonal"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Bem-estar Mental"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Cuidados Pediátricos"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Autoimune e Inflamação"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
                <Card 
                    cardIcon="../../../public/cardIcon.png"
                    cardTitle="Saúde do Coração"
                    cardText="Amet minim mollit non deserunt ullamco est sit aliqua dolor 
                    do amet sint. Velit officia consequat duis enim."
                />
            </Grid>
        </Flex>
    )
}
