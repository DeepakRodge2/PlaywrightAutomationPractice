module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    require: ['support/**/*.js', 'steps/**/*.js'],
    format: ['progress'],
    publishQuiet: true,
    parallel: 1,
    retry: 0,
    worldParameters: {
      baseUrl: process.env.BASE_URL || 'https://sqatools.in/automation-practice-page/',
    },
  },
};
