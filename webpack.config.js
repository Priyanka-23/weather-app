module.exports={
    entry: './public/completeapp.js',
    output:{
        path:__dirname,
        filename:'public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
            WeatherMain:'public/components/WeatherMain.js',
            WeatherForm:'public/components/WeatherForm.js',
            WeatherMessage:'public/components/WeatherMessage.js',
            Api:'public/api/weatherapi.js'
        },
        extension:['.js']   //whereever it finds the extension of js it will automatically consider that
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.js?$/,
                exclude:/(node_modules)/            //for excluding node modules
            }
        ]
    }
}