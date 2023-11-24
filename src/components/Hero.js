import React, { useEffect, useState } from 'react';
import Button from './ui/Button';
import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

const Hero = () => {
    const [movie, setMovie] = useState({});

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

        const response = await fetch(url);
        const data = await response.json();

        setMovie(data);
    }

    useEffect(() => {
        getDataApi();
    }, []);

    return (
        <Stack m={'0, auto'} minH={'100vh'} direction={{ base: 'column', md: 'row' }} alignItems={'center'} justifyContent={'center'}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color={'white'}>
                        <Text color={'red.700'} as={'span'}>
                            {movie.Title}
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.300'}>
                        {movie.Genre}
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
                        {movie.Plot}
                    </Text>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'white'}>
                        {movie.Writer}
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button variant='primary'>Watch</Button>
                        <Button variant='secondary'>Trailer</Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Image'}
                    maxH={'600px'}
                    maxW={'auto'}
                    objectFit={'cover'}
                    border-radius={'2rem'}
                    src={movie.Poster}
                />
            </Flex>
        </Stack>
    );
};

export default Hero;
