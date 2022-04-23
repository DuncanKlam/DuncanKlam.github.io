import React from 'react';
import { useColorModeValue, Image, Tooltip } from '@chakra-ui/react';
import ProfileLight from '../Documents/profile-light.jpg'
import ProfileDark from '../Documents/profile-dark.jpg'

export const ColorModeProfile = props => {
  const text = useColorModeValue('light', 'dark');
  const profileSource = useColorModeValue(ProfileLight, ProfileDark)
  const tooltipText = useColorModeValue('Duncan', 'the cooler Duncan')

  return (
    <Tooltip label={tooltipText} placement={'right'}>
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
    </Tooltip>
    
  );
};
