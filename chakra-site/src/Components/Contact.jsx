import { Flex, Heading, Input, VStack, Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton} from '@chakra-ui/react';
import { ArrowForwardIcon, } from '@chakra-ui/icons';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [captchaResponse, setCaptchaResponse] = useState('')
  const [sendEmailAlert, setSendEmailAlert] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [loading, setLoading] = useState(false)


  function sendEmail() {
    setSendEmailAlert('')
    setShowAlert(true)
    setLoading(true)

    var templateParams = {
      'from_name': name,
      'message': message,
      'regarding': subject,
      'from_email': email,
      'g-recaptcha-response': captchaResponse
    };

    emailjs.send('service_p25wiqs', 'template_rm6lzw8', templateParams, '4yDdzkjNKpaL5tnvo')
    .then(function(response) {
      // console.log('SUCCESS!', response.status, response.text);
      setLoading(false)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setSendEmailAlert(<Alert status='success'>
                          <AlertIcon />
                          <Box>
                            <AlertTitle>Success!</AlertTitle>
                            <AlertDescription>
                              Your email has been sent. I will try to
                              respond within the next 48 hours! Thank you for your interest!
                            </AlertDescription>
                          </Box>
                          <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-1}
                            top={-1}
                            onClick={() => {setShowAlert(false)}}
                          />
                        </Alert>)
   }, function(error) {
      setLoading(false)
      setSendEmailAlert(<Alert status='error' w={600}>
                          <AlertIcon />
                          <Box>
                            <AlertTitle>Uh oh!</AlertTitle>
                            <AlertDescription>
                              There was an error processing your request. Please try again.
                            </AlertDescription>
                          </Box>
                          <CloseButton
                            alignSelf='flex-start'
                            position='relative'
                            right={-1}
                            top={-1}
                            onClick={() => {setShowAlert(false)}}
                          />
                        </Alert>)
      console.log('FAILED...', error);
   });
  }

  function onChange(value) {
    setCaptchaResponse(value)
  }

  return (
    <Flex flexDirection={'column'} justify={'center'} align={'flex-start'} h={'100%'} marginLeft={10} id='contact' gap={15}>
      <Heading as='h1' size='3xl'>
          Contact me!
      </Heading>
      {showAlert && sendEmailAlert}
      <VStack gap={5} width='900px' >
        <Input
          value={name}
          onChange={(e) => {setName(e.target.value)}}
          placeholder='Name'
          size='lg'
        />
        <Input
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          placeholder='Email'
          size='lg'
        />
        <Input
          value={subject}
          onChange={(e) => {setSubject(e.target.value)}}
          placeholder='Subject'
          size='lg'
        />
        <Input
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
          placeholder='Message'
          size='lg'
          height={'300px'}
        />
      </VStack>
      <ReCAPTCHA
        sitekey="6LcdOpAfAAAAAENtfNuh4k3-UJnFjtlDqWxXKs1D"
        onChange={onChange}
        theme='light'
      />
      <Button rightIcon={<ArrowForwardIcon />} variant='outline'  onClick={sendEmail} 
        isLoading={loading} loadingText='Sending'>
        Send
      </Button>
    </Flex>
  )
}

export default Contact