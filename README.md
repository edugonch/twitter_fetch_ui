# Twitter fetch UI


### Prerequisites

You need this software to install the project

1) Ruby 2.5
2) Rails 5.1.5
3) PostgreSQL + Devtools
4) NodeJs
5) Redis
6) Foreman
7) Yarn

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Installing

A step by step series of examples that tell you have to get a development env running

1) Clone the repo at https://github.com/edugonch/twitts_fetch_backend
2) Run bundle install
```
bundle install
```
2) Run yarn install
```
yarn install
```
3) Run the [BackendFetchApp] (https://github.com/edugonch/twitts_fetch_backend) in port 3002
```
foreman start -f Procfile.dev
```
4) Run the application with webpacker
```
foreman start -f Procfile.dev
```

## Built With

* [RubyOnRails](http://rubyonrails.org/) - The web framework used
* [Bootstrap](https://getbootstrap.com/) - The UI web framework used
* [ReactJs](https://reactjs.org/) - The Javascript framework used
* [WebPacker](https://github.com/rails/webpacker) - JavaScript pre-processor for Rails
* [Tabler](https://github.com/tabler/tabler) - Open Source dashboard template for Bootstrap
* [RestClient](https://github.com/rest-client/rest-client) - Simple DSL for accessing HTTP and REST resources

## Authors

* **Eduardo González** - *Initial work* - [edugonch](https://github.com/edugonch)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

You can see it live running at: 
* [TwitterFetchUI](https://blooming-brook-71290.herokuapp.com/)
```
user: test@test.com
```
```
password: testpassword
```


