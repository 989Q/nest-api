import developmentConfig from './envs/development';
import productionConfig from './envs/production';

const configuration = {
  development: developmentConfig,
  production: productionConfig,
};

export default configuration[process.env.NODE_ENV || 'development'];