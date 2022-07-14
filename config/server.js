module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['M3Fe26SlWSqsVxdYpl1jXQaDGJTAFi3P']
  },
});
