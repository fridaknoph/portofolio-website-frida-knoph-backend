module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', 'CyGgzHW+dRM4jAcDf7Dbqg==','Z+7HYnJy1sqqmzGrQxW4Vw==','IUyhTe9QUKEqPSFOS0m9dg==','6KlXZczZsO0xHMm3uALIMg=='),
  },
});
