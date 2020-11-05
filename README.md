# Covid Tracker

Covid Tracker is a web application built using [Angular v10.2.0](https://github.com/angular) to track `COVID-19` cases around the world.

This application consumes API `https://corona.lmao.ninja/v2/countries` from [covid-19 global stats](https://corona.lmao.ninja/) and hosted on AWS S3.

There are 2 ways you can launch the application :

1. Application is hosted on `Github Pages`, you can launch the application on your browser directly, by [clicking here](https://kumaran-is.github.io/covid-tracker).

2. Launch the application on [StackBlitz](https://stackblitz.com/), by [clicking here](https://stackblitz.com/github/kumaran-is/covid-tracker). [StackBlitz](https://stackblitz.com/) is a online code editor built on top of vscode editor, where you can edit and see your changes on the fly.

**Table of contents:**

1. [Prerequisites and Installation](#prerequisites-and-installation)
2. [Dependencies and Libraries](#dependencies-and-libraries)
3. [Quick Start](#quick-start)
4. [Host the Application on AWS S3 using AWS CLI](#host-the-application-on-aws-s3-using-aws-cli)
5. [Publish Angular Application to Github Pages](#publish-angular-application-to-github-pages)
6. [Status and Issues](#status-and-issues)

## Prerequisites and Installation

1. Create a free-tier account in [AWS](www.aws.amazon.com).

2. Create an `IAM` user  with [AdministratorAccess](https://console.aws.amazon.com/iam/home?region=us-east-1#/policies/arn:aws:iam::aws:policy/AdministratorAccess$jsonEditor) policy and [AmazonS3FullAccess](https://console.aws.amazon.com/iam/home?region=us-east-1#/policies/arn:aws:iam::aws:policy/AmazonS3FullAccess$jsonEditor) policy. It is highly recommended not to use `Root` account.

3. Install Python v3.9.x

   ![Installation Instruction](./docs/1.png)

4. Install AWS CLI v2
   ![Installation Instruction](./docs/2.png)

5. Configure AWS CLI. To configure the AWS CLI you’ll need the following from your AWS account :

   1. Access Key Id

   2. Secret Key
   3. Default AWS region
   

![Installation Instruction](./docs/3.png)

## Dependencies and Libraries

Library | Version | Notes
:-------|:--------:|-------
[Node](https://nodejs.org/) | 12.13.x | Recommended NodeJS version
[NPM](https://nodejs.org/) | 6.12.x | Recommended NPM version
[Angular](https://angularjs.org/) | 10.x.x. | JavaScript-based open-source front-end SPA framework
[Python](https://www.python.org/)| ~3.9.x | programming language
[awscli](https://aws.amazon.com/cli/)| ~2.x.x | AWS Command Line Interface


## Quick Start

1. Clone repository and enter it

  ```bash
  git clone https://github.com/kumaran-is/covid-tracker.git
  cd covid-tracker
  ```

2. Install NPM and Bower dependencies

  ```bash
  npm install
  ```

3. Run the application locally. Navigate to <http://localhost:4200/>. The app will automatically reload if you change any of the source files.

  ```bash
 ng serve --o
  ```

## Host the Application on AWS S3 using AWS CLI

1. Run below command to create a bucket in S3. This command creates a bucket in  `us-east-1` AWS region. 👉 Make sure to replace `bucket_name` with your own bucket name and `region` with the region that you want to create the bucket in the package.json scripts.
👉 Note: Bucket name must be unique across all existing bucket names in Amazon S3. The bucket name should be same as domain or subdomain. Example something like `covid.com` or `dev.covid.com`.

  ```bash
  npm run aws-cb
  ```

2. Run below command to enable S3 for static web hosting. 👉 Make sure to replace `bucket_name` with your own bucket name

  ```bash
  npm run aws-website
  ```

3. To make your hosted Angular app available to the public, all objects in the S3 bucket need to be publicly accessible. Go to your bucket in AWS console and create a bucket policy for you S3 bucket as mentioned below. 👉 Make sure to replace `bucket_name` with your own bucket name

  ```JSON
 {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::bucketname.com/*"
        }
    ]
}
  ```

![Bucket Policy for S3](./docs/4.png)

4. Now launch the application from AWS s3 by navigating to <http://<YOUR BUCKET NAME>.s3-website-<REGION NAME>.amazonaws.com>

## Publish Angular Application to Github Pages

`Github Pages` is a Github feature that allows you to deploy any static website or web application or Angular application from your `gh-pages` branch to `Github Pages` for free

Using [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) library, you can easily publish your angular application to `Github Pages`.

1. Install [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) as a devDependency to your project

    ```bash
    npm install angular-cli-ghpages --save-dev
    ```

1. Add below npm script to your `package.json`

    ```bash
    "scripts": {
      ....
      .....
      "prod-build": "ng build --prod --base-href=./",
      "git-publish": "npm run prod-build && npx angular-cli-ghpages --dir=dist/covid-tracker --branch=gh-pages"
    }
    ```

1. Publish your application from `gh-pages` branch to `Github Pages`. Branch `gh-pages` is automatically created for you. Command below,
first runs production build, automatically commits and pushes the changes from 'dist' folder to `gh-pages` branch and deploys it to `Github Pages`.
Branch `gh-pages` act as a staging folder for deployment.

    ```bash
    npm run git-publish
    ```

1. Launch your application on browser by navigating to `https://username.github.io/repo-name/`. Example to launch this application click this link <https://kumaran-is.github.io/covid-tracker>

1. For more detail and options, refer the official [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) github.


## Status and Issues

* [Change History](./CHANGELOG.md).
* [Issue tracker](https://github.com/kumaran-is/covid-tracker/issues?state=open)
