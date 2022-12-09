require('dotenv').config()

const config = {
  secrets: {
    jwt: process.env.JWT_SECRET as string,
    jwtExp: '100d',
  },
}

export default config
