module.exports = ({ env }) => ({
  host: "0.0.0.0",
  url: env("RENDER_EXTERNAL_URL"),
});
