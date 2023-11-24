'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetDetailMovie from '../../utils/networks/GetDetailMovie'


const BlogTags = (props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}


const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const Detail = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [genres, setGenres] = useState([])

  const url_image = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
  const backdropUrl = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  const [productionCompanies, setProductionCompanies] = useState([]);

  const getDetail = async (id) => {
    const data = await GetDetailMovie(id)
    await setMovie(data)
    await setGenres(data.genres)
    await setProductionCompanies(data.production_companies);
  }

  useEffect(() => {
    getDetail(id)
  }, [id]);

  console.log(movie);

  return (
    <Container
      maxW={'7xl'}
      p="12"
      backgroundImage={`url(${backdropUrl})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      filter="brightness(0.9)"
      color={useColorModeValue('black', 'white')}
    >
      <Heading as="h1" color={useColorModeValue('black', 'white')}>
        {movie.original_title}
      </Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={url_image}
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <BlogTags tags={genres.map(genre => genre.name)} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {movie.tagline}
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            {movie.overview}
          </Text>
          <Box marginTop="2">
            <Text fontWeight="semibold">Release Date:</Text>
            <Text>{movie.release_date}</Text>
          </Box>
          <Box marginTop="2">
            <Text fontWeight="semibold">Popularity:</Text>
            <Text>{movie.popularity}</Text>
          </Box>
          <Box marginTop="2">
            <Text fontWeight="semibold">Vote Average:</Text>
            <Text>{movie.vote_average}</Text>
          </Box>
          <Box marginTop="2">
            <Text fontWeight="semibold">Genres:</Text>
            <Text>{genres.map(genre => genre.name).join(', ')}</Text>
          </Box>
          <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
        </Box>
      </Box>
    </Container>
  );
}

export default Detail