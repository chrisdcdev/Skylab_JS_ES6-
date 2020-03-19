module.exports = {
    entry:'./main.js',  //arquivo principal
    output: {
        path: __dirname,
        filename: 'bundle.js',
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