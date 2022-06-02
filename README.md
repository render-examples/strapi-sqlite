# Deploy Strapi to Render

This is a sample [Strapi](https://strapi.io/) app, configured for deployment to [Render](https://render.com). It uses a SQLite database, which is stored on a [persistent disk](https://render.com/docs/disks) along with uploaded Media Library files.

This repo forces all changes to be made in dev mode, after forking, run `yarn install && yarn develop` to open development mode (allows editing of post types). 

After changing the software to your liking simply submit a push request to github
```
git add .
git commit -m "your commit message"
git push origin master
```

You will need a private key if you are using github.


Fork this repo and click the button below to deploy.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)



See the guide at https://render.com/docs/deploy-strapi for more information.
