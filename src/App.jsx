import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "native-base";

import imageDesktop from "./assets/image-product-desktop.jpg";
import imageMobile from "./assets/image-product-mobile.jpg";
import iconCart from "./assets/icon-cart.svg";

const App = () => {
  const flexImage = useBreakpointValue({
    base: imageMobile,
    lg: imageDesktop,
  });

  return (
    <Box minHeight={"100vh"} justifyContent={"center"} px={4} py={2} bg={"Cream"}>
      <Center space={5}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Box
            w={{ base: 350, lg: 280 }}
            h={{ base: 250, lg: 420 }}
            roundedTopLeft={"lg"}
            roundedTopRight={{ base: "lg", lg: "none" }}
            roundedBottomLeft={{ base: "none", lg: "lg" }}
            overflow={"hidden"}
          >
            <Image
              source={{ uri: flexImage }}
              resizeMode={"cover"}
              alt={"image"}
              w={"full"}
              h={"full"}
            />
          </Box>
          <VStack
            px={7}
            py={8}
            w={{ base: 350, lg: 280 }}
            h={{ base: 380, lg: 420 }}
            bg={"White"}
            roundedBottomRight={"lg"}
            roundedTopRight={{ base: "none", lg: "lg" }}
            roundedBottomLeft={{ base: "lg", lg: "none" }}
            justifyContent={"space-between"}
          >
            <Text
              fontFamily={"Montserrat"}
              color={"DarkGrayishBlue"}
              fontWeight={500}
              letterSpacing={4}
              fontSize={"xs"}
            >
              PERFUME
            </Text>
            <Heading fontFamily={"Fraunces"}>Gabrielle Essence Eau De Parfum</Heading>
            <Text fontFamily={"Montserrat"} color={"DarkGrayishBlue"}>
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </Text>
            <HStack alignItems={"center"} space={5}>
              <Text color={"DarkCyan"} fontFamily={"Fraunces"} fontSize={"3xl"}>
                $149.99
              </Text>
              <Text
                fontFamily={"Montserrat"}
                color={"DarkGrayishBlue"}
                textDecorationLine={"line-through"}
              >
                $169.99
              </Text>
            </HStack>
            <Button
              py={3}
              rounded={"md"}
              bg={"DarkCyan"}
              _text={{ fontFamily: "Montserrat", fontWeight: 700 }}
              _hover={{ bg: "VeryDarkBlue" }}
              leftIcon={<Image source={iconCart} size={4} mx={1} alt={"icon"} />}
            >
              Add to Cart
            </Button>
          </VStack>
        </Stack>
      </Center>
    </Box>
  );
};

export default App;
