import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
  onSelectedGenre: (genre: Genre) => void;
  selectGenre: Genre | null
  
}

const GenreList = ({onSelectedGenre, selectGenre}: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  const getColor= (genre: Genre) =>
    selectGenre?.id === genre.id ? "yellow" :"gray"

  if(error) return null;

  if(isLoading) return <Spinner></Spinner>


  return (
    <>
      <Heading>Genres</Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
              colorScheme={getColor(genre)}
              variant="link"
              fontSize="lg"
              onClick={() => onSelectedGenre(genre)}>
              
              <Text>{genre.name}</Text>
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;