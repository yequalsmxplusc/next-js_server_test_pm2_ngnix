module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: 'npm start',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      key  : 'cfl.pem',
      user : 'ubuntu',
      host : '100.25.147.210',
      ref  : 'origin/main',
      repo : 'git@github.com:yequalsmxplusc/next-js_server_test_pm2_ngnix.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes',
    }
  }
};
