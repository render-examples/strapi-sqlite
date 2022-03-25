module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4dbad35-6caa-4f84-be56-90d0d3bc2fdf'),
  },
});
