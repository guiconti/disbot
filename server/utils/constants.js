module.exports = {
  messages: {
    error: {
      AUDIO_ID_NOT_FOUND: 'This audio id was not found in our database.',
      INVALID_URL: 'The url sent is invalid',
      INVALID_API_KEY: 'This is not a valid API key.',
      INVALID_USER_DATA: 'This is not a valid user data.',
      INVALID_AUDIO_DATA: `The audio submited is invalid. 
      The file must be an audio file with no more than 5mb.`,
      AUDIO_NAME_USED: 'This audio name is already in use.',
      EMPTY_AUDIO_LIST: 'There is no audio file saved at the moment.',
      NO_AUDIO_TO_SKIP: 'The playlist is empty.',
      UNEXPECTED: 'An unexpected error occurred, please try again.'
    },
    info: {
      AUDIO_ADDED_QUEUE: 'Your audio was added to the bot queue.',
      AUDIO_UPLOADED: 'Your audio was added to our list.',
      AUDIO_SKIPPED: 'Audio skipped!'
    }
  },
  regex: {
    URL: /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i,
    UUIDV4: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  },
  audio: {
    type: {
      FILE: 0,
      STREAM: 1
    },
    MIMETYPES: {
      'audio/mpeg': '.mp3',
      'audio/mp3': '.mp3',
      'audio/ogg': '.ogg',
      'audio/wav': '.wav'
    },
    MAX_FILE_SIZE: 5000000
  },
  values: {
    MAX_STRING_SIZE: 255,
    AUDIO_LIST_CACHE_TIME_IN_SECONDS: 60 * 60 * 24,
    AUDIO_LIST_CACHE_NAME: 'audios',
    API_KEYS_CACHE_NAME: 'apiKeys'
  },
  paths: {
    AUDIOS_FOLDER: '/../../audios',
    AUDIOS_LOCAL_FOLDER: './audios/'
  }
};
