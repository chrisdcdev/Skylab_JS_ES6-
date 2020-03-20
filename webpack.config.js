module.exports = {
    entry:'./src/main.js',  //arquivo principal
    output: {
        path: __dirname +'/public',
        filename: 'bundle.js' ,
    },
    devServer:{
        contentBase:__dirname + '/public' //caminho pra onde vai abri o servidor da aplicação
    },
    module: {
        rules:[ //falando qual o loader que será utilizado, no caso, é o babel
        {
            test:/\.js$/,
            exclude: /node_modules/, //falando pro babel não executar nenhum arquivo js de node_modules
            use:{
                loader:'babel-loader',
           } 
        }
            
        ],
    },
};