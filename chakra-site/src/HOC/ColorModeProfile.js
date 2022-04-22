import React from 'react';
import { useColorModeValue, Image } from '@chakra-ui/react';
import ProfileLight from '../Documents/profile-light.jpg'
import ProfileDark from '../Documents/profile-dark.jpg'

export const ColorModeProfile = props => {
  const text = useColorModeValue('dark', 'light');
  const profileSource = useColorModeValue(ProfileLight, ProfileDark)

  return (
    <Image
      size="md"
      fontSize="lg"
      aria-label={`Duncan Klemm in ${text} mode`}
      color="current"
      borderRadius='full'
      boxSize='145px'
      src={profileSource}
      alt='Duncan Klemm'
      {...props}
    />
  );
};
